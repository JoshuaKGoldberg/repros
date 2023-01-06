<a href="https://trpc.io/" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://assets.trpc.io/www/trpc-readme-dark.png" />
    <img alt="tRPC" src="https://assets.trpc.io/www/trpc-readme.png" />
  </picture>
</a>

<div align="center">
  <h1>tRPC</h1>
  <h3>Move fast and break nothing.<br />End-to-end typesafe APIs made easy.</h3>
  <a href="https://codecov.io/gh/trpc/trpc">
    <img alt="codecov" src="https://codecov.io/gh/trpc/trpc/branch/main/graph/badge.svg?token=KPPS918B0G">
  </a>
  <a href="https://github.com/trpc/trpc/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/trpc/trpc" />
  </a>
  <a href="https://trpc.io/discord">
    <img alt="Discord" src="https://img.shields.io/discord/867764511159091230?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <br />
  <a href="https://twitter.com/alexdotjs">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40alexdotjs&style=social&url=https%3A%2F%2Ftwitter.com%2Falexdotjs" />
  </a>
  <a href="https://twitter.com/trpcio">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40trpcio&style=social&url=https%3A%2F%2Ftwitter.com%2Falexdotjs" />
  </a>
  <br />
  <br />
  <figure>
    <img src="https://assets.trpc.io/www/v10/v10-dark-landscape.gif" alt="Demo" />
    <figcaption>
      <p align="center">
        The client above is <strong>not</strong> importing any code from the server, only its type declarations.
      </p>
    </figcaption>
  </figure>
</div>

<br />

## Intro

tRPC allows you to easily build & consume fully typesafe APIs without schemas or code generation.

### Features

