module.exports = {
  "extends": ["airbnb-base", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};