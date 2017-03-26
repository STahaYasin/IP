app.controller('detail', function($scope, $http, $location, $routeParams){
    $scope.user = null;
    $scope.userId = $routeParams.param0;
    
    $scope.getUser = function(){
        /*$http.post(  'GET USER LINK' , {}).success(function(user){
            
        }).error(function(error){
            
        });*/
    }
    $scope.getUser();
});