import eslintPluginSecurity from "eslint-plugin-security";
import eslintPluginSonarjs from "eslint-plugin-sonarjs";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      security: eslintPluginSecurity,
      sonarjs: eslintPluginSonarjs,
    },
    rules: {
      "security/detect-object-injection": "warn",
      "sonarjs/no-duplicate-string": "warn",
    },
  },
];
