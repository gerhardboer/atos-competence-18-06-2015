var UserPage = function UserPage() {
    var page = this;

    page.users = element.all(by.tagName('user-list-item'));

    page.get = get;
    page.selectRandomUser = selectRandomUser;

    page.mainContent = {
        startupText: element(by.id('content')).getText(),
        userLoaded: element(by.css('md-avatar face')).isPresent()
    };

    function get() {
        browser.get("/e2e-index.html");
    }

    function selectRandomUser() {
        console.log(page.users);
        page.users[0].click();
    }

};

module.exports = UserPage;