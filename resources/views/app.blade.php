<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Honeyland-Traits-Explorer</title>

        @vite('resources/css/app.css')
    </head>
    <body>
       <div id="app" class="h-full"></div>


       @vite('resources/js/app.js')
    </body>
</html>
