<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.head')
    </head>
<body>
    <div id="admin">
        <admin-app> </admin-app>
    </div>
</body>
</html>
