var SocialNetwork = angular.module('SocialNetwork', ['ngRoute']);

SocialNetwork.constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api/');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/publicHomeScreen.html',
        controller: 'AuthenticationController'
    });

    $routeProvider.when('/user/home', {
        templateUrl: 'partials/userHomeScreen.html',
        controller: 'mainController'
    });

    $routeProvider.when('/user/edit-profile/', {
        templateUrl: 'partials/editProfileScreen.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/user/change-password/', {
        templateUrl: 'partials/chanePasswordScreen.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});

