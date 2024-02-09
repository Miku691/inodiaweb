var app = angular.module("motorProdPortal", ['ngRoute', 'ngMaterial', 'ngMessages']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController'
        }).
        when('/content', {
            templateUrl: 'views/contentView.html',
            controller: 'contentController'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });
    $locationProvider.hashPrefix('');
}
]);

app.controller('appController', function ($scope) {
    $scope.mainController = "main controller txt";
});