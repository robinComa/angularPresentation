angular.module('angularPresentationApp', ['angularPresentationApp.services', 'angularPresentationApp.directives']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/test.html',
            controller  : 'Page1Ctrl'
        })
        .otherwise({
            redirectTo  : '/'
        });
});