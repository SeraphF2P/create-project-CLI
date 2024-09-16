/* eslint-disable no-undef */
// prettier.config.js

module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  tailwindAttributes: ["myClassList"],
  tailwindFunctions: ["tw", "clsx", "cva"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
