describe('UserController', function () {

    beforeEach(module('users'));

    var $scope, controller, smallerThan500px, shouldHide;

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();

        controller = $controller('UserController', {
            $scope: $scope,
            $mdMedia: function (val) {
                return smallerThan500px;
            }
        })

    }));

    describe('when the user resizes the screen', function () {
        it('to smaller than 500px, then vm.isLayoutSM should be true', function () {
            smallerThan500px = true;
            expect(controller.isLayoutSm).toBe(undefined);
            $scope.$apply();
            expect(controller.isLayoutSm).toBe(true);
        });

        it('to larger  than 500px, then vm.isLayoutSM should be false', function () {
            smallerThan500px = false;
            expect(controller.isLayoutSm).toBe(undefined);
            $scope.$apply();
            expect(controller.isLayoutSm).toBe(false);
        });
    });
});