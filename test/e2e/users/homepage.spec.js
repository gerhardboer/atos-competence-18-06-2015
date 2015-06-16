'use strict';

var UserPage = require('./homepage.po.js');

describe('Users', function () {

    var page = new UserPage();

    beforeEach(function () {
        page.get();
        browser.waitForAngular();
    });

    describe('when the page is initialized', function () {
        it('then it should load a list of users', function () {
            expect(page.users.count()).toBe(4);
        });
    });

    describe('when selecting a user', function () {

        it('then it should show the detailed view of the user', function () {
            expect(page.mainContent.userLoaded).toBeFalsy();
            expect(page.mainContent.startupText).toBe('Selecteer een gebruiker');

            page.selectRandomUser();

            expect(page.mainContent().userLoaded).toBeTruthy();
            expect(page.mainContent().startupText).toBe('');
        });
    });

    xdescribe('when opening the contact sheet', function () {

        beforeEach(function () {
            page.selectRandomUser();
        });

        it('then it should show the phone number', function () {
            //expect(page.contactSheet().phone).toBe('555-555-555');
            //expect(page.mainContent().startupText).toBe('');
        });
    });
});
