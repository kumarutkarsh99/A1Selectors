import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rule overrides
  {
    rules: {
      // Disable requiring escaped entities in JSX to avoid wrapping every apostrophe or quote
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
