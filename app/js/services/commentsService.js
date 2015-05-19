'use strict';

SocialNetwork.factory('commentsServices', function ($http, baseUrl) {
    var commentsServices = {};
    commentsServices.params = {};
    var commentsUrl = baseUrl + 'posts/:id/comments';

    commentsServices.GetPostComments = function (postId, headers, success, error) {
        $http.get(commentsUrl)

}

});