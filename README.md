# Aditya Rai — Portfolio

Standalone React + TypeScript + Tailwind CSS portfolio, powered by Vite.
Includes all three projects, profile links, project filtering, expandable details,
responsive navigation, light/dark themes, and reduced-motion support.

## Run locally

1. Install Node.js 22.13 or newer (Node.js 24 LTS is suitable), including npm.
2. Extract the ZIP. Open the `aditya-portfolio` folder in VS Code or your terminal.
3. Run each command on a separate line:

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal, normally http://localhost:5173.
Keep the terminal running. Press Ctrl+C to stop.

No account, API key, environment variables, database, or hosting service is required.
An internet connection is needed for the initial dependency installation and for
visiting the external project/profile links. The portfolio itself runs locally.

For Windows PowerShell, if `npm` is blocked by an execution-policy error, use
`npm.cmd install` and `npm.cmd run dev`, or use Command Prompt.

## Production build

```sh
npm run build
npm run preview
```

The optimized static website is generated in `dist/`.
The preview command prints its local URL, normally http://localhost:4173.
Do not launch by double-clicking index.html; use the development or preview server.

## Edit the portfolio

- `src/App.tsx`: project information, profile URLs, bio, and React interactions.
- `src/index.css`: colors, typography, layout, responsive styling, and animations.
- `src/main.tsx`: React entry point.
- `index.html`: page title and search description.
- `public/favicon.svg`: browser tab icon.
- `vite.config.ts`: local development and build configuration.

The default theme is dark. Your selection is remembered in browser local storage.
All project/profile links open in a new tab. Project descriptions are intentionally
brief; edit them in `src/App.tsx` to include your exact implementation details.

## Package contents

This archive contains the complete standalone project source and npm lockfile.
Generated dependencies (`node_modules`), build output, credentials, and hosting
configuration are omitted. `npm install` recreates the dependencies.

The downloadable edition preserves the portfolio design and interactions while
using a standard Vite setup for easy local use. It is separate from the hosted site.
