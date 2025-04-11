# `starlight-sidebar-topics@0.6.0` TypeScript type errors

```shell
npm i
npm build
npm tsc
```

```plaintext
> tsc

node_modules/@astrojs/starlight/components.ts:1:34 - error TS2307: Cannot find module './user-components/Aside.astro' or its corresponding type declarations.

1 export { default as Aside } from './user-components/Aside.astro';
                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:2:34 - error TS2307: Cannot find module './user-components/Badge.astro' or its corresponding type declarations.

2 export { default as Badge } from './user-components/Badge.astro';
                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:3:33 - error TS2307: Cannot find module './user-components/Card.astro' or its corresponding type declarations.

3 export { default as Card } from './user-components/Card.astro';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:4:37 - error TS2307: Cannot find module './user-components/CardGrid.astro' or its corresponding type declarations.

4 export { default as CardGrid } from './user-components/CardGrid.astro';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:5:33 - error TS2307: Cannot find module './user-components/Icon.astro' or its corresponding type declarations.

5 export { default as Icon } from './user-components/Icon.astro';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:6:33 - error TS2307: Cannot find module './user-components/Tabs.astro' or its corresponding type declarations.

6 export { default as Tabs } from './user-components/Tabs.astro';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:7:36 - error TS2307: Cannot find module './user-components/TabItem.astro' or its corresponding type declarations.

7 export { default as TabItem } from './user-components/TabItem.astro';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:8:37 - error TS2307: Cannot find module './user-components/LinkCard.astro' or its corresponding type declarations.

8 export { default as LinkCard } from './user-components/LinkCard.astro';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:9:34 - error TS2307: Cannot find module './user-components/Steps.astro' or its corresponding type declarations.

9 export { default as Steps } from './user-components/Steps.astro';
                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:10:37 - error TS2307: Cannot find module './user-components/FileTree.astro' or its corresponding type declarations.

10 export { default as FileTree } from './user-components/FileTree.astro';
                                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/components.ts:11:39 - error TS2307: Cannot find module './user-components/LinkButton.astro' or its corresponding type declarations.

11 export { default as LinkButton } from './user-components/LinkButton.astro';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@astrojs/starlight/utils/routing/types.ts:46:18 - error TS2344: Type '"docs"' does not satisfy the constraint 'never'.

46  CollectionEntry<'docs'>,
                    ~~~~~~

node_modules/@astrojs/starlight/utils/translations.ts:36:50 - error TS2339: Property 'replace' does not exist on type 'never'.

36      : stripExtension(stripLeadingSlash(filePath.replace(i18nCollectionPathFromRoot, '')));
                                                    ~~~~~~~

node_modules/astro-expressive-code/components/index.ts:2:42 - error TS2307: Cannot find module './Code.astro' or its corresponding type declarations.

2 import { default as CodeComponent } from './Code.astro'
                                           ~~~~~~~~~~~~~~

node_modules/astro-expressive-code/components/types.ts:1:10 - error TS1484: 'ExpressiveCodeBlockProps' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

1 import { ExpressiveCodeBlockProps } from 'rehype-expressive-code'
           ~~~~~~~~~~~~~~~~~~~~~~~~


Found 15 errors in 5 files.

Errors  Files
    11  node_modules/@astrojs/starlight/components.ts:1
     1  node_modules/@astrojs/starlight/utils/routing/types.ts:46
     1  node_modules/@astrojs/starlight/utils/translations.ts:36
     1  node_modules/astro-expressive-code/components/index.ts:2
     1  node_modules/astro-expressive-code/components/types.ts:1
```
