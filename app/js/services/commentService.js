'use strict';

SocialNetwork.factory('commentService', function ($http, baseUrl) {
    var serviceUrl = baseUrl + 'posts/';
    var commentService = {};

    commentService.getPostComments = function (postId, headers, success, error) {
        $http.get(serviceUrl + postId + '/comments', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    commentService.addCommentToPost = function (postId, commentData, headers, success, error) {
        $http.post(serviceUrl + postId + '/comments', commentData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    commentService.editComment = function (postId, commentId,
                                        commentData, headers, success, error) {
        $http.put(serviceUrl + postId + '/comments/' + commentId,
            commentData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    commentService.deleteComment = function (postId, commentId,
                                          headers, success, error) {
        $http.delete(serviceUrl + postId + '/comments/' + commentId, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    commentService.likeComment = function (postId, commentId, headers, success, error) {
        $http.post(serviceUrl + postId + '/comments/' + commentId + '/likes', {}, {headers: headers})
            .success(function (data) {
                success(data);
            }).error(error)
    };

    commentService.dislikeComment = function (postId, commentId, headers, success, error) {
        $http.delete(serviceUrl + postId + '/comments/' + commentId + '/likes', {headers: headers})
            .success(function (data) {
                success(data);
            }).error(error);
    };

    commentService.getCommentDetailedLikes = function (postId, commentId, headers, success, error) {
        http.get(serviceUrl + postId + '/comments/' + commentId + '/likes', {headers: headers})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    commentService.getCommentLikesPreview = function (postId, commentId, headers, success, error) {
        http.get(serviceUrl + postId + '/comments/' + commentId + '/likes/preview',
            {headers: headers})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    return commentService;
});