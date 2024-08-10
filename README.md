# Nuxt 3 Boilerplate

A Nuxt 3 starter boilerplate with a lot of useful features.

Features include:

* Project structure following best practices
* Pinia state management and store template
* Simple toast notification composable using vue-toastification module
* Internationalization using Nuxt i18n module
* TypeScript ready with Interfaces and Types template
* Middleware template
* Custom error page
* Unit testing using Vitest
* Sample server route ready for backend API calls
* Dockerfile to efficiently build the application in both development and production environments while keeping the final production image as lean as possible.

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
