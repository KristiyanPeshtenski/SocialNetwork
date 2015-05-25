SocialNetwork.controller('mainController', function ($scope, $location, ownDataService,
                                                     notificationService, authentication) {
    var getOwnInfo = function () {
        ownDataService.GetOwnData(authentication.getHeaders(),
            function (serverData) {
                $scope.ownInfo = serverData;
            }, function (error) {
                console.log(error);
            });
    };

    getOwnInfo();
});