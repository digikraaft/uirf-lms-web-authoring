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
});

module.exports = config;
