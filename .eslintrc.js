module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2020: true,
  },
  // 继承 ESLint 的规则集
  extends: "eslint:recommended",
};
