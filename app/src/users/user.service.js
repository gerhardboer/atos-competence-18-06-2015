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
     *
     * DIFFERENCE BETWEEN SERVICE & FACTORY (from the angular source:)
     *  because services are instantiated with new(), binding to the instance works!
     *
     *   var Ping = function($http) {
     *     this.$http = $http;
     *     this.send = send;
     *
     *     function send() { return $http.send('/ping')}
     *   };
     *   someModule.controller('Ctrl', ['ping', function(ping) {
     *     ping.send();
     *   }]);
     *
     * factories are used when only 1 function is needed, usually to wrap $http
     *  $provide.factory('ping', ['$http', function($http) {
     *     return function ping() {
     *       return $http.send('/ping');
     *     };
     *   someModule.controller('Ctrl', ['ping', function(ping) {
     *     ping();
     *   }]);
     *
     */
    function UserService($http, $q) {
        var random_user_url = 'http://api.randomuser.me';

        this.getUsers = getUsers;
        this.getUser = getUser;

        function getUsers(numberOfUsers) {
            //if numberOfUsers is falsy (null, undefined, 0, '', NaN, false), set to 5
            numberOfUsers = numberOfUsers || 5;

            //get the nunmber of users from http://api.randomuser.me, and return a promise
            return $q.all(getUserRequestList(numberOfUsers));
        }

        //get a single user
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

        //Fancy object to get a User from http://api.randomuser.me
        function UserCall($http) {
            var userCall = this;
            //register the method on this object against memory leaks
            userCall.extractUser = function (response) {
                return response.data.results.map(function (user) {
                    return user.user;
                })[0]
            };

            //return a promise which will return a user from the JSON call
            return $http.get(random_user_url).then(userCall.extractUser);
        }
    }
})
();
