angular.module('myApp',['ngMaterial']);

angular.module('myApp').controller('CallBackURL', function() {
    var callCackURL = this;
    callCackURL.exit = function () {
        window.location="https://hrushipatil1209.github.io/exterbalui/return.html"
    }
});
angular.module('myApp').controller('CallBackJS', function() {
    var callCackJS = this;
    callCackJS.exit = function () {
       window.parent.parent_exit();
    }
});
