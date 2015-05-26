'use strict';

SocialNetwork.controller('AuthenticationController', function ($scope, $location, authentication,
    notificationService) {
    var ClearData = function () {
        $scope.loginData = '';
        $scope.registerData = '';
        $scope.userData = '';
    };
    
    $scope.login = function () {
        authentication.Login($scope.loginData,
            function (serverData) {
                notificationService.showInfo('Login Successful.');
                authentication.SetCredentials(serverData);
                ClearData();
                $location.path('/user/home');
            },
            function (error) {
                notificationService.showError('Unsuccessful login.');
                console.log(error);
            });
    };

    $scope.register = function () {
        authentication.register($scope.registerData,
            function (serverData) {
                notificationService.showInfo('Register Successful.');
                authentication.SetCredentials(serverData);
                ClearData();
                $location.path('user/home');
            },
            function (error) {
                notificationService.showError('register fail.');
                console.log(error);
            })
    };
});