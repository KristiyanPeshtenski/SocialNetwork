SocialNetwork.factory('authentication', function ($http, baseUrl) {
    var service = {};

    var serviceUrl = baseUrl + '/users/';

    service.Register = function (registerData, success, error) {
        $http.post(serviceUrl + '/register/', registerData)
            .success(function (data, status, headers, config) {
                success(data);
        }).error(error);
    };

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/login/', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.GetUserFullData = function (username, success, error) {
        $http.get(serviceUrl + username)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.GetUserPreviewData = function (username, success, error) {
        $http.get(serviceUrl + username + '/preview/')
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Logout = function (success, error) {
        $http.post(serviceUrl + '/logout/')
            .success(function (data, status, headers, config) {
                success(status);
            }).error(error);
    };
    
    service.getHeaders = function () {
        return{
            Authentication: 'Bearer' + localStorage['accessToken']
        }
    };

    service.clearCreditentials = function () {
        localstorage.clear();
    };
});

