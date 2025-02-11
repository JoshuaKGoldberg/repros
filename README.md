# Repro: React `useEffect` with no arguments

```shell
npm i
npm run dev
```

```plaintext
Uncaught TypeError: create is not a function
    at react-stack-bottom-frame (react-dom_client.js?v=38f20fd0:16240:20)
    at runWithFiberInDEV (react-dom_client.js?v=38f20fd0:724:18)
    at commitHookEffectListMount (react-dom_client.js?v=38f20fd0:7765:122)
    at commitHookPassiveMountEffects (react-dom_client.js?v=38f20fd0:7823:60)
    at reconnectPassiveEffects (react-dom_client.js?v=38f20fd0:9295:13)
    at recursivelyTraverseReconnectPassiveEffects (react-dom_client.js?v=38f20fd0:9274:11)
    at reconnectPassiveEffects (react-dom_client.js?v=38f20fd0:9333:13)
    at doubleInvokeEffectsOnFiber (react-dom_client.js?v=38f20fd0:11280:207)
    at runWithFiberInDEV (react-dom_client.js?v=38f20fd0:724:18)
    at recursivelyTraverseAndDoubleInvokeEffectsInDEV (react-dom_client.js?v=38f20fd0:11251:78)
```

Relevant to: <https://github.com/facebook/react/issues/32354>.
