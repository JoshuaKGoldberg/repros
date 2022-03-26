import chalk from 'chalk';
import { OptionValues, program } from 'commander';

import { updatePublicApis } from './public';
import { updateServiceApis } from './service';

function parseCommandLine(): OptionValues {
  program.name('parse-grpc-list').description('Update stubs to the latest protobuf definitions.');

  program
    .requiredOption('-p, --public-apis-file <name>', 'public APIs JSON file')
    .requiredOption('-r, --root-path <name>', 'root path of Arista resource APIs')
    .requiredOption('-s, --service-apis-file <name>', 'service APIs JSON file');

  program.parse(process.argv);

  return program.opts();
}

// The Node output from thrown errors looks really gross, so suppress all of it except the error
function main(): void {
  try {
    const opts = parseCommandLine();
    updateServiceApis(opts.rootPath, opts.serviceApisFile);
    updatePublicApis(opts.publicApisFile);
  } catch (error) {
    console.log(chalk.red(`${error}`));
    process.exit(1);
  }
}

main();
