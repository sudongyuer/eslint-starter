# å­¦ä¹ Eslint å Prettier ð
## eslintrc.js
```js
module.exports = {
  env: {
    // æ¯ææµè§å¨ç¯å¢
    browser: true,
    // è¯å« ES çä»£ç ï¼ä½¿ç¨ ECMAScript 2021 èªå¨è®¾ç½® ecmaVersion parser ä¸º 12ï¼
    es2021: true,
    // Linter .eslintrc.js èªå·±çæ¶åè¦ç¨ node ç¯å¢
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    // å¤ç JS æä»¶
    {
      files: ["**/*.{js,jsx}"], // åªå¤ç js å jsx æä»¶
      parser: "@babel/eslint-parser", // ä½¿ç¨ babel æ¥è§£æ js æä»¶
      parserOptions: {
        sourceType: "module", // æ¯æ import/export
        allowImportExportEverywhere: false,
        ecmaFeatures: {
          globalReturn: false,
        },
      },
    },
    // å¤ç TS æä»¶
    {
      files: ["**/*.{ts,tsx}", "**/*.{js,jsx}"], // åªå¤ç ts å js æä»¶
      excludedFiles: [".eslintrc.js"], // è¿éç¦ç¨äº .eslintrc.js çç±»åæ£æ¥
      parser: "@typescript-eslint/parser", // è½çæ TypeScript
      parserOptions: {
        project: ["./tsconfig.json"], // åè¯ eslintï¼tsconfig å¨åª
      },
      extends: [
        // typescript-eslint çæ¨èè§åï¼åªæ¯è¿äºæä½³è§åé½æ¯éå¯¹ TS ç
        "plugin:@typescript-eslint/recommended",
        // tsconfig.json é Type Checking çæ¨èè§å
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: [
        // ä½¿ç¨ typescript x eslint çæä»¶
        "@typescript-eslint",
      ],
    },
    // å¤ç vue æä»¶
    {
      files: ["**/*.vue"], // åªå¤ç vue æä»¶
      extends: ["plugin:vue/vue3-recommended"], // ä½¿ç¨ vue3 çæ¨èè§å
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
