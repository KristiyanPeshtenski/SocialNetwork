'use strict';

SocialNetwork.controller('UserHeaderController', function ($scope, $location, authentication,
                       notificationService, ownDataService) {


    $scope.GetOwnInfo = function () {
        ownDataService.getOwnData(authentication.getHeaders(),
            function (serverData) {
                $scope.ownInfo = serverData;
            }, function (error) {
                notificationService.showError('Cannot load data from server')
            })
    };

    $scope.GetFriendRequests = function () {
        ownDataService.getFriendRequests(authentication.getHeaders(),
            function (serverData) {
                $scope.requests = serverData;
                $scope.requestsCount = $scope.requests.length;
            }, function (error) {
                console.log(error);
            })
    };

    $scope.Logout = function () {
        authentication.Logout(authentication.getHeaders(),
            function () {
                notificationService.showInfo('Logout successful.');
                //cleanData();
                authentication.ClearCredentials();
                $location.path('/');
        }, function (error) {
            notificationService.showError('Logout fail.')
        });
    };

    $scope.GetOwnInfo();
    $scope.GetFriendRequests();
});