'use strict';

SocialNetwork.controller('PostController', function ($scope, $route, $routeParams, authentication,
                                                     postService, notificationService) {
    $scope.addPost = function (postContent) {
        var postData = {
            postContent: postContent,
            username: $routeParams.username
        };
        postService.addPost(postData, authentication.getHeaders(),
            function (serverData) {
                $route.reload();
                notificationService.showInfo('Post added.')
            },
            function (error) {
                console.log(error);
            });
    };

    $scope.deleteFeedPost = function (post) {
        if(confirm('Are you sure you wont to delete this post')){
            postService.deletePostById(post.id, authentication.getHeaders(),
                function (serverData) {
                    var postIndex = $scope.ownFeeds.indexOf(post);
                    $scope.ownFeeds.splice(postIndex, 1);
                    notificationService.showInfo('post deleted.')
                },
                function (error) {
                    notificationService.showError('delete post fail.');
                    console.log(error);
                })
        }
    };

    $scope.likePost = function (feed) {
        postService.likePost(feed.id, authentication.getHeaders(),
            function (serverData) {
                feed.liked = serverData.liked;
                feed.likesCount = serverData.likesCount;
            },
            function (error) {
                console.log(error);
            });
    };

    $scope.dislikePost = function (feed) {
        postService.dislikePost(feed.id, authentication.getHeaders(),
            function (serverData) {
                feed.liked = serverData.liked;
                feed.likesCount = serverData.likesCount;
            },
            function (error) {
                console.log(error);
            });
    };
});