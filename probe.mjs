import path from 'node:path';
import ts from 'typescript';

const root = import.meta.dirname;
const parsed = ts.getParsedCommandLineOfConfigFile(
  path.join(root, 'tsconfig.json'),
  {},
  { ...ts.sys, onUnRecoverableConfigFileDiagnostic: diagnostic => console.error(diagnostic) },
);

console.log(
  'TSConfig file names:',
  parsed.fileNames.map(fileName => path.relative(root, fileName)),
);
