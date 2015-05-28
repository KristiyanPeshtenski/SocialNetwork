'use strict';

SocialNetwork.factory('postService', function ($http, baseUrl) {
    var postService = {};
    var postServiceUrl = baseUrl + 'posts/';

    postService.addPost = function (postData, headers, success, error) {
        $http.post(postServiceUrl, postData, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.getPostById = function (postId, headers, success, error) {
        $http.get(postServiceUrl + postId, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.editPostById = function (postId, postData, headers, success, error) {
        $http.put(postServiceUrl + postId, postData, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.deletePostById = function (postId, headers, success, error) {
        $http.delete(postServiceUrl + postId, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };
    
    postService.getDetailedLikes = function (postId, headers, success, error) {
        $http.get(postServiceUrl + postId + '/likes', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.getLikePreview = function (postId, headers, success, error) {
        $http.get(postServiceUrl + postId + '/likes/preview', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.likePost = function (postId, headers, success, error) {
        $http.post(postServiceUrl + postId + '/likes', {}, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.dislikePost = function (postId, headers, success, error) {
        $http.delete(postServiceUrl + postId + '/likes', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.getPostComments = function (postId, headers, success, error) {
        $http.get(postServiceUrl + postId + '/comments', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    postService.addCommentToPost = function (postId, commentData, headers, success, error) {
        $http.post(postServiceUrl + postId + '/comments', commentData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    postService.editComment = function (postId, commentId,
                                        commentData, headers, success, error) {
        $http.put(postServiceUrl + postId + '/comments/' + commentId,
            commentData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    postService.deleteComment = function (postId, commentId,
                                         headers, success, error) {
        $http.delete(postServiceUrl + postId + '/comments/' + commentId, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };
    
    postService.likeComment = function (postId, commentId, headers, success, error) {
        $http.post(postServiceUrl + postId + '/comments/' + commentId, {}, {headers: headers})
            .success(function (data) {
                success(data);
            }).error(error)
    };

    postService.dislikeComment = function (postId, commentId, headers, success, error) {
        $http.delete(postServiceUrl + postId + '/comments/' + commentId, {headers: headers})
            .success(function (data) {
                success(data);
            }).error(error);
    };

    postService.getCommentDetailedLikes = function (postId, commentId, headers, success, error) {
        http.get(postServiceUrl + postId + '/comments/' + commentId + '/likes', {headers: headers})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    postService.getCommentLikesPreview = function (postId, commentId, headers, success, error) {
        http.get(postServiceUrl + postId + '/comments/' + commentId + '/likes/preview',
            {headers: headers})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    return postService;
});