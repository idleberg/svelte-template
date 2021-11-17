# @idleberg/svelte-template

This is my personal project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/idleberg/svelte-template.

This template differs from the official template in the following aspects:

- TypeScript by default
- uses `pnpm` for package management
- uses `vite` for building and as development server
- generates components with `plop`
- incorporates `eslint` and `stylelint`
- supports aliases for `@components`, `@lib`, `@stores` and `@workers`

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit idleberg/svelte-template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get started

Install the dependencies...

```bash
cd svelte-app
pnpm install
```

...then start [Vite](https://vitejs.dev/):

```bash
pnpm run dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
pnpm run build
```

You can run the newly built app with `pnpm run start`. This uses [Vite](https://vitejs.dev/), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
pnpm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
pnpm install -g surge
```

Then, from within your project folder:

```bash
pnpm run build
surge public my-project.surge.sh
```
