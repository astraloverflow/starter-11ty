# Starter-11ty

[![License][license-img]](https://github.com/astraloverflow/starter-11ty/blob/master/LICENSE)
[![Last Commit][last-commit-img]](https://github.com/astraloverflow/starter-11ty/commits/master)
[![Open Issues][issues-img]](https://github.com/astraloverflow/starter-11ty/issues)

> A starter template for static generated websites using 11ty

---

## Quick Start

```shell
$ npx degit astraloverflow/starter-11ty#2023.06.03 my-new-website
$ cd my-new-website
$ npm install
$ npm run dev
```

---

## NPM Scripts

### `npm run test`

- Runs [stylelint](https://stylelint.io) (see `.stylelintrc.js`) and [eslint](https://eslint.org) (see `.eslintrc.js`) to check files for syntax and coding style errors.

### `npm run format`

- Runs [Prettier](https://prettier.io) to format all code to the same style. `prettier-plugin-css-order` and `prettier-plugin-tailwindcss` are also installed. See Prettier website for full list of supported languages. Best used with the Prettier plugin for your chosen editor.

### `npm run dev`

- Runs 11ty in development mode and runs a development server.

### `npm run prod`

- Runs 11ty in production mode and builds the project.

---

## LICENSE

Unless you want to release your project into the public domain via CC0 (which this project does), you should replace the contents of [`LICENSE`](./LICENSE) with a license of your choosing (MIT, BSD, GPL, etc.)

---

## .gitignore

Inside of [`.gitignore`](./.gitignore) you will find the following

```ini
# These files lock down the project's node dependencies
# You should remove whichever one you are using in your project
package-lock.json
yarn.lock
```

As the comment in the file says, you should remove one of those two lines if you want to use the "version locking" features of either one, especially if you are developing with other people or on multiple computers/servers or are using a CI.

---

[license-img]: https://img.shields.io/github/license/astraloverflow/starter-11ty.svg
[last-commit-img]: https://img.shields.io/github/last-commit/astraloverflow/starter-11ty.svg
[issues-img]: https://img.shields.io/github/issues-raw/astraloverflow/starter-11ty.svg
