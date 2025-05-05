const path = require('path');
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-prod', {
  resolve: {
    alias: {
      // Plugins can use 'CourseAuthoring' as an import alias for this app:
      CourseAuthoring: path.resolve(__dirname, 'src/'),
      'vendor/rfs': path.resolve(__dirname, 'node_modules/rfs/scss'),
    },
    fallback: {
      fs: false,
      constants: false,
    },
  },
  module: {
    rules: [
      // Add a rule for Sass files if it's not already defined in the config
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader',   // Resolves CSS imports
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'node_modules'), // Ensure node_modules is included
                  path.resolve(__dirname, 'node_modules/bootstrap/scss'), // Include Bootstrap SCSS
                ],
              },
            },
          },
        ],
      },
    ],
  },
});

module.exports = config;
