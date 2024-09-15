# Nuxt 3 Boilerplate

A Nuxt 3 starter boilerplate with a lot of useful features.

Features include:

* Pinia state management and store template
* Simple toast notification composable using vue-toastification module
* Internationalization using Nuxt i18n module
* TypeScript ready with Interfaces and Types template
* Middleware template
* Custom error page
* Unit testing using Vitest
* Sample server route ready for backend API calls
* Dockerfile to efficiently build the application in both development and production environments while keeping the final production image as lean as possible.
* Husky for running linters and formatters on pre-commit
* ESLint to catch bugs early in the development process
* Prettier for enforcing consistent code formatting

## Setup

* Make sure to install the dependencies:

    ```bash
    # npm
    npm install

    # pnpm
    pnpm install

    # yarn
    yarn install

    # bun
    bun install
    ```

## Development Server

* Start the development server on `http://localhost:3000`:

    ```bash
    # npm
    npm run dev

    # pnpm
    pnpm run dev

    # yarn
    yarn dev

    # bun
    bun run dev
    ```

## Production

* Build the application for production:

    ```bash
    # npm
    npm run build

    # pnpm
    pnpm run build

    # yarn
    yarn build

    # bun
    bun run build
    ```

* Locally preview production build:

    ```bash
    # npm
    npm run preview

    # pnpm
    pnpm run preview

    # yarn
    yarn preview

    # bun
    bun run preview
    ```

Check out the [Nuxt 3 deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Docker

Create and start the development container:

  ```bash
  docker compose up --build -d
  ```
  
Stop and remove the development container:

  ```bash
  docker compose down
  ```

Create and start the production container:

  ```bash
  docker compose -f compose.production.yaml up --build -d
  ```

Stop and remove the production container:

  ```bash
  docker compose -f compose.production.yaml down
  ```

## Pinia setup

1. Install Pinia

    ```bash
    npm i pinia @pinia/nuxt
    ```

3. Add Pinia to `nuxt.config` file

    ```typescript
    // nuxt.config.ts

    export default defineNuxtConfig({
      imports: {
        // Auto-import pinia stores defined in `~/stores`
        dirs: ['stores']
      },
      modules: [
        '@pinia/nuxt',
      ],
      pinia: {
        autoImports: [
          'defineStore',
          'storeToRefs',
        ],
      },
    });
    ```
4. Force install Pinia to fix "Pinia missing" error

    ```typescript
    npm i pinia -f
    ```
Check out the [Pinia documentation](https://pinia.vuejs.org/introduction.html) for more information.

## Vitest setup

1. Install the following dependencies:

    ```bash
    npm i -D vitest jsdom @vitejs/plugin-vue
    ```

    ```bash
    npm i -D @vue/test-utils @nuxt/test-utils
    ```

2. Create your Vitest configuration file (vitest.config.js):

    ```javascript
    // vitest.config.js

    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'

    export default defineConfig({
      plugins: [vue()],
      test: {
        globals: true,
        environment: 'jsdom',
      },
    })
    ```

3. Add the following script to your project:

    ```json
    {
      "scripts": {
        "test": "vitest"
      }
    }
    ```

4. Create your first test:


    ```typescript
    // tests/components/HelloWorld.vue

    import { describe, it, expect } from 'vitest'
    import { mount } from '@vue/test-utils'

    import HelloWorld from '../../src/components/HelloWorld.vue';

    describe('HelloWorld', () => {
      it('renders correctly', () => {
        const wrapper = mount(HelloWorld)
        expect(wrapper.html()).contain('Hello, world!')
      })
    })
    ```
Check out the [Vitest documentation](https://vitest.dev/guide/) for more information.

## Nuxt Eslint Module

1. Install the module:
  
    ```txt
    npx nuxi module add eslint
    ```

2. If you have a previous .eslintrc file, delete it.

3. Running your app will automatically generate an eslint.config.mjs.

4. If you are using TypeScript, you need to install the typescript in your project:

    ```txt
    npm install typescript --save-dev
    ```
More info: https://eslint.nuxt.com/packages/module

## Setting up Prettier

1. Install Prettier and it's vue plugin:

    ```txt
    npm install prettier --save-dev
    npm install prettier-plugin-vue --save-dev
    ```
2. When using prettier with eslint, make sure to install the eslint config prettier to disable eslint formatting so that it doesn’t conflict with prettier:

    ```txt
    npm install eslint-config-prettier –save-dev
    ```
3. Create a .prettierrc configuration file in your root directory with configuration rules:

   ```txt
    {
      "vueIndentScriptAndStyle": true,
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "singleQuote": true
    }
    ```

4. Add a .prettierignore file to ignore files or directories like for example your node_modules from being formatted by prettier.

## Husky & Lint-staged

1. Install Husky

    ```bash
    npx husky-init && npm install
    ```

2. Install Lint-staged

    ```bash
    npm install --save-dev lint-staged
    ```

3. Inside `.husky/pre-commit` replace `npm test` with `npx lint-staged`.

    ```txt
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

    npx lint-staged
    ```

4. In the root directory of your project, create the file `.lintstagedrc.json`
with the following contents:

    ```json
    {
      "*.{js,vue,ts,less,css}": ["prettier --write", "eslint"]
    }
    ```
    This will run Prettier and ESLint before before each commit. 

    If you want to run Vitest after each commit as well, add the test command in Husky's pre-commit hook:

    ```txt
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

    npx lint-staged

    npm test
    ```

    Make sure you've added the '--run' flag to your Vitest command in the package.json to make the test stop after running. Otherwise, they will prevent you from completing the commit:

    ```txt
    "scripts": { 
       "test": "vitest run" 
    }
    ```

