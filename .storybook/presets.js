const path = require("path");

module.exports = [
  {
    name: "@storybook/preset-typescript",
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
      },
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
      include: [path.resolve(__dirname, "../src")]
    }
  },
  {
    name: '@storybook/preset-scss'
  },
  {
    name: '@storybook/addon-docs/preset'
  }
];