- ✅&nbsp; Well-tested and production ready.
- 🧙‍♂️&nbsp; Full static typesafety & autocompletion on the client, for inputs, outputs, and errors.
- 🐎&nbsp; Snappy DX - No code generation, run-time bloat, or build pipeline.
- 🍃&nbsp; Light - tRPC has zero deps and a tiny client-side footprint.
- 🐻&nbsp; Easy to add to your existing brownfield project.
- 🔋&nbsp; Batteries included - React.js/Next.js/Express.js/Fastify adapters. _(But tRPC is not tied to React, and there are many [community adapters](https://trpc.io/docs/awesome-trpc#-extensions--community-add-ons) for other libraries)_
- 🥃&nbsp; Subscriptions support.
- ⚡️&nbsp; Request batching - requests made at the same time can be automatically combined into one
- 👀&nbsp; Quite a few examples in the [./examples](./examples)-folder

## Quickstart

There are a few [examples](https://trpc.io/docs/example-apps) that you can use for playing out with tRPC or bootstrapping your new project. For example, if you want a Next.js app, you can use the full-stack Next.js example:

**Quick start with a full-stack Next.js example:**

```sh
# yarn
yarn create next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
# npm
npx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
```

**👉 See full documentation on [tRPC.io](https://trpc.io/docs). 👈**

## Star History

> tRPC is rapidly gaining momentum!

<a href="https://star-history.com/#trpc/trpc"><img src="https://api.star-history.com/svg?repos=trpc/trpc&type=Date" alt="Star History Chart" width="600" /></a>

## Core Team

> Do you want to contribute? First, read the <a href="https://github.com/trpc/trpc/blob/main/CONTRIBUTING.md">Contributing Guidelines</a> before opening an issue or PR so you understand the branching strategy and local development environment. If you need any more guidance or want to ask more questions, feel free to write to us on <a href="https://trpc.io/discord">Discord</a>!

<table>
  <tr>
    <td align="center"><a href="https://twitter.com/alexdotjs"><img src="https://avatars.githubusercontent.com/u/459267?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex / KATT</b></sub></a></td>
    <td>👋 Hi, I'm Alex and I am the creator of tRPC, don't hesitate to contact me on <a href="https://twitter.com/alexdotjs">Twitter</a> or <a href="mailto:alex@trpc.io">email</a> if you are curious about tRPC in any way.</td>
  </tr>
</table>

### Project leads

> The people who lead the API-design decisions and has the most active role in the development

<table>
  <tbody>
      <td align="center"><a href="https://twitter.com/s4chinraja"><img src="https://avatars.githubusercontent.com/u/58836760?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sachin Raja</b></sub></a></td>
      <td align="center"><a href="https://twitter.com/alexdotjs"><img src="https://avatars.githubusercontent.com/u/459267?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex / KATT</b></sub></a></td>
    </tr>
  </tbody>
</table>

### Active contributors

> People who actively help out improving the codebase by making PRs and reviewing code

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://twitter.com/jlalmes"><img src="https://avatars.githubusercontent.com/u/69924001?v=4?s=100" width="100px;" alt=""/><br /><sub><b>James Berry</b></sub></a></td>
      <td align="center"><a href="http://www.jumr.dev"><img src="https://avatars.githubusercontent.com/u/51714798?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Julius Marminge</b></sub></a></td>
    </tr>
  </tbody>
</table>

### Special shout-outs

<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.big-sir.com"><img src="https://avatars.githubusercontent.com/u/3660667?v=4?s=100" width="100px;" alt=""/><br /><sub><b>bautistaaa</b></sub></a></td>
      <td align="center"><a href="http://t3.gg"><img src="https://avatars.githubusercontent.com/u/6751787?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Theo Browne</b></sub></a></td>
      <td align="center"><a href="https://elsakaan.dev"><img src="https://avatars.githubusercontent.com/u/20271968?v=4&s=100" width="100" alt="Ahmed%20Elsakaan"/><br /><sub><b>Ahmed Elsakaan</b></sub></a></td>
    </tr>
  </tbody>
</table>

## Sponsors

If you enjoy working with tRPC and want to support me consider giving a token appreciation by [GitHub Sponsors](https://trpc.io/sponsor)!

Also, if your company using tRPC and want to support long-term maintenance of tRPC, have a look at the [sponsorship tiers](https://trpc.io/sponsor) or [get in touch](mailto:alex@trpc.io) to discuss potential partnerships.

<!-- SPONSORS:LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

### 🥇 Gold Sponsors

<table>
  <tr>
   <td align="center"><a href="https://cal.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/79145102?v=4&s=180" width="180" alt="Cal.com,%20Inc."/><br />Cal.com, Inc.</a></td>
   <td align="center"><a href="https://render.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/36424661?v=4&s=180" width="180" alt="Render"/><br />Render</a></td>
  </tr>
</table>

### 🥈 Silver Sponsors

<table>
  <tr>
   <td align="center"><a href="https://flightcontrol.dev/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/87621213?v=4&s=150" width="150" alt="Flightcontrol"/><br />Flightcontrol</a></td>
   <td align="center"><a href="http://youarerad.org/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/22589564?u=00737f7066b9bb06314a1ad7ca099ab252e101eb&v=4&s=150" width="150" alt="Jason%20Docton"/><br />Jason Docton</a></td>
   <td align="center"><a href="https://ping.gg/"><img src="https://avatars.githubusercontent.com/u/89191727?v=4&s=150" width="150" alt="Ping.gg"/><br />Ping.gg</a></td>
   <td align="center"><a href="https://www.prisma.io/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/17219288?v=4&s=150" width="150" alt="prisma"/><br />prisma</a></td>
  </tr>
</table>

### 🥉 Bronze Sponsors

<table>
  <tr>
   <td align="center"><a href="https://www.newfront.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/44950377?v=4&s=120" width="120" alt="Newfront"/><br />Newfront</a></td>
   <td align="center"><a href="https://standardresume.co/r/ryan-edge?ref=trpc"><img src="https://avatars.githubusercontent.com/u/6907797?u=71aca5cb761c401b4abbf100057978a76f2f5e22&v=4&s=120" width="120" alt="Ryan"/><br />Ryan</a></td>
   <td align="center"><a href="https://github.com/hidrb"><img src="https://avatars.githubusercontent.com/u/77294655?v=4&s=120" width="120" alt="Dr.%20B"/><br />Dr. B</a></td>
   <td align="center"><a href="http://echobind.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/570840?v=4&s=120" width="120" alt="Echobind"/><br />Echobind</a></td>
   <td align="center"><a href="https://snaplet.dev/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/69029941?v=4&s=120" width="120" alt="Snaplet"/><br />Snaplet</a></td>
  </tr>
  <tr>
   <td align="center"><a href="https://interval.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/67802063?v=4&s=120" width="120" alt="Interval"/><br />Interval</a></td>
   <td align="center"><a href="http://flylance.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/67534310?v=4&s=120" width="120" alt="Flylance"/><br />Flylance</a></td>
  </tr>
</table>

### 😻 Individuals

<table>
  <tr>
   <td align="center"><a href="https://ahoylabs.xyz/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/95662801?v=4&s=100" width="100" alt="Ahoy%20Labs"/><br />Ahoy Labs</a></td>
   <td align="center"><a href="http://solberg.is/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/701?u=0532b62166893d5160ef795c4c8b7512d971af05&v=4&s=100" width="100" alt="J%C3%B6kull%20S%C3%B3lberg%20Au%C3%B0unsson"/><br />Jökull Sólberg Auðunsson</a></td>
   <td align="center"><a href="https://yorick.sh/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/8572133?u=247a2ef2eb9bdba02076dfd8c6a25169a8ba3464&v=4&s=100" width="100" alt="Ethan%20Clark"/><br />Ethan Clark</a></td>
   <td align="center"><a href="https://samholmes.net/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/8385528?u=63152744638f6b5df34941244016fa1a4b4a67bb&v=4&s=100" width="100" alt="Sam%20Holmes"/><br />Sam Holmes</a></td>
   <td align="center"><a href="https://maxgreenwald.me/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/2615374?u=4c1402dd1e4e8ff7514f2e300adfe9b75ae76e85&v=4&s=100" width="100" alt="Max%20Greenwald"/><br />Max Greenwald</a></td>
   <td align="center"><a href="https://www.beekai.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/10513364?u=a129aade5f9a7a92cf06172b47d67ccefc736933&v=4&s=100" width="100" alt="Beier%20(Bill)"/><br />Beier (Bill)</a></td>
  </tr>
  <tr>
   <td align="center"><a href="https://github.com/rondered"><img src="https://avatars.githubusercontent.com/u/50079487?u=a5c77b3b68319a8447e6a5a3d4d0f944d2b66c05&v=4&s=100" width="100" alt="Ron%20Mizrahi"/><br />Ron Mizrahi</a></td>
   <td align="center"><a href="https://timcole.me/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/6754577?u=9dba0a4292ebe8e206257b62008ac4d1e1ca5a07&v=4&s=100" width="100" alt="Timothy%20Cole"/><br />Timothy Cole</a></td>
   <td align="center"><a href="https://farazpatankar.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/10681116?u=694385b48756c6be01f289f8c419e95b3103fa84&v=4&s=100" width="100" alt="Faraz%20Patankar"/><br />Faraz Patankar</a></td>
   <td align="center"><a href="http://t3.gg/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/6751787?u=3b31853b56349de39c66e73c14e6d34d047f0b53&v=4&s=100" width="100" alt="Theo%20Browne"/><br />Theo Browne</a></td>
   <td align="center"><a href="https://patrickjs.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/1016365?u=47d964a94849ae3bd59cc1a66e5f4aad0c43d2a2&v=4&s=100" width="100" alt="PatrickJS"/><br />PatrickJS</a></td>
   <td align="center"><a href="https://github.com/aslaker"><img src="https://avatars.githubusercontent.com/u/51129804?u=72424dea624e663c5df731ad9852636f5c4471e5&v=4&s=100" width="100" alt="aslaker"/><br />aslaker</a></td>
  </tr>
  <tr>
   <td align="center"><a href="https://github.com/dmaykov"><img src="https://avatars.githubusercontent.com/u/6147048?u=8ae662ac99e91917062164de0d9404002b99cf2e&v=4&s=100" width="100" alt="Dmitry%20Maykov"/><br />Dmitry Maykov</a></td>
   <td align="center"><a href="https://www.illarionvk.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/5012724?u=f6f510f226382df2ebcea4a1935aaa94eacfcda4&v=4&s=100" width="100" alt="Illarion%20Koperski"/><br />Illarion Koperski</a></td>
   <td align="center"><a href="https://github.com/utevo"><img src="https://avatars.githubusercontent.com/u/29740731?u=8582d7cf3bee56a610b6db878a7627cbdf32d8de&v=4&s=100" width="100" alt="Micha%C5%82%20Kowieski"/><br />Michał Kowieski</a></td>
   <td align="center"><a href="https://chrisbradley.dev/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/11767079?u=e64f67faffd350af19aa896ff89a0708829e9a2a&v=4&s=100" width="100" alt="Chris%20Bradley"/><br />Chris Bradley</a></td>
   <td align="center"><a href="https://elsakaan.dev/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/20271968?u=ab95f47bb661569e9b4ab1dadfdb802b77f9d1c6&v=4&s=100" width="100" alt="Ahmed%20Elsakaan"/><br />Ahmed Elsakaan</a></td>
   <td align="center"><a href="https://github.com/Sven1106"><img src="https://avatars.githubusercontent.com/u/28002895?v=4&s=100" width="100" alt="Svend%20Aage%20Roperos%20Nielsen"/><br />Svend Aage Roperos Nielsen</a></td>
  </tr>
  <tr>
   <td align="center"><a href="https://github.com/iway1"><img src="https://avatars.githubusercontent.com/u/12774588?u=e664ed8bd364b3e9103d080d72087e25904c6cab&v=4&s=100" width="100" alt="Isaac%20Way"/><br />Isaac Way</a></td>
   <td align="center"><a href="https://github.com/LoriKarikari"><img src="https://avatars.githubusercontent.com/u/7902980?u=d016e5a9c337fbd4c60a7ea61352185f8b88b585&v=4&s=100" width="100" alt="Lori%20Karikari"/><br />Lori Karikari</a></td>
   <td align="center"><a href="http://francisprovost.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/6840361?v=4&s=100" width="100" alt="Francis%20Provost"/><br />Francis Provost</a></td>
   <td align="center"><a href="http://wyatt.dev/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/42128929?u=15dfd6d0ab827079a400ce33f0f78408637cb5ec&v=4&s=100" width="100" alt="Wyatt%20Schulte"/><br />Wyatt Schulte</a></td>
   <td align="center"><a href="https://hampuskraft.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/24176136?u=87f4c5cd23ae2c8b66cfca5f2ac393795b9fbf13&v=4&s=100" width="100" alt="Hampus%20Kraft"/><br />Hampus Kraft</a></td>
   <td align="center"><a href="https://github.com/danielyogel"><img src="https://avatars.githubusercontent.com/u/2037064?u=625c1b7bf16f83a378545126927aebed2db86bac&v=4&s=100" width="100" alt="Daniel%20Yogel"/><br />Daniel Yogel</a></td>
  </tr>
  <tr>
   <td align="center"><a href="https://iamkhan.io/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/6490268?v=4&s=100" width="100" alt="SchlagerKhan"/><br />SchlagerKhan</a></td>
   <td align="center"><a href="https://lindeneg.org/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/30244485?u=70f85b684ede25d672974d81a42049b718fd33af&v=4&s=100" width="100" alt="Christian"/><br />Christian</a></td>
   <td align="center"><a href="http://jwyce.gg/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/16946573?u=a67088146d57205cf6201bee1add2e24cd811229&v=4&s=100" width="100" alt="Jared%20Wyce"/><br />Jared Wyce</a></td>
   <td align="center"><a href="https://github.com/jzimmek"><img src="https://avatars.githubusercontent.com/u/40382?u=72d3eac4641aaf8dba497e986a55d93d12012cd2&v=4&s=100" width="100" alt="jzimmek"/><br />jzimmek</a></td>
   <td align="center"><a href="https://mstill.dev/blog?ref=trpc"><img src="https://avatars.githubusercontent.com/u/2567177?u=77d13b33c5d1bd4c9085abee5faddf42e6d5d5dc&v=4&s=100" width="100" alt="Malcolm%20Still"/><br />Malcolm Still</a></td>
   <td align="center"><a href="https://github.com/fanvue"><img src="https://avatars.githubusercontent.com/u/72873652?v=4&s=100" width="100" alt="Fanvue"/><br />Fanvue</a></td>
  </tr>
  <tr>
   <td align="center"><a href="http://ballingt.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/458879?u=4b045ac75d721b6ac2b42a74d7d37f61f0414031&v=4&s=100" width="100" alt="Thomas%20Ballinger"/><br />Thomas Ballinger</a></td>
   <td align="center"><a href="https://larskarbo.no/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/10865165?v=4&s=100" width="100" alt="Lars%20Karbo"/><br />Lars Karbo</a></td>
   <td align="center"><a href="https://github.com/simonflk"><img src="https://avatars.githubusercontent.com/u/4867329?v=4&s=100" width="100" alt="Simon%20Flack"/><br />Simon Flack</a></td>
   <td align="center"><a href="http://www.ivanbuncic.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/29887111?v=4&s=100" width="100" alt="Ivan%20Buncic"/><br />Ivan Buncic</a></td>
   <td align="center"><a href="https://www.linkedin.com/in/zomars/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/3504472?u=e0fa7d7acefff37b6735387dc45d448717dbf8e2&v=4&s=100" width="100" alt="Omar%20L%C3%B3pez"/><br />Omar López</a></td>
   <td align="center"><a href="https://github.com/andrew-werdna"><img src="https://avatars.githubusercontent.com/u/8261769?u=ef025d7679533700957db0df9f74bd5d7d8c4a2a&v=4&s=100" width="100" alt="Andrew%20Brown"/><br />Andrew Brown</a></td>
  </tr>
  <tr>
   <td align="center"><a href="https://github.com/svobik7"><img src="https://avatars.githubusercontent.com/u/761766?u=1771454e0852904ddf71fe74e493e228331dd27a&v=4&s=100" width="100" alt="Jirka%20Svoboda"/><br />Jirka Svoboda</a></td>
   <td align="center"><a href="https://github.com/PabloRosales"><img src="https://avatars.githubusercontent.com/u/2329117?u=dbec433b960a36275e1ba331460e7ead1ee8fb28&v=4&s=100" width="100" alt="_P"/><br />_P</a></td>
   <td align="center"><a href="https://josephlozano.dev/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/12260694?u=ff3b7d8dd83573506fc866e4581d916544ee15e8&v=4&s=100" width="100" alt="Joseph%20Lozano"/><br />Joseph Lozano</a></td>
   <td align="center"><a href="https://jobsinjs.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/141704?u=3eba1b12a74987d406a98dbcb7f1d4fc2efe0390&v=4&s=100" width="100" alt="Michal%20Malota"/><br />Michal Malota</a></td>
   <td align="center"><a href="http://skalar.no/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/92300?v=4&s=100" width="100" alt="Thorbj%C3%B8rn%20Hermansen"/><br />Thorbjørn Hermansen</a></td>
   <td align="center"><a href="https://github.com/AscentFactory"><img src="https://avatars.githubusercontent.com/u/33631274?v=4&s=100" width="100" alt="Ascent%20Factory"/><br />Ascent Factory</a></td>
  </tr>
  <tr>
   <td align="center"><a href="https://jonas-strassel.de/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/4662748?u=e4a5cc2d110935a5c88fcbc02925d733fcc0bbb9&v=4&s=100" width="100" alt="Jonas%20Strassel"/><br />Jonas Strassel</a></td>
   <td align="center"><a href="https://github.com/SalihOsmankovic"><img src="https://avatars.githubusercontent.com/u/45540328?v=4&s=100" width="100" alt="SalihOsmankovic"/><br />SalihOsmankovic</a></td>
   <td align="center"><a href="https://lucasfsantos.com/?ref=trpc"><img src="https://avatars.githubusercontent.com/u/11416392?u=e1d9e059b8738791e80b18b7a976b921aa659c2a&v=4&s=100" width="100" alt="Lucas%20Santos"/><br />Lucas Santos</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- SPONSORS:LIST:END -->

## All contributors ✨

> tRPC is developed by [KATT](https://twitter.com/alexdotjs), originally based on a proof-of-concept by [colinhacks](https://github.com/colinhacks).

<a href="https://github.com/trpc/trpc/graphs/contributors">
  <p align="center">
    <img width="720" src="https://contrib.rocks/image?repo=trpc/trpc" alt="A table of avatars from the project's contributors" />
  </p>
</a>

---

<a href="https://vercel.com/?utm_source=trpc&utm_campaign=oss">
  <p align="center">
    <img src="./images/powered-by-vercel.svg" alt="Powered by Vercel" title="Powered by Vercel">
  </p>
</a>
