'use strict';

SocialNetwork.controller('CommentController', function ($scope, $route, $routeParams,
                                                        commentService, authentication, notificationService) {
    $scope.addComment = function (post, commentContent) {
        var commentData = {
            commentContent: commentContent
        };

        commentService.addCommentToPost(post.id, commentData, authentication.getHeaders(),
            function (serverData) {
                $route.reload();
                notificationService.showInfo('comment added');
            },
            function (error) {
                notificationService.showError('add comment failed.');
                console.log(error);
            })
    };

    $scope.likeComment = function (post, comment) {
        commentService.likeComment(post.id, comment.id, authentication.getHeaders(),
            function (serverData) {
                comment.liked = serverData.liked;
                comment.likesCount = serverData.likesCount;
                notificationService.showInfo('comment liked.')
            },
            function (eror) {
                notificationService.showError('comment like failed.');
                console.log(eror);
            });
    };

    $scope.dislikeComment = function (post, comment) {
        commentService.dislikeComment(post.id, comment.id, authentication.getHeaders(),
            function (serverData) {
                comment.liked = serverData.liked;
                comment.likesCount = serverData.likesCount;
                notificationService.showInfo('comment disliked.')
            },
            function (eror) {
                notificationService.showError('comment dislike failed.');
                console.log(eror);
            });
    };

});