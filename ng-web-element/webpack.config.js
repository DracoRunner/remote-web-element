const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  exposes: {
    "./routes": "./src/app/routes.ts",
    "./text-box": "./src/app/text-box/text-box.module.ts",
    "./nav-bar": "./src/app/header/navbar.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
