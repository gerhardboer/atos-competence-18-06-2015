describe('userListItem Directive', function () {
    var $scope, userPromiseDeferred, $compile, $q;

    //Load the directive templates that are called with a GET because of templateUrl: ''
    //see karma.conf.js { ngHtml2JsPreprocessor }
    beforeEach(module("user.templates"));

    //Mock the userService BEFORE they are injected into the users module
    beforeEach(module('users', function ($provide) {
        $provide.service('userService', function () {

                //return a promise because userService.getUser returns a promise
                //this can be resolved/rejected later in the test


        });
    }));

    beforeEach(setupInjectables);

    function setupInjectables() {

        //make a reference to the userPromiseDeferred object to resolve/reject
    }


    describe('when the user-list-item is loaded', function () {
        it('then it should retrieve a random user from randomuser.org', function () {
            //resolve the userPromiseDeferred with {name: 'test'}

            //get the compiled user directive
            var elem = compileUserListItemDirective();

            //get access to the scope from the directive to test the values on it
            expect(elem.isolateScope().vm.user).toEqual({name: 'test'});
        });

    });

    function compileUserListItemDirective() {
        //compile the directive with a reference to the $scope
        var elem = $compile('<user-list-item selected=""></user-list-item>')($scope);
        //kick off the angular cycle to resolve promises and parse the directive
        $scope.$apply();

        return elem;
    }
});