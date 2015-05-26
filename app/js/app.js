var SocialNetwork = angular.module('SocialNetwork', ['ngRoute']);

SocialNetwork.constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api/');
SocialNetwork.constant('pageSize', 5);

SocialNetwork.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/publicHomeScreen.html',
        controller: 'AuthenticationController'
    });

    $routeProvider.when('/user/home', {
        templateUrl: 'partials/userHomeScreen.html',
        controller: 'userHomeController'
    });

    $routeProvider.when('/user/edit-profile/', {
        templateUrl: 'partials/editProfileScreen.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/user/change-password/', {
        templateUrl: 'partials/changePasswordScreen.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});

