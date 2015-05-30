describe('UserController', function () {

    beforeEach(module('users'));

    var $scope, controller, smallerThan500px;

    beforeEach(inject(function ($rootScope, $controller) {
        //create a new scope
        $scope = $rootScope.$new();

        //create a new UserController with a mocked $mdMedia service
        controller = $controller('UserController', {
            $scope: $scope,
            $mdMedia: function () {
                return smallerThan500px;
            }
        })
    }));

    describe('when the user resizes the screen', function () {
        it('to smaller than 500px, then vm.isLayoutSmall should be true', function () {
            smallerThan500px = true;
            expect(controller.isLayoutSmall).toBe(undefined);

            //kickoff the angular cycle to trigger the $watch-es
            $scope.$apply();

            expect(controller.isLayoutSmall).toBe(true);
        });

        it('to larger  than 500px, then vm.isLayoutSmall should be false', function () {
            smallerThan500px = false;
            expect(controller.isLayoutSmall).toBe(undefined);

            //kickoff the angular cycle to trigger the $watch-es
            $scope.$apply();

            expect(controller.isLayoutSmall).toBe(false);
        });
    });
});