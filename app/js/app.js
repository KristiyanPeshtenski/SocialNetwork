var SocialNetwork = angular.module('SocialNetwork', ['ngRoute']);

SocialNetwork.constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api/');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'partials/publicHomeScreen.html',
            controller: 'AuthenticationController'
        });

    $routeProvider.when('user/home', {

    });

    $routeProvider.otherwise({redirectTo: '/'});
});

