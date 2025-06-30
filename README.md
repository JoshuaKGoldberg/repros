# `@types/sizzle` Relying on Global DOM Types

Reproduction showing `@types/sizzle` relying on global DOM types to exist.
Given the following compiler options:

- `lib` does not contain `"dom"`
- `skipLibCheck` is not enabled

The following errors are reported in `node_modules/@types/sizzle/index.d.ts`.
They do not occur if [DefinitelyTyped/DefinitelyTyped#73082 [sizzle] fix: add empty DOM global interfaces for non-DOM users](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/73082) is applied.

```shell
npm i
npm run tsc
```

```plaintext
node_modules/@types/sizzle/index.d.ts:8:35 - error TS2304: Cannot find name 'Element'.

8     <TArrayLike extends ArrayLike<Element>>(
                                    ~~~~~~~

node_modules/@types/sizzle/index.d.ts:10:18 - error TS2304: Cannot find name 'Element'.

10         context: Element | Document | DocumentFragment,
                    ~~~~~~~

node_modules/@types/sizzle/index.d.ts:10:28 - error TS2304: Cannot find name 'Document'.

10         context: Element | Document | DocumentFragment,
                              ~~~~~~~~

node_modules/@types/sizzle/index.d.ts:10:39 - error TS2304: Cannot find name 'DocumentFragment'.

10         context: Element | Document | DocumentFragment,
                                         ~~~~~~~~~~~~~~~~

node_modules/@types/sizzle/index.d.ts:13:34 - error TS2304: Cannot find name 'Element'.

13     (selector: string, context?: Element | Document | DocumentFragment): Element[];
                                    ~~~~~~~

node_modules/@types/sizzle/index.d.ts:13:44 - error TS2304: Cannot find name 'Document'.

13     (selector: string, context?: Element | Document | DocumentFragment): Element[];
                                              ~~~~~~~~

node_modules/@types/sizzle/index.d.ts:13:55 - error TS2304: Cannot find name 'DocumentFragment'.

13     (selector: string, context?: Element | Document | DocumentFragment): Element[];
                                                         ~~~~~~~~~~~~~~~~

node_modules/@types/sizzle/index.d.ts:13:74 - error TS2304: Cannot find name 'Element'.

13     (selector: string, context?: Element | Document | DocumentFragment): Element[];
                                                                            ~~~~~~~

node_modules/@types/sizzle/index.d.ts:16:30 - error TS2304: Cannot find name 'Element'.

16     matchesSelector(element: Element, selector: string): boolean;
                                ~~~~~~~

node_modules/@types/sizzle/index.d.ts:17:41 - error TS2304: Cannot find name 'Element'.

17     matches(selector: string, elements: Element[]): Element[];
                                           ~~~~~~~

node_modules/@types/sizzle/index.d.ts:17:53 - error TS2304: Cannot find name 'Element'.

17     matches(selector: string, elements: Element[]): Element[];
                                                       ~~~~~~~

node_modules/@types/sizzle/index.d.ts:40:48 - error TS2304: Cannot find name 'Element'.

40             (match: RegExpMatchArray, context: Element | Document, isXML: boolean): Element[] | void;
                                                  ~~~~~~~

node_modules/@types/sizzle/index.d.ts:40:58 - error TS2304: Cannot find name 'Document'.

40             (match: RegExpMatchArray, context: Element | Document, isXML: boolean): Element[] | void;
                                                            ~~~~~~~~

node_modules/@types/sizzle/index.d.ts:40:85 - error TS2304: Cannot find name 'Element'.

40             (match: RegExpMatchArray, context: Element | Document, isXML: boolean): Element[] | void;
                                                                                       ~~~~~~~

node_modules/@types/sizzle/index.d.ts:72:20 - error TS2304: Cannot find name 'Element'.

72             (elem: Element): boolean;
                      ~~~~~~~

node_modules/@types/sizzle/index.d.ts:80:24 - error TS2304: Cannot find name 'Element'.

80             (elements: Element[], argument: number, not: boolean): Element[];
                          ~~~~~~~

node_modules/@types/sizzle/index.d.ts:80:68 - error TS2304: Cannot find name 'Element'.

80             (elements: Element[], argument: number, not: boolean): Element[];
                                                                      ~~~~~~~


Found 17 errors in the same file, starting at: node_modules/@types/sizzle/index.d.ts:8
```
