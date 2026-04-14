# kangyiqiu.github.io

Personal website of **Kangyi Qiu** — ML / software / AI engineering, LLM systems, and full-stack work.

This repository hosts the **static build** served at **[kangyiqiu.github.io](https://kangyiqiu.github.io/)**.  
The live pages are exported from a Next.js app; build output is deployed from the development repo (no server-side runtime on GitHub Pages).

---

## Links

| | |
| --- | --- |
| **Site** | [https://kangyiqiu.github.io/](https://kangyiqiu.github.io/) |
| **Blog** | [https://kangkang37.github.io/](https://kangkang37.github.io/) |
| **GitHub** | [@kangyiqiu](https://github.com/kangyiqiu) |
| **LinkedIn** | [Kangyi Qiu](https://www.linkedin.com/in/kangyi-qiu/) |

---

## What you’ll find on the site

- **Home** — Short intro and entry points  
- **About** — Education, interests, publications  
- **Skills** — Languages, frameworks, tooling  
- **Projects** — Selected work  
- **Blog** — External technical blog (separate site)  
- **Contact** — Email and social links  

Left column on desktop: dark panel with animated typography and light orbs; the main column is the light content area. Layout adapts on smaller screens.

---

## Tech (implementation)

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS**  
- Static export (`output: "export"`) → plain HTML/CSS/JS in this repo  
- Deployed to GitHub Pages; **`CNAME` / custom domain** can be kept alongside the deploy script  

Source code and scripts live in the private/source repo; this **`kangyiqiu.github.io`** repo only needs the published `out/` artifacts plus this README.

---

## 源码与部署说明

本站页面由 **`kangyiqiu-website`** 工程构建：在开发仓库根目录执行 `npm run deploy:pages`，会先 `npm run build` 生成 `out/`，再同步到本仓库并推送。

**若要修改本 README 在 GitHub 上显示的内容**：请编辑开发仓库里的 `github-pages/README.md`，然后同样执行 `npm run deploy:pages`，README 会随站点一起更新。

---

*Last updated when this file is deployed from the source project.*
