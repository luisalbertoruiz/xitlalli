var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('bootstrap/bootstrap.less');
    mix.less('xitlalli/xitlalli.less');
});
elixir(function(mix) {
    mix.scriptsIn('resources/assets/js/bootstrap','public/js/bootstrap.js');
});
elixir(function(mix) {
    mix.copy('resources/assets/fonts', 'public/fonts');
});
