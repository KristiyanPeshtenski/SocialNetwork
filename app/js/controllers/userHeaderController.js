'use strict';

SocialNetwork.controller('userHeaderController', function ($scope, $location, authentication,
                       notificationService, ownDataService) {
    $scope.GetOwnInfo = function () {
        ownDataService.getOwnData(authentication.getHeaders(),
            function (serverData) {
                $scope.ownInfo = serverData;
            }, function (error) {
                notificationService.showError('Cannot load data from server')
            })
    };

    $scope.GetOwnInfo();

});