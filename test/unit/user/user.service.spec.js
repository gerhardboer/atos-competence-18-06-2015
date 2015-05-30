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
            mockRandomUserCall(200, {name: 'test'});

            //wait for the userService to finish its tasks, then check the values
            userService.getUser().then(function (user) {
                expect(user).toBeDefined();
                expect(user.name).toBe('test');
            });

            //checks if there are no outstanding expect requests in angular
            //this means that the code did not do as expected, since no call was made
            $httpBackend.flush();
        });
    });

    describe('When userService.getUsers(5) is called', function () {
        it('then it should retrieve the requested amount of random users from randomuser.org', function () {
            var expectedUserCallCount = 5;

            //every single expected call has to be expected by the $httpBackend
            for(var i = 0; i < expectedUserCallCount; i++) {
                mockRandomUserCall(200, {name: 'test'});
            }

            //wait for the userService to finish its tasks, then check the values
            userService.getUsers(5).then(function (users) {
                expect(users.length).toBe(expectedUserCallCount);
            });

            //checks if there are no outstanding expect requests in angular
            //this means that the code did not do as expected, since fewer calls has been made than expected
            $httpBackend.flush(expectedUserCallCount);
        });
    });
});