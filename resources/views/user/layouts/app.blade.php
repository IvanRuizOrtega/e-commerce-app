<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.head')
    </head>
<body>
    <div id="user">
        <user-app> </user-app>
    </div>
</body>
</html>
