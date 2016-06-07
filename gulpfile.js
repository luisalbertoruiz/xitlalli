var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;
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
    mix.less('bootstrap/bootstrap.less')
       .less('xitlalli/xitlalli.less')
       .less('font-awesome/font-awesome.less');

    //mix.styles('sweetalert2.css');

    mix.scripts('libraries/jquery.js')
       .scripts('libraries/sweetalert2.js')
       .scripts('libraries/bootstrap.js')
       .scripts('libraries/xitlalli.js')
       .scripts('modules/prueba.js');

    //mix.copy('resources/assets/fonts', 'public/fonts');
});
