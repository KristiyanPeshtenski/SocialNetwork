'use strict';

SocialNetwork.factory('ownDataService', function ($http, baseUrl) {
    var ownDataService = {};

    var ownDataServiceUrl = baseUrl + 'me/';

    ownDataService.getNewsFeed = function (headers, pageSize, success, error) {
        $http.get(ownDataServiceUrl + '/feed?StartPostId=&PageSize=' + pageSize,
            { headers: headers })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.getOwnData = function (headers, success, error) {
        $http.get(ownDataServiceUrl, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.getOwnFriends = function (headers, success, error) {
        $http.get(ownDataServiceUrl + 'friends/', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.getOwnFriendsPreview = function (headers, success, error) {
        $http.get(ownDataServiceUrl + 'friends/preview', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.getFriendRequests = function (headers, success, error) {
        $http.get(ownDataServiceUrl + 'requests/', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.sendFriendRequest = function (friendUsername, headers, success, error) {
        $http.post(ownDataServiceUrl + 'requests/' + friendUsername, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };
        //TODO: pass url params from controller
    ownDataService.approveFriendRequest = function (requestId, headers, success, error) {
        $http.put(ownDataServiceUrl + 'requests/' + requestId + '?status=approved',
            {}, { headers: headers })
            .success(function (data, status, success, error) {
                success(data);
            }).error(error);
    };

    //TODO: pass url params from controller
    ownDataService.rejectFriendRequest = function (requestId, headers, success, error) {
        $http.put(ownDataServiceUrl + 'requests/' + requestId + '?status=delete',
            {}, { headers: headers })
            .success(function (data, status, success, error) {
                success(data);
            }).error(error);
    };
    
    ownDataService.changePassword = function (passwordData, headers, success, error) {
        $http.put(ownDataServiceUrl + 'changepassword/', passwordData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.editProfile = function (userData, headers, success, error) {
        $http.put(ownDataServiceUrl, userData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.clearParams = function () {
        this.params = {};
    };

    return ownDataService;
});