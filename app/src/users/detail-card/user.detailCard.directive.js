(function () {
    angular
        .module('users')
        .directive('userDetailCard', function () {
            return {
                restrict: 'E',                                              //only <user-detail-card><user-detail-card> is allowed
                templateUrl: 'src/users/detail-card/detail-card.html',      //reference to the HTML. NOTE: to test this, see karma.conf ngHtml2JsPreprocessor
                scope: {                                                    //create an isolate scope
                    title: '@'                                              //one-way binding, since it is for view only
                },
                transclude: true                                            //get the content from  <user-detail-card>content<user-detail-card>
                                                                            //and put it into the template  instead of <div ng-transclude></div>
            };
        });
})();