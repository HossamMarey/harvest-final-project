import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      "no-unused-vars": false,
    },

  },
  pluginJs.configs.recommended,

];
