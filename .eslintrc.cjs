module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "next/core-web-vitals",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "tailwind.config.js",
    "tsconfig.pages.json-delete",
    "vite.config.ts",
    "setup.ts",
    "delete",
  ],
  rules: {
    "import/no-named-as-default": "off",
    'react/no-unknown-property': 'off',
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    "jest/no-mocks-import": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true,
        },
      },
    ],
  },
};
