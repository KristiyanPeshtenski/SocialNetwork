'use strict';

SocialNetwork.controller('ChangePasswordController', function ($scope, $location, authentication,
                           ownDataService, notificationService) {
    var clearData = function () {
        $scope.passwordData = {};
    };

    $scope.changePassword = function () {
        ownDataService.changePassword($scope.passwordData, authentication.getHeaders(),
            function (serveData) {
                notificationService.showInfo('Password Changed.');
                clearData();
                $location.path('/user/home');
            }, function (error) {
                notificationService.showError('Fail to change password.');
            })
    }
});