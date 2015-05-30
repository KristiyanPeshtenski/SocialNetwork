'use strict';

SocialNetwork.controller('UserWallController', function ($scope, $route, $routeParams, $http, userDataService,
                                                         authentication, notificationService, defaultPageSize) {
    $scope.wallPostsPageSize = defaultPageSize;

    $scope.getUserFullData = function (username) {
        if (authentication.isLoggedIn()) {
            userDataService.getUserFullData(username, authentication.getHeaders(),
                function (serverData) {
                    $scope.userWallData = serverData;
                    console.log($scope.userWallData.username);
                },
                function (error) {
                    notificationService.showError('Cannot load user data.');
                    console.log(error);
                });
        }
    };

    $scope.getWallPosts = function (username) {
        userDataService.getFriendWall(username, $scope.wallPostsPageSize,
            authentication.getHeaders(),
            function (serverData) {
                $scope.userWallFeeds = serverData;
            },
            function (error) {
                notificationService.showError('fail to load user wall feeds.');
                console.log(error);
            });
    };

    $scope.showMoreWallFeeds = function () {
        $scope.wallPostsPageSize = $scope.wallPostsPageSize * 2;
        $scope.getWallPosts();
    };

    $scope.getFriendFriendsPreview = function (username) {
        userDataService.getFriendFriendsListPreview(username, authentication.getHeaders(),
            function (serverData) {
                $scope.friendFriendsPreview = serverData;
            },
            function (error) {
                console.log(error);
            });
    };

    $scope.getUserFullData($routeParams.username);
    $scope.getWallPosts($routeParams.username);
    $scope.getFriendFriendsPreview($routeParams.username);
});