describe('UserController', function () {

    beforeEach(module('users'));

    var userService, $httpBackend;

    function mockRandomUserCall(status, user) {
        var response = {results: [ {user: user }]};
        $httpBackend.expectGET('http://api.randomuser.me').respond(status, response);
    }

    beforeEach(inject(function (_userService_, _$httpBackend_) {
        userService = _userService_;
        $httpBackend = _$httpBackend_;
    }));

    describe('When userService.getUser is called', function () {
        it('then it should retrieve a random user from randomuser.org', function () {
            mockRandomUserCall(200, {name: 'test'});

            userService.getUser().then(function (user) {
                expect(user).toBeDefined();
                expect(user.name).toBe('test');
            });

            $httpBackend.flush();
        });
    });

    describe('When userService.getUsers is called', function () {
        it('then it should retrieve the requested amount of random users from randomuser.org', function () {
            var expectedUserCallCount = 5;

            for(var i = 0; i < expectedUserCallCount; i++) {
                mockRandomUserCall(200, {name: 'test'});
            }

            userService.getUsers(expectedUserCallCount).then(function (users) {
                expect(users.length).toBe(expectedUserCallCount);
            });

            $httpBackend.flush(expectedUserCallCount);
        });
    });
});