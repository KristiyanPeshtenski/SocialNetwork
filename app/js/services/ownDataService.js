'use strict';

SocialNetwork.factory('ownDataService', function ($http, baseUrl) {
    var ownDataService = {};
    ownDataService.params = {};

    var ownDataServiceUrl = baseUrl + 'me/';

    ownDataService.GetNewsFeed = function (headers, success, error) {
        $http.get(ownDataServiceUrl + '/feed/',
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
};

    ownDataService.GetOwnData = function (headers, success, error) {
        $http.get(ownDataServiceUrl, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.GetFriends = function (headers, success, error) {
        $http.get(ownDataServiceUrl + 'friends/', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.GetFriendRequests = function (headers, success, error) {
        $http.get(ownDataServiceUrl + 'requests/', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.SendFriendRequest = function (friendUsername, headers, success, error) {
        $http.post(ownDataServiceUrl + 'requests/' + friendUsername, {}, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };
        //TODO: pass url params from controller
    ownDataService.ApproveFriendRequest = function (requestId, headers, success, error) {
        $http.put(ownDataServiceUrl + 'requests/' + requestId, {},
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
        $http.put(ownDataServiceUrl + 'requests/' + requestId, {},
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, success, error) {
                success(data);
            }).error(error);
    };
    
    ownDataService.ChangePassword = function (passwordData, headers, success, error) {
        $http.put(ownDataServiceUrl + 'changepassword/', passwordData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    ownDataService.EditProfile = function (userData, headers, success, error) {
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