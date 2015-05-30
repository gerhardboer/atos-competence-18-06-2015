(function() {
    angular
        .module('users')
        .directive('userDetailCard', function() {
                return {
                    restrict: 'E',
                    templateUrl: 'src/users/detail-card/detail-card.html',
                    scope: {
                        title: '@'
                    },
                    transclude: true
                };
            }
        );
})();