'use strict';

SocialNetwork.factory('userDataService', function ($http, baseUrl) {
    var userDataService = {};
    var userDataUrl = baseUrl + 'users/';
    userDataService.params = {};

    userDataService.GetUserPreviewData = function (username, headers, success, error) {
        $http.get(userDataUrl + username + '/preview', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.GetUserFullData = function (username, headers, success, error) {
        $http.get(userDataUrl + username, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };
        //TODO: insert searchTerms param
    userDataService.SearchUserByName = function (searchData, headers, success, error) {
        $http.get(userDataUrl + 'search?searchTerms=searchData', {
            params: this.params,
            headers: headers
        })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };
        //TODO: params ?StartPostID=id&PageSize=pageSize
    userDataService.getFriendWall = function (username, headers, success, error) {
        $http.get(userDataUrl + username + '/wall', {
            params: this.params,
            headers: headers
        })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.GetFriendFriendsList = function (username, headers, success, error) {
        $http.get(userDataUrl + username + '/friends', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.GetFriendFriendsListPreview = function (username, headers, success, error) {
        $http.get(userDataUrl + username + '/friends/preview', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    userDataService.ClearParams = function () {
        userDataService.params = {};
    };

    return userDataService;

});