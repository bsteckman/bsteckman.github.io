app.controller('MainController', function ($scope) {
    $scope.goHome = function(){
        window.location.href = "http://bsteckman.github.io/#";
        setTimeout(function () {
        location.reload()
    }, 100);
    }
    
        
    
});