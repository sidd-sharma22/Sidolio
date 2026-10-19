import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// ESLint flat configuration for code quality and React best practices
export default tseslint.config(
  // Ignore build output directory
  { ignores: ["dist"] },
  {
    // Apply recommended JavaScript and TypeScript rules
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Enable browser global variables (window, document, etc.)
    },
    plugins: {
      "react-hooks": reactHooks,   // Catches common React Hook bugs
      "react-refresh": reactRefresh, // Ensures smooth Fast Refresh in Vite dev mode
    },
    rules: {
      // Enforce React Hooks rules (e.g. no hooks inside loops/conditionals)
      ...reactHooks.configs.recommended.rules,
      // Warn if exporting non-components that could break Vite HMR
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // Allow unused variables without failing lint checks
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
