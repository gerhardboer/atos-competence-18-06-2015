(function () {
    'use strict';

    angular.module('users')
        .service('userService', ['$http', '$q', UserService]);
    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function UserService($http, $q) {
        // Promise-based API
        this.getUsers = getUsers;
        this.getUser = getUser;

        function getUsers(numberOfUsers) {
            numberOfUsers = numberOfUsers || 5;
            return $q.all(getUserRequestList(numberOfUsers));
        }

        function getUser() {
            return new UserCall($http);
        }

        function getUserRequestList(userCount) {
            var users = [];
            for (var i = 0; i < userCount; i++) {
                users.push(new UserCall($http));
            }
            return users;
        }

        function UserCall($http) {
            var userCall = this;
            userCall.extractUser = function (response) {
                return response.data.results.map(function (user) {
                    return user.user;
                })[0]
            };

            return $http.get('http://api.randomuser.me').then(userCall.extractUser);
        }
    }
})
();
