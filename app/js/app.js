var SocialNetwork = angular.module('SocialNetwork', ['ngRoute']);

SocialNetwork.constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api/');
SocialNetwork.constant('defaultPageSize', 2);

SocialNetwork.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/welcome-screen.html',
        controller: 'AuthenticationController'
    });

    $routeProvider.when('/users/feeds', {
        templateUrl: 'templates/news-feed-screen.html',
        controller: 'NewsFeedController'
    });

    $routeProvider.when('/users/edit-profile/', {
        templateUrl: 'templates/edit-profile-screen.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/users/change-password/', {
        templateUrl: 'templates/change-password-screen.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.when('/users/wall/:username', {
        templateUrl: 'templates/user-wall-screen.html',
        controller: 'UserWallController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});

    // Authorization check
SocialNetwork.run(function ($rootScope, $location, authentication) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if($location.path().indexOf('/users/') != -1 && !authentication.isLoggedIn()){
            $location.path('/');
        }
        if($location.path().indexOf('/users/') == -1 && authentication.isLoggedIn()){
            $location.path('users/feeds');
        }
    })
});

