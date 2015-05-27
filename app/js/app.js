var SocialNetwork = angular.module('SocialNetwork', ['ngRoute', 'ui.bootstrap.pagination']);

SocialNetwork.constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api/');
SocialNetwork.constant('defaultPageSize', 2);

SocialNetwork.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/publicHomeScreen.html',
        controller: 'AuthenticationController'
    });

    $routeProvider.when('/user/home', {
        templateUrl: 'templates/userHomeScreen.html',
        controller: 'UserHomeController'
    });

    $routeProvider.when('/user/edit-profile/', {
        templateUrl: 'templates/editProfileScreen.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/user/change-password/', {
        templateUrl: 'templates/changePasswordScreen.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});

