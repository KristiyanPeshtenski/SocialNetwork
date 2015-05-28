'use strict';

SocialNetwork.controller('CommentController', function ($scope, commentService, authentication, notificationService) {
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