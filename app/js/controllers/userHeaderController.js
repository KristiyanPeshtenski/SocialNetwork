'use strict';

SocialNetwork.controller('UserHeaderController', function ($scope, $location, $route, authentication,
                                                           notificationService, ownDataService) {

    $scope.getOwnInfo = function () {
        ownDataService.getOwnData(authentication.getHeaders(),
            function (serverData) {
                $scope.ownInfo = serverData;
            }, function (error) {
                notificationService.showError('Cannot load data from server')
            });
    };

    $scope.getFriendRequests = function () {
        ownDataService.getFriendRequests(authentication.getHeaders(),
            function (serverData) {
                $scope.pendingRequests = serverData;
                var requestsCount = $scope.pendingRequests.length;
                if (requestsCount > 0) {
                    $scope.requestsCount = requestsCount;
                    $scope.hasPendingRequests = true;
                } else {
                    $scope.hasPendingRequests = false;
                }
            }, function (error) {
                console.log(error);
            });
    };

    $scope.approveFriendRequest = function (request) {
        ownDataService.approveFriendRequest(request.id, authentication.getHeaders(),
            function (data) {
                notificationService.showInfo('Friend added.');
                $window.location.reload();
            }, function (error) {
                console.log(error);
            });
    };

    $scope.rejectFriendRequest = function (request) {
        ownDataService.rejectFriendRequest(request.id, authentication.getHeaders(),
            function (data) {
                notificationService.showInfo('Friend request rejected.');
                $window.location.reload();
            }, function (error) {
                console.log(error);
            });
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

    $scope.getOwnInfo();
    $scope.getFriendRequests();
});