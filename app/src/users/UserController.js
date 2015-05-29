(function () {

    angular
        .module('users')
        .controller('UserController', [
            '$scope', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            UserController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function UserController($scope, $mdSidenav, $mdBottomSheet, $log, $q) {
        var vm = this;

        vm.selected = null;
        vm.toggleList = toggleUsersList;
        vm.share = share;
        //since ng-repeat="4" does not exist yet:
        vm.numberOfUsers = new Array(4);

        // Load all registered users
        $scope.$watch('vm.selected', function () {
            toggleUsersList();
        });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * First hide the bottomsheet IF visible, then
         * hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        }

        /**
         * Show the bottom sheet
         */
        function share($event) {
            var user = vm.selected;

            $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
                templateUrl: 'src/users/view/contactSheet.html',
                controller: ['$mdBottomSheet', UserSheetController],
                controllerAs: "vm",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            /**
             * Bottom Sheet controller for the Avatar Actions
             */
            function UserSheetController($mdBottomSheet) {

                this.user = user;
                this.items = [
                    {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg'},
                    {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
                    {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
                    {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
                ];
                this.performAction = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

    }

})();
