(function () {
    angular
        .module('users')
        .directive('userListItem', function (userService) {
            return {
                restrict: 'E',                                      //only <user-list-item><user-list-item> is allowed
                templateUrl: 'src/users/list-item/list-item.html',  //reference to the HTML. NOTE: to test this, see karma.conf ngHtml2JsPreprocessor
                scope: {                                            //create a new isolate scope
                    selected: "="                                   //two-way binding
                },
                bindToController: true,                             //bind the values in the scope object directly to the instance ('this' in the controller function)
                controllerAs: 'vm',                                 //use alias vm in the HTML
                controller: userListItemController                  //the controller
            };

            function userListItemController() {
                var vm = this;

                vm.selectUser = selectUser;
                retrieveUser();

                /**
                 * Select the current avatars
                 * Since this is a two way binding, the value is also updated
                 * in the UserController
                 * @param menuId
                 */
                function selectUser() {
                    vm.selected = vm.user;
                }

                /**
                 * Get the user from the service and bind the result to the controller instance
                 */
                function retrieveUser() {
                    userService.getUser().then(function (user) {
                        vm.user = user;
                    });
                }
            }
        });
})();