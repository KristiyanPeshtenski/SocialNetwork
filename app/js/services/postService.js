'use strict';

SocialNetwork.factory('postService', function ($http, baseUrl) {
    var postService = {};
    var postServiceUrl = baseUrl + 'posts/';

    postService.AddPost = function (postData, headers, success, error) {
        $http.post(postServiceUrl, postData, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.GetPostById = function (postId, headers, success, error) {
        $http.get(postServiceUrl + postId, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.EditPostById = function (postId, headers, success, error) {
        $http.put(postServiceUrl + postId, postData, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.EditPostById = function (postId, headers, success, error) {
        $http.delete(postServiceUrl + postId, { headers : headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };
    
    postService.GetDetailedLikes = function (postId, headers, success, error) {
        $http.get(postServiceUrl + postId + '/likes', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.GetLikePreview = function (postId, headers, success, error) {
        $http.get(postServiceUrl + postId + '/likes/preview', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.LikePost = function (postId, headers, success, error) {
        $http.post(postServiceUrl + postId + '/likes', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    postService.UnlikePost = function (postId, headers, success, error) {
        $http.delete(postServiceUrl + postId + '/likes', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    return postService;
});