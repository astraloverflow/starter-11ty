# Starter-11ty

[![License][license-img]](https://github.com/astraloverflow/starter-11ty/blob/master/LICENSE)
[![Last Commit][last-commit-img]](https://github.com/astraloverflow/starter-11ty/commits/master)
[![Open Issues][issues-img]](https://github.com/astraloverflow/starter-11ty/issues)

> A starter template for static generated websites using 11ty

---

## Requirements

- Node.js (LTS or newer).
- Latest NPM (comes included with Node.js) or Yarn.

## Quick Start

```shell
$ cd ~/dev/
$ npx degit astraloverflow/starter-11ty#2021.03.25 my-new-website
$ cd my-new-website
$ npm install
$ npm run css
$ npm run dev
```

---

## NPM Scripts

### `npm run test`

- Runs [stylelint](https://stylelint.io) (see `.stylelintrc`) to check css files for syntax and coding style errors.

### `npm run format`

- Runs [Prettier](https://prettier.io) to format all code to the same style. See Prettier website for full list of supported languages. Best used with the Prettier plugin for your chosen editor.

### `npm run clean`

- Deletes the `_site/` output directory for a fresh build.

### `npm run css`

- Runs PostCSS to build tailwindcss, and when `NODE_ENV` is set to production, autoprefixer and cssnano are also run.

### `npm run dev`

- Runs 11ty in development mode and runs a development server.

### `npm run build`

- Runs `npm run css` and then 11ty in production mode to build the project.

---

## Project Structure

- `_data/` contains 11ty global data files (see https://www.11ty.dev/docs/data/)
  - `_data/site.json` site wide config
- `_templates/` contains template layouts and partials (see https://www.11ty.dev/docs/templates/)
  - `_templates/base.njk` base layout that all other layouts extend
  - `_templates/post.njk` post/article layout
  - `_templates/page.njk` page layout
  - `_templates/home.njk` site homepage layout
- `_styles/` contains source CSS files, not yet processed by PostCSS
  - `_styles/tailwind.css` tailwind is generated here
  - `_styles/main.css` main css file
  - `_styles/markdown.css` extends tailwind styles for markdown output
  - `_styles/syntax.css` syntax highlighting styles
- `src/` contains the source and content for the site
  - `src/_images/` put images here, this whole folder will ‘be copied by 11ty into the output directory
  - `src/_posts/` blog posts go here
    - `src/_posts/_posts.json` tells 11ty what default layout to use for every file in the folder
    - `src/_posts/lorem.md` and `src/_posts/ipsum.md` examples of posts that use the `prefix` frontmatter attribute
  - `src/about.md` example page
  - `src/index.md` the home page for the site
- `.eleventy.js` config for 11ty

---

## LICENSE

Unless you want to release your project into the public domain via CC0 (which this project does), you should replace the contents of [`LICENSE`](./LICENSE) with a license of your choosing (MIT, BSD, GPL, etc.)

---

## .gitignore

Inside of [`.gitignore`](./.gitignore) you will find the following

```ini
# These files lock down the project's node dependencies
# These are only here for the development of starter-web
# You should remove whichever one you are using in your project
package-lock.json
yarn.lock
```

As the comment in the file says, you should remove one of those two lines if you want to use the "version locking" features of either one, especially if you are developing with other people or on multiple computers/servers or are using a CI.

---

## Package.json

It is HIGHLY recommended that you customize `package.json` with the details of your project, mainly the following fields:

```jsonc
{
  // Prevents your project from unintentionally being published to NPM.
  "private": true,
  // SPDX license identifier for your project's license.
  // The list of SPDX license identifiers can be found here: https://spdx.org/licenses/
  "license": "",
  // Your project's version number, as seen by NPM.
  "version": "0.0.0",
  // Your project's name, as seen by NPM. See NPM docs for allowed characters.
  "name": "starter-11ty",
  // Your project's description, as seen by NPM. Can be left blank.
  "description": "",
  // URL to your project's code repository.
  // If hosted on GitHub you can use the shorthand "user/repo"
  "repository": ""
}
```

[license-img]: https://img.shields.io/github/license/astraloverflow/starter-11ty.svg
[last-commit-img]: https://img.shields.io/github/last-commit/astraloverflow/starter-11ty.svg
[issues-img]: https://img.shields.io/github/issues-raw/astraloverflow/starter-11ty.svg
