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

            //get the number of users from http://api.randomuser.me, and return a promise
            return $q.when({}) /** remove this code and replace with your own **/
        }

        //get a single user
        function getUser() {
            return $q.when({}) /** remove this code and replace with your own **/
        }

    }
})
();
