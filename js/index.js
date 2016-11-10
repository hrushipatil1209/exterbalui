angular.module('myApp',['ngMaterial']);

angular.module('myApp').controller('CallBackURL', function() {
    var callCackURL = this;
    callCackURL.exit = function () {
        window.location="https://www.google.com"
    }
});
