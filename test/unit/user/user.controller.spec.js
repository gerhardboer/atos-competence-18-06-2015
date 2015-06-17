describe('UserController', function () {
    var $scope, controller, smallerThan500px;

    beforeEach(module('users'));
    beforeEach(setupInjectables);

    function setupInjectables() {
        inject(function () {
            //create a new scope

            //create a new UserController with a mocked $mdMedia service

                //$mdMedia: function () {
                //    return smallerThan500px;
                //}

        });
    }

    describe('when the user resizes the screen', function () {
        it('to smaller than 500px, then vm.isLayoutSmall should be true', function () {
            expect(controller.isLayoutSmall).toBe(undefined);

            //kickoff the angular cycle to trigger the $watch-es

        });

        it('to larger  than 500px, then vm.isLayoutSmall should be false', function () {
            expect(controller.isLayoutSmall).toBe(undefined);

            //kickoff the angular cycle to trigger the $watch-es

        });
    });
});