const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .vue(3)
  // .postCss('resources/css/app.css', 'public/css', [
  //     //
  // ])
  .webpackConfig(webpackConfig)
  // .copyDirectory("resources/admin_template/assets", "public/assets")
  // .copyDirectory("resources/admin_template/vendors", "public/vendors")
  .sass('resources/sass/admin/app.scss', 'public/css').options({
    processCssUrls: false
  })
  .sass('resources/sass/app.scss', 'public/css')
  .version()
  .sourceMaps();
