var UserPage = function UserPage() {
    this.get = get;
    this.users = element.all(by.tagName('user-list-item'));

    function get() {
        browser.get("/#");
    }
};

module.exports = UserPage;