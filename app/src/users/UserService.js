(function () {
    'use strict';

    angular.module('users')
        .service('userService', ['$http', '$q', UserService]);

    function UserCall($http) {
        var userCall = this;
        userCall.extractUser = function(response) {
            return response.data.results.map(function (user) {
                return user.user;
            })[0]
        };

        return $http.get('http://api.randomuser.me').then(userCall.extractUser);
    }

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function UserService($http, $q) {

        function getUsers(userCount) {
            var users = [];
            for(var i = 0; i < userCount; i++) {
                users.push(new UserCall($http));
            }
            return users;
        }

        // Promise-based API
        return {
            loadAllUsers: function () {
                return $q.all(getUsers(5));
            },
            getUser: function () {
                return new UserCall($http);
            }
        };
    }

})();
