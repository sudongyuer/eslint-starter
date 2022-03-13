# 学习Eslint 和 Prettier 🚀
## eslintrc.js
```js
module.exports = {
  env: {
    // 支持浏览器环境
    browser: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2021: true,
    // Linter .eslintrc.js 自己的时候要用 node 环境
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    // 处理 JS 文件
    {
      files: ["**/*.{js,jsx}"], // 只处理 js 和 jsx 文件
      parser: "@babel/eslint-parser", // 使用 babel 来解析 js 文件
      parserOptions: {
        sourceType: "module", // 支持 import/export
        allowImportExportEverywhere: false,
        ecmaFeatures: {
          globalReturn: false,
        },
      },
    },
    // 处理 TS 文件
    {
      files: ["**/*.{ts,tsx}", "**/*.{js,jsx}"], // 只处理 ts 和 js 文件
      excludedFiles: [".eslintrc.js"], // 这里禁用了 .eslintrc.js 的类型检查
      parser: "@typescript-eslint/parser", // 能看懂 TypeScript
      parserOptions: {
        project: ["./tsconfig.json"], // 告诉 eslint：tsconfig 在哪
      },
      extends: [
        // typescript-eslint 的推荐规则，只是这些最佳规则都是针对 TS 的
        "plugin:@typescript-eslint/recommended",
        // tsconfig.json 里 Type Checking 的推荐规则
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: [
        // 使用 typescript x eslint 的插件
        "@typescript-eslint",
      ],
    },
    // 处理 vue 文件
    {
      files: ["**/*.vue"], // 只处理 vue 文件
      extends: ["plugin:vue/vue3-recommended"], // 使用 vue3 的推荐规则
    },
  ],
};
```
## prettierrc.json
```jsonc
{}
```
## .baberrc.js
```js
module.exports = {
  "presets": [
    "@babel/preset-react"
  ]
}

```
## .stylelintrc.js
```js
module.exports = {
  "plugins": ["stylelint-prettier"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-less",
    "stylelint-config-prettier"
  ],
  "customSyntax": "postcss-less",
  "rules": {
    "prettier/prettier": true
  }
}

```
## .lintstagedrc.js
```js
module.exports = {
  "**/*.{ts,tsx}": [
    () => "tsc -p tsconfig.json --noEmit",
    "eslint --cache --fix",
  ],
  "**/*.{js,jsx}": [
    "eslint --cache --fix",
  ],
  "**/*.vue": [
    "eslint --cache --fix",
  ],
  "**/*.{css,less}": ["stylelint --cache --fix"],
};

```

## .husky
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

```
