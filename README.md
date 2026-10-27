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
* GitHub Actions CI/CD that runs the Vitest tests on every push and publishes the Docker image to GitHub Container Registry from the default branch
* Lighthouse CI that audits the production build on every push and fails the check if the accessibility score drops below 0.9 (performance is reported as a warning only)
* Conventional Commits enforced by Commitlint through a Husky `commit-msg` hook, with Commitizen (`npm run commit`) for guided commit messages
* Automatic `CHANGELOG.md` generation from the commit history using conventional-changelog, tied to `npm version` for releases

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
        "test": "vitest run"
      }
    }
    ```

4. Create your first test:


    ```typescript
    // tests/components/HelloWorld.spec.ts

    import { describe, it, expect } from 'vitest'
    import { mount } from '@vue/test-utils'

    import HelloWorld from '../../components/HelloWorld.vue';

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

### Conventional Commits, Commitlint & Changelog

Enforce a consistent commit message format with Commitlint, write messages through a guided prompt with Commitizen, and generate a `CHANGELOG.md` from your commit history.

Messages follow the [Conventional Commits](https://www.conventionalcommits.org) format:

```txt
<type>(<optional scope>): <description>
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore` and `revert`. For example: `fix(auth): handle expired refresh tokens`.

1. Install Commitlint and the conventional ruleset:

    ```bash
    npm install -D @commitlint/cli @commitlint/config-conventional
    ```

2. In the root directory of your project, create the file `commitlint.config.js`:

    ```javascript
    // commitlint.config.js

    export default {
      extends: ['@commitlint/config-conventional']
    }
    ```

    The project uses ES modules (`"type": "module"` in `package.json`), hence `export default`. In a CommonJS project use `module.exports = { ... }` instead.

3. Add a Husky `commit-msg` hook that runs Commitlint on every commit message:

    ```bash
    npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
    ```

    The generated `.husky/commit-msg` file should look like this:

    ```txt
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"

    npx --no -- commitlint --edit $1
    ```

4. Test it. The first commit should be rejected and the second one accepted:

    ```bash
    git commit --allow-empty -m "wip"
    git commit --allow-empty -m "chore: test commitlint hook"
    ```

    Undo the test commit with `git reset --soft HEAD~1`.

    The hook runs on every `git commit`, including `git commit -m`. To skip all Husky hooks on purpose (both `pre-commit` and `commit-msg`), use `git commit --no-verify`.

5. Install Commitizen to build valid messages through an interactive prompt:

    ```bash
    npm install -D commitizen cz-conventional-changelog
    ```

    Add the following to your `package.json`:

    ```json
    {
      "scripts": {
        "commit": "cz"
      },
      "config": {
        "commitizen": {
          "path": "cz-conventional-changelog"
        }
      }
    }
    ```

    Stage your changes and commit with the prompt instead of `git commit`:

    ```bash
    git add .
    npm run commit
    ```

    The prompt asks for the type, an optional scope, a short description, an optional longer description, breaking changes and linked issues. Press Enter to skip the optional questions. For the breaking changes question, leave it empty unless there really is a breaking change. Any text typed there (even "no") is recorded as a `BREAKING CHANGE` and ends up in the changelog.

6. Install the changelog generator:

    ```bash
    npm install -D conventional-changelog-cli conventional-changelog-conventionalcommits@^8
    ```

    The preset is pinned to version 8 on purpose. Commitlint pulls in a newer preset that requires a newer changelog writer than the one `conventional-changelog-cli` uses, which fails with `Missing helper: "conventional-changelog-conventionalcommits requires conventional-changelog-writer@9 or newer"`. Remove the pin once the CLI supports the newer writer.

    Add these scripts to your `package.json`:

    ```json
    {
      "scripts": {
        "changelog": "conventional-changelog -p conventionalcommits -i CHANGELOG.md -s",
        "changelog:all": "conventional-changelog -p conventionalcommits -i CHANGELOG.md -s -r 0",
        "version": "npm run changelog && git add CHANGELOG.md"
      }
    }
    ```

    * `npm run changelog:all` rebuilds the whole `CHANGELOG.md` from the full git history. Run it once to bootstrap the file, as it overwrites the existing content.
    * `npm run changelog` adds only the commits made since the last git tag.
    * The `version` script is run automatically by `npm version` (see below).

    Only `feat`, `fix`, `perf` and `revert` commits (plus breaking changes) appear in the changelog by default. Types like `docs` and `chore` are hidden.

7. Cut a release. Make sure `package.json` has a `"version"` field (for example `"version": "0.1.0"`) and the working tree is clean, then run:

    ```bash
    npm version <major|minor|patch> -m "chore(release): %s"
    ```

    This bumps the version in `package.json`, regenerates the changelog, creates the release commit and tags it (for example `v1.0.0`). The `-m` flag is required, otherwise the default commit message (just the version number) is rejected by Commitlint. Push the commit and the tag together:

    ```bash
    git push --follow-tags
    ```

    Pick the bump from the commits since the last release: only `fix` commits mean `patch`, any `feat` means `minor`, and any breaking change (`feat!:` or a `BREAKING CHANGE:` footer) means `major`.
