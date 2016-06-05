<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        app('view')->composer('layouts.main', function ($view) {
            $action = app('request')->route()->getAction();
            $controller = strtolower(class_basename($action['controller']));
            list($controller, $action) = explode('controller@', $controller);
            $view->with('modulo', $controller);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
