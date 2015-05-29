'use strict';

SocialNetwork.factory('userDataService', function ($http, baseUrl) {
    var userDataService = {};
    var userDataUrl = baseUrl + 'users/';

    userDataService.getUserPreviewData = function (username, headers, success, error) {
        $http.get(userDataUrl + username + '/preview', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.getUserFullData = function (username, headers, success, error) {
        $http.get(userDataUrl + username, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.searchUserByName = function (searchTerm, headers, success, error) {
        $http.get(userDataUrl + 'search?searchTerm=' + searchTerm, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };
    userDataService.getFriendWall = function (username, pageSize, headers, success, error) {
        $http.get(userDataUrl + username + '/wall?StartPostId=&PageSize=' + pageSize, { headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(error);
    };

    userDataService.getFriendFriendsList = function (username, headers, success, error) {
        $http.get(userDataUrl + username + '/friends', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.getFriendFriendsListPreview = function (username, headers, success, error) {
        $http.get(userDataUrl + username + '/friends/preview', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.clearParams = function () {
        userDataService.params = {};
    };

    return userDataService;

});