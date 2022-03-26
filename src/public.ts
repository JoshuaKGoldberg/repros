import { SingleBar } from 'cli-progress';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import protoParser, { ServiceDefinition } from 'proto-parser';

const NON_DESTRUCTIVE_CALLS = new Set(['GetOne', 'GetAll', 'Subscribe']);
const ROOT_PATH = 'cloudvision-apis/arista';

interface PublicApiResourceMap {
  [resourceApi: string]: {
    [name: string]: {
      [methodName: string]: {};
    };
  };
}

export function updatePublicApis(publicApisFile: string): void {
  const resourceMap: PublicApiResourceMap = {};
  const resourceApis = readdirSync(ROOT_PATH);

  const format = 'Public APIs: [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | {api}';
  const progress = new SingleBar({ format });
  progress.start(resourceApis.length, 0, { api: 'loading...' });

  for (const resourceApi of resourceApis) {
    progress.increment({ api: resourceApi });

    const inputFile = [ROOT_PATH, resourceApi, 'services.gen.proto'].join('/');

    if (existsSync(inputFile)) {
      resourceMap[resourceApi] = {};
      const sourceCode = readFileSync(inputFile, 'utf-8');
      const parsedCode = protoParser.parse(sourceCode, { resolve: false });
      const splitResource = resourceApi.split('.');

      if ('root' in parsedCode) {
        const elements =
          parsedCode.root.nested?.arista.nested?.[splitResource[0]].nested?.[splitResource[1]]
            .nested;

        if (elements) {
          for (const key of Object.keys(elements)) {
            if (elements[key].syntaxType === 'ServiceDefinition') {
              resourceMap[resourceApi][elements[key].name] = {};
              const methods = Object.keys((elements[key] as ServiceDefinition).methods);
              const filteredMethods = methods.filter((val) => NON_DESTRUCTIVE_CALLS.has(val));

              for (const method of filteredMethods) {
                const methodName = method[0].toLowerCase() + method.slice(1);
                resourceMap[resourceApi][elements[key].name][methodName] = {};
              }
            }
          }
        }
      }
    }
  }

  writeFileSync(publicApisFile, JSON.stringify(resourceMap, null, 2) + '\n');

  progress.stop();
}
