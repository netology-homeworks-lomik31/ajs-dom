import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        ignores: ["dist/*"],
        files: ["**/*.test.js"],
        ...jest.configs["flat/recommended"],

        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            // indent: ["error", 4],
            "no-unused-vars": "warn",
            ...jest.configs["flat/recommended"].rules,
            "jest/prefer-expect-assertions": "off",
        },
    }
];
