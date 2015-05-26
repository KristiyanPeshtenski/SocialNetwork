SocialNetwork.controller('userHomeController', function ($scope, $location, ownDataService,
                                                     notificationService, authentication, pageSize) {
    $scope.feedParams = {
        'startPage': 1,
        'pageSize': pageSize
    };

    $scope.reloadFeed = function () {
        ownDataService.params = $scope.feedParams;
        ownDataService.getNewsFeed(authentication.getHeaders(),
            function (serverData) {
                $scope.ownFeeds = serverData;
            }, function (error) {
                notificationService.showError('fail to load News feed.');
                console.log(error);
            });
    };

    var getOwnFriendsPreview = function () {
        ownDataService.getOwnFriendsPreview(authentication.getHeaders(),
            function (serverData) {
                console.log(serverData);
                $scope.ownFriendsPreview = serverData;
            },
            function (error) {
                console.log(error)
            });
    };

    getOwnFriendsPreview();
});