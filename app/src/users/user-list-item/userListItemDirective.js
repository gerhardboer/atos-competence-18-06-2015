(function () {
    angular
        .module('users')
        .directive('userListItem', function (userService) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'src/users/user-list-item/user-list-item.html',
                scope: {
                    selected: "="
                },
                bindToController: true,
                controllerAs: 'vm',
                controller: userListItemController
            };

            function userListItemController($scope) {
                var vm = this;

                vm.selected = $scope.selected;
                vm.selectUser = selectUser;

                /**
                 * Select the current avatars
                 * Since this is a two way binding, the value is also updated
                 * in the UserController
                 * @param menuId
                 */
                function selectUser() {
                    vm.selected = vm.user;
                }

                userService.getUser().then(function (user) {
                    vm.user = user;
                });
            }
        });
})();