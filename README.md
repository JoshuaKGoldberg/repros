# `npm-user` throwing 403 Forbidden error

Using Node.js 24:

```shell
npm i
node index.js
```

```plaintext
file:///Users/josh/repos/repros/node_modules/ky/distribution/core/Ky.js:32
                let error = new HTTPError(response, ky.request, ky.#getNormalizedOptions());
                            ^

HTTPError: Request failed with status code 403 Forbidden: GET https://www.npmjs.com/~joshuakgoldberg
    at function_ (file:///Users/josh/repos/repros/node_modules/ky/distribution/core/Ky.js:32:29)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async #retry (file:///Users/josh/repos/repros/node_modules/ky/distribution/core/Ky.js:264:20)
    at async result.<computed> [as text] (file:///Users/josh/repos/repros/node_modules/ky/distribution/core/Ky.js:73:34)
    at async Promise.all (index 0)
    at async npmUser (file:///Users/josh/repos/repros/node_modules/npm-user/index.js:12:28)
    at async file:///Users/josh/repos/repros/index.js:3:17 {
  response: Response {},
  request: Request {},
  options: {
    context: {},
    headers: Headers {},
    method: 'GET',
    prefixUrl: '',
    retry: {
      limit: 2,
      methods: [ 'get', 'put', 'head', 'delete', 'options', 'trace' ],
      statusCodes: [
        408, 413, 429,
        500, 502, 503,
        504
      ],
      afterStatusCodes: [ 413, 429, 503 ],
      maxRetryAfter: Infinity,
      backoffLimit: Infinity,
      delay: [Function: delay],
      jitter: undefined,
      retryOnTimeout: false
    },
    throwHttpErrors: true,
    timeout: 10000,
    fetch: [Function: bound fetch],
    signal: AbortSignal {
      Symbol(kEvents): SafeMap(1) [Map] {
        'abort' => <ref *1> {
          size: 1,
          next: Listener {
            next: undefined,
            previous: [Circular *1],
            listener: [Function: abort],
            flags: 1,
            callback: [Function: abort]
          },
          resistStopPropagation: false
        }
      },
      Symbol(events.maxEventTargetListeners): 0,
      Symbol(events.maxEventTargetListenersWarned): false,
      Symbol(kHandlers): SafeMap(0) [Map] {},
      Symbol(kAborted): false,
      Symbol(kReason): undefined,
      Symbol(kComposite): false
    },
    duplex: 'half'
  }
}
```

Visiting <https://www.npmjs.com/~joshuakgoldberg> in the browser works fine.
