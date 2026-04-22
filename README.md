# HOSTWARE — Documentation officielle

> Documentation officielle de [HOSTWARE](https://hostware.fr) — Hébergement web, serveurs de jeux, VPS et VoIP.

Construite avec **[Starlight](https://starlight.astro.build)** (Astro).

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

---

## 🚀 Structure du projet

```text
.
├── public/                  # Assets statiques (favicon, logo…)
├── src/
│   ├── assets/              # Images embarquées dans la doc
│   ├── content/
│   │   └── docs/            # Pages de documentation (.md / .mdx)
│   └── content.config.ts    # Configuration du schéma de contenu
├── astro.config.mjs         # Configuration Astro + Starlight
├── package.json
└── tsconfig.json
```

Chaque fichier `.md` ou `.mdx` dans `src/content/docs/` devient automatiquement une page accessible via son chemin de fichier.

---

## 🧞 Commandes

Toutes les commandes sont à exécuter depuis la racine du projet :

| Commande                  | Action                                                  |
| :------------------------ | :------------------------------------------------------ |
| `npm install`             | Installe les dépendances                                |
| `npm run dev`             | Lance le serveur de dev sur `localhost:4321`            |
| `npm run build`           | Build de production dans `./dist/`                      |
| `npm run preview`         | Prévisualise le build en local avant déploiement        |
| `npm run astro ...`       | Commandes CLI Astro (`astro add`, `astro check`…)       |
| `npm run astro -- --help` | Aide sur le CLI Astro                                   |

---

## ✍️ Contribuer à la documentation

Les pages sont des fichiers Markdown (`.md`) ou MDX (`.mdx`) dans `src/content/docs/`.  
Les images se placent dans `src/assets/` et s'intègrent avec un lien relatif.

Structure recommandée pour les pages :

```md
---
title: Titre de la page
description: Courte description pour le SEO
---

Contenu ici…
```

---

## 🛠️ Stack technique

- **[Astro](https://astro.build)** — Framework web
- **[Starlight](https://starlight.astro.build)** — Thème documentation pour Astro

---

## 📦 Déploiement

La documentation est déployée en production sur l'infrastructure HOSTWARE.  
Dépôt GitHub : [hostware-fr/documentation](https://github.com/hostware-fr/documentation)

---

## 🔗 Liens utiles

- 🌐 Site : [hostware.fr](https://hostware.fr)
- 📖 Documentation en ligne : [docs.hostware.fr](https://docs.hostware.fr)
- 💬 Discord : *(https://discord.hostware.fr)*
- 📧 Contact : contact@hostware.fr

---

© 2025 HOSTWARE — Tous droits réservés.
