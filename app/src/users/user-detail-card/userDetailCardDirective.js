(function() {
    angular
        .module('users')
        .directive('userDetailCard', function() {
                return {
                    restrict: 'E',
                    templateUrl: 'src/users/user-detail-card/user-detail-card.html',
                    scope: {
                        title: '@'
                    },
                    transclude: true
                };
            }
        );
})();