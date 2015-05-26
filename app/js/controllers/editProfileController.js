'use strict';

SocialNetwork.controller('EditProfileController', function ($scope, $location, authentication,
    ownDataService, notificationService) {

    $scope.currentUser = {};

    function getUserData(){
        ownDataService.getOwnData(authentication.getHeaders(),
            function (serverData) {
                $scope.currentUser = serverData;
            },
            function (error) {
                notificationService.showError('fail to load own data.')
            });
    }

    getUserData();

    $scope.deleteProfileImage = function () {
        $scope.currentUser.profileImageData = null;
    };

    $scope.deleteCoverImage = function () {
        $scope.currentUser.coverImageData = null;
    };

    $scope.editUserProfile = function () {
        var profileImageElement = document.getElementById('profileImage').getElementsByTagName('img')[0];
        if(profileImageElement){
            if(profileImageElement.currentSrc != $scope.currentUser.profileImageData){
                $scope.currentUser.profileImageData = profileImageElement.currentSrc;
                $scope.currentUser.profileImageChanged = true;
            }else{
                $scope.currentUser.profileImageChanged = false;
            }
        }else{
            $scope.currentUser.profileImageChanged = true;
            $scope.currentUser.profileImageData = "";
        }
        var coverImageElement = document.getElementById('coverImage').getElementsByTagName('img')[0];
        if(coverImageElement){
            if(coverImageElement.currentSrc != $scope.currentUser.coverImageData){
                $scope.currentUser.coverImageData = coverImageElement.currentSrc;
                $scope.currentUser.coverImageChanged = true;
            }else{
                $scope.currentUser.coverImageChanged = false;
            }
        }else{
            $scope.currentUser.coverImageChanged = true;
            $scope.currentUser.coverImageData = '';
        }
        ownDataService.editProfile($scope.currentUser, authentication.getHeaders(),
            function (serverData) {
                notificationService.showInfo('Profile updated.');
                $location.path('/user/home');
            }, function (error) {
                notificationService.showError('Profile update fail.');
                console.log(error);
            });
    }
});