module.exports = {
  "extends": [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "jsx-a11y",
    "prettier",
    "react-hooks"
  ],
  "rules": {
    "prefer-object-spread": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/camelcase": ["warn"],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "quotes": [2, "single"],
    "jsx-quotes": [2, "prefer-single"],
    "react/prop-types": 0,
    "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true }]
  }
}
