// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "HOSTWARE",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/hostware",
        },
      ],
      sidebar: [
        {
          label: "🚀 Démarrage rapide",
          autogenerate: { directory: "guides" },
        },
        {
          label: "📋 Information sur Hostware",
          autogenerate: { directory: "information" },
        },
        {
          label: "🎮 Hébergement de serveurs de jeu",
          autogenerate: { directory: "jeux" },
        },
        {
          label: "🖥️ VPS",
          autogenerate: { directory: "vps" },
        },
        {
          label: "🌐 Hébergement web",
          autogenerate: { directory: "web" },
        },
        {
          label: "💳 Facturation & compte",
          autogenerate: { directory: "facturation" },
        },
        {
          label: "🛡️ Politique & légal",
          autogenerate: { directory: "legal" },
        },
      ],
    }),
  ],
});
