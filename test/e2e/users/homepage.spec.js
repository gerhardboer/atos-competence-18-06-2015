'use strict';

var UserPage = require('./homepage.po.js');

describe('Users', function () {

    var page = new UserPage();

    beforeEach(function () {
        page.get();
    });

    it('should load a list of users', function () {
        expect(page.users.count()).toBeGreaterThan(1);
    });

    describe('selecting a user', function () {

        beforeEach(function () {

        });

        it('should set focus on first Share option in Contact Share view', function () {
            //share.actions().then(function(items) {
            //  expect(items[0].getAttribute('id')).toEqual(share.focusedItem().getAttribute('id'));
            //});
        });

    });
});
