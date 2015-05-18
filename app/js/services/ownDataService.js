'use strict';

SocialNetwork.factory('ownDataService', function ($http, baseUrl) {
    var ownDataService = {};
    ownDataService.params = {};

    var ownDataServiceUrl = baseUrl + 'me/';

    ownDataService.GetNewsFeed = function (headers, success, error) {
        $http.get(ownDataServiceUrl + '/feed/',
            {
                params: this.paginationRarams,
                headers: headers
            })
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

    ownDataService.getFriends = function (headers, success, error) {
        $http.get(ownDataServiceUrl + 'friends/', {headers: headers})
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
    ownDataService.ApproveFriendRequest = function (requestId, headers, success, error) {
        $http.put(ownDataServiceUrl + 'requests/' + requestId + '/status=approved', {},
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, success, error) {
                success(data);
            }).error(error);
    };

    //TODO: pass url params from controller
    ownDataService.RejectFriendRequest = function (requestId, headers, success, error) {
        $http.put(ownDataServiceUrl + 'requests/' + requestId + '/status=delete', {},
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, success, error) {
                success(data);
            }).error(error);
    };
    
    ownDataService.ChangePassword = function (psswordData, headers, success, error) {
        $http.put(ownDataServiceUrl + 'changepassword/', ppsswordData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(success);
            }).error(error);
    };

    ownDataService.editProfile = function (userData, headers, success, error) {
        $http.put(ownDataServiceUrl, userData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.ClearParams = function () {
        this.params = {};
    };

    return ownDataService;

});