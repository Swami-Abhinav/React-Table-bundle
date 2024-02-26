module.exports = {
  plugins: [
    ["@babel/plugin-transform-runtime", {
      corejs: false, // or 3, if you use @babel/runtime-corejs3
      helpers: true,
      regenerator: true,
      useESModules: false // Consider setting to true if targeting modern environments
    }]
  ],
  presets: [
    "@babel/preset-env", 
    "@babel/preset-react"
  ]
};
