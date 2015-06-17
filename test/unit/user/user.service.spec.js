describe('UserController', function () {

    beforeEach(module('users'));

    var userService, $httpBackend;

    /**
     * sets up an expect to the http://api.randomuser.me
     * and respond with the given status and user.
     *
     * note: http://api.randomuser.me returns { results: [ {user}, {user ] }
     * @param status
     * @param user
     */
    function mockRandomUserCall(status, user) {
        var response = {results: [ {user: user }]};
        $httpBackend.expectGET('http://api.randomuser.me').respond(status, response);
    }

    beforeEach(inject(function (_userService_, _$httpBackend_) {
        userService = _userService_;
        $httpBackend = _$httpBackend_;
    }));

    describe('When userService.getUser() is called', function () {
        it('then it should retrieve a random user from randomuser.org', function () {
            //mockRandomUserCall with {name: 'test'}

            //wait for the userService to finish its tasks, then check the values

            //checks if there are no outstanding expect requests in angular
            //this means that the code did not do as expected, since no call was made
            $httpBackend.flush();
        });
    });

    describe('When userService.getUsers(5) is called', function () {
        it('then it should retrieve the requested amount of random users from randomuser.org', function () {
            var expectedUserCallCount = 5;

            //every single expected call has to be expected by the $httpBackend

            //wait for the userService to finish its tasks, then check the values if 5 users are returned

            //checks if there are no outstanding expect requests in angular
            //this means that the code did not do as expected, since fewer calls has been made than expected
            $httpBackend.flush(expectedUserCallCount);
        });
    });
});