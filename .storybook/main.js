const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-options',
    '@storybook/preset-scss',
    '@storybook/addon-docs/preset',
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
    }
  ],
};