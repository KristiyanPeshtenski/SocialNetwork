'use strict';

SocialNetwork.factory('authentication', function ($http, baseUrl) {
    var service = {};

    var serviceUrl = baseUrl + 'users/';

    service.Register = function (registerData, success, error) {
        $http.post(serviceUrl + 'register/', registerData)
            .success(function (data, status, headers, config) {
                success(data);
        }).error(error, status);
    };

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + 'login/', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error, status);
    };

    service.Logout = function (success, error) {
        $http.post(serviceUrl + '/logout/')
            .success(function (data, status, headers, config) {
                success(status);
            }).error(error, status);
    };

    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.userName;
    };
    
    service.getHeaders = function () {
        return{
            Authorization: 'Bearer' + ' ' + localStorage['accessToken']
        }
    };

    service.getUsername = function () {
        return localStorage['username'];
    };

    service.IsLoggedIn = function () {
        return localStorage['accessToken'];
    };

    service.ClearCredentials = function () {
        localStorage.clear();
    };

    return service;
});

