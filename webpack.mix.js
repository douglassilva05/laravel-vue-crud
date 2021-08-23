const mix = require('laravel-mix');

const modulesToTranspile = [
  "ansi-regex",
  "ansi-styles",
  "chalk",
  "react-dev-utils",
  "@react-navigation",
  "styled-components",
  "node_modules",
];

module.exports = async function (env, argv) {
  env.babel = { dangerouslyAddModulePathsToTranspile: modulesToTranspile };

  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  const loader = getExpoBabelLoader(config);
  if (loader) {
    loader.include("@babel/plugin-proposal-class-properties");
    loader.include("@babel/plugin-transform-arrow-functions");
    loader.include("@babel/plugin-transform-block-scoping");
    loader.include("@babel/plugin-transform-sticky-regex");
    loader.include("@babel/plugin-transform-unicode-regex");
    loader.include("@babel/plugin-transform-dotall-regex");
    loader.include("@babel/plugin-transform-named-capturing-groups-regex");
    loader.include("@babel/plugin-transform-runtime");

    // console.warn(loader)
  }
  return config;
};

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
