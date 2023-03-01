module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".js"],
      },
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [
    "**/components/Flags/CountryFlags/*.tsx",
    "**/components/Icons/*.tsx",
    "**/__tests__",
  ],
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "no-console": "warn",
    "prefer-const": "error",
    indent: ["error", 2],
    semi: ["error", "always"],
  },
};
