import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import perfectionist from "eslint-plugin-perfectionist";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
    ignores: [
      "src/**/.test.*",
      "src/**/.spec.*",
    ],
    settings: {
      react: { version: "detect" },
      perfectionist: {
        type: "line-length",
        partitionByComment: true,
      },
    },
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreAlias: false,
          ignoreCase: true,
          specialCharacters: "keep",
          groupKind: "mixed",
          partitionByNewLine: false,
          partitionByComment: false,
          matcher: "minimatch",
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
        },
      ],
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "no-useless-escape": "off",
      // Var is outdated use let/const instead for import
      "no-var": "warn",
      "hydrogen/prefer-image-component": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "no-case-declarations": "off",
      "no-use-before-define": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // avoid using var module = require("module-x") instead => Es2015+ import
      "@typescript-eslint/no-var-requires": ["error"],
      // no any variable in case of typescript project
      "@typescript-eslint/no-explicit-any": ["warn"],
      // error on variable not used
      "@typescript-eslint/no-unused-vars": "error",
      // Use `` when dynamic string
      "prefer-template": "error",
      // no ommit second argument in parseInt method (radix)
      radix: "error",
      // send warn if formating no match prettier config
      "prettier/prettier": ["error"],
    },
  },
];
