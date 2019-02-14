const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

const options = {
    stylesDir: path.join(__dirname, './src/styles'),
    antDir: path.join(__dirname, './node_modules/antd'),
    varFile: path.join(__dirname, './src/styles/vars.less'),
    mainLessFile: path.join(__dirname, './src/styles/main.less'),
    themeVariables: [
      '@layout-header-background',
      '@layout-sider-background',
      '@menu-dark-submenu-bg',
    ],
    indexFileName: 'index.html',
    generateOnce: false, // generate color.less on each compilation
  };
module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config,
);
    config = rewireLess.withLoaderOptions({
    enableJavascript: true,
    })(config, env);
    config.plugins.push(new AntDesignThemePlugin(options));
    return config;
};
