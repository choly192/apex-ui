import recommendedConfig from "eslint-plugin-react";
import reactHooksRecommended from "eslint-plugin-react-hooks";
import typescriptParser from "@typescript-eslint/parser";
import reactFreshPlugin from "eslint-plugin-react-refresh";
import typescriptRecommended from "@typescript-eslint/eslint-plugin";

export default [
  // recommendedConfig,
  // reactHooksRecommended,
  // typescriptRecommended,
  {
    ignores: [
      "**/node_modules/",
      "**/dist",
      ".husky/",
      ".vscode/",
      "**/*.d.ts",
      ".git/",
    ],
    languageOptions: {
      globals: {
        browser: true,
        es2020: true,
        node: true,
      },
      parser: typescriptParser,
    },
    plugins: {
      "react-refresh": reactFreshPlugin,
      "@typescript-eslint/eslint-plugin": typescriptRecommended,
      "eslint-plugin-react": recommendedConfig,
      "eslint-plugin-react-hooks": reactHooksRecommended,
    },
    // plugins: [
    //   "react-refresh",
    //   "@typescript-eslint/recommended",
    //   "react-hooks/recommended",
    // ],
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];
