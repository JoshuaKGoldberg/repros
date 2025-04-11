import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopics from "starlight-sidebar-topics";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics([
          {
            icon: "open-book",
            items: [
              { label: "About", link: "about" },
            ],
            label: "About",
            link: "/about",
          },
        ]),
      ],
      title: "Repros",
    }),
  ],
  site: "https://joshuakgoldberg.com",
});
