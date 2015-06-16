(function () {

    angular
        .module('users')
        .controller('UserController', [
            '$scope', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$mdMedia',
            UserController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function UserController($scope, $mdSidenav, $mdBottomSheet, $log, $q, $mdMedia) {
        var vm = this;

        vm.selected = null;
        vm.toggleList = toggleUsersList;
        vm.share = share;
        vm.numberOfUsers = new Array(4);        //since ng-repeat="4" does not exist yet:

        //$mdMedia is updated everytime the browser is resized
        $scope.$watch(function() { return  $mdMedia('sm'); }, function(isResponsiveSmallACtive) {
            vm.isLayoutSmall = isResponsiveSmallACtive;
        });

        //$mdMedia is updated everytime the browser is resized
        $scope.$watch(function() { return  $mdMedia('max-width: 500px'); }, function(shouldHide) {
            vm.hideContent = shouldHide
        });

        //this value is set in the user-list-directive.
        //because of the two-way binding {selected: '='} this watch is triggered
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
                $mdSidenav('left').toggle().then(function() {
                    vm.sideNavOpen = $mdSidenav('left').isOpen();
                });
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
                    {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg', value:  user.phone},
                    {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg', value: '@' + user.username},
                    {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg', value: user.email},
                    {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg', value: '@' + user.email}
                ];
                this.performAction = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

    }

})();
