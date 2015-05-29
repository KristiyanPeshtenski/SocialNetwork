SocialNetwork.controller('UserHomeController', function ($scope, $location, ownDataService, postService,
                                                         notificationService, authentication, defaultPageSize) {

    $scope.feedsPageSize = defaultPageSize;

    $scope.getNewsFeed = function () {
        ownDataService.getNewsFeed(authentication.getHeaders(), $scope.feedsPageSize,
            function (serverData) {
                $scope.ownFeeds = serverData;
            }, function (error) {
                notificationService.showError('fail to load News feed.');
                console.log(error);
            });
    };

    $scope.showMoreFeeds = function () {
        $scope.feedsPageSize = $scope.feedsPageSize * 2;
        $scope.getNewsFeed();
    };

    $scope.getOwnFriendsPreview = function () {
        ownDataService.getOwnFriendsPreview(authentication.getHeaders(),
            function (serverData) {
                $scope.ownFriendsPreview = serverData;
            },
            function (error) {
                console.log(error)
            });
    };

    $scope.getOwnFriendsPreview();
    $scope.getNewsFeed();
});