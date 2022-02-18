# Repros

Reproduction cases for open source issues I find online.
See [branches](https://github.com/JoshuaKGoldberg/repros/branches).

## vitest-segmentation-fault

Demonstrates that attaching a breakpoint in the VS Code debugger causes vitest to segmentation fault.

1. `yarn`
2. Open this directory with Code
3. Attach a breakpoint anywhere in `index.test.js`
4. Press F5 to launch the `Debug Current Test File` task

```plaintext
josh@LAPTOP-B0MQCQ9I:~/repos/repros$  cd /home/josh/repos/repros ; /usr/bin/env 'NODE_OPTIONS=--require /home/josh/.vscode-server/bin/899d46d82c4c95423fb7e10e68eba52050e30ba3/extensions/ms-vscode.js-debug/src/bootloader.bundle.js --inspect-publish-uid=http' 'VSCODE_INSPECTOR_OPTIONS={"inspectorIpc":"/tmp/node-cdp.29903-9.sock","deferredMode":false,"waitForDebugger":"","execPath":"/usr/bin/node","onlyEntrypoint":false,"autoAttachMode":"always","mandatePortTracking":true,"fileCallback":"/tmp/node-debug-callback-6863962514e5d6e5"}' /usr/bin/node ./node_modules/vitest/vitest.mjs run src/index.test.js
Debugger attached.

 RUN  /home/josh/repos/repros

Segmentation fault
```

Note that the task passes normally on the command-line & without breakpoints attached.

```
josh@LAPTOP-B0MQCQ9I:~/repos/repros$ yarn test
yarn run v1.22.17
$ vitest run

 RUN  /home/josh/repos/repros

 √ src/index.test.js (1)

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  2.55s (in thread 5ms, 52227.91%)

Done in 3.03s.
```
