var ip = "http://172.16.235.202:3000";
app.controller('login', function($scope, $http, $location, $interval){
    $scope.info = {
        'text' : 'INFO BOX',
        'class' : 'info_hidden'
    }
    $scope.login = {
        'email' : '',
        'password' : ''
    }
    
    $scope.signin = function(){
        if($scope.login.email && $scope.login.password){
            $http.post(ip + '/api/loginUser', $scope.login).then(function(res){
                $scope.showInfo(res.data.text, res.data.class);
            }, function(err){
                $scope.showInfo('NETWORK ERROR', 'info_show info_red');
            });
        }
        else{
            $scope.showInfo('PLEASE FILL IN EVERYTHING', 'info_show info_red');
        }
    }
    $scope.goToSingUp = function(){
        $location.path('/signup');
    }
    
    $scope.showInfo = function(tx, cl){
        $scope.info.text = tx;
        $scope.info.class = cl;
        $interval(function(){
            $scope.info.class = 'info_hidden info_blue';
        }, 2000, 1);
    }
    
    // ------------------------- SIGN UP -------------------------//
    
    $scope.user = {
        'firstname' : '',
        'lastname' : '',
        'email' : '',
        'phone' : '',
        'street' : '',
        'nr' : '',
        'zipcode' : '',
        'place' : '',
        'country' : '',
        'bday' : '',
        'type' : 's',
        'school' : '',
        'class' : '',
        'password' : ''
    }
    $scope.schools = [];
    $scope.classes = [];
    
    $scope.getSchools = function(){
        // doe een http get request hier
        $scope.schools = [{_id : '16116', 'name' : 'ap'}, {_id : '4758', 'name' : 'map'}]
        // doe een http get request hier
    }
    $scope.getClasses = function(){
        // doe een http get request hier
        
        // doe een http get request hier
    }
    $scope.getSchools();
    
    $scope.changeUserType = function(){
        if($scope.user.type == 's'){
            $scope.getSchools();
        }
        else{
            $scope.schools = [];
            $scope.classes = [];
        }
    }
    $scope.changeUserSchool = function(){
        if($scope.user.school == '16116'){
            $scope.classes = [{_id : '6494', 'name' : '2ea2'}];
        }
        else{
            $scope.classes = [{_id : '6494', 'name' : '2ea3'},{_id : '6494', 'name' : '2ea1'}]
        }
    }
    $scope.showStudent = function(){
        return $scope.type == 's';
    }
    
    $scope.goToSingIn = function(){
        $location.path('/signin');
    }
    $scope.signup = function(){
        if($scope.user.firstname && $scope.user.lastname && $scope.user.email && $scope.user.phone && $scope.user.bday && $scope.user.street && $scope.user.nr && $scope.user.country && $scope.user.zipcode && $scope.user.place && $scope.user.password && $scope.password_again && $scope.user.type){
            if($scope.user.password == $scope.password_again){
                $http.post(ip + '/api/createUser', $scope.user).success(function(res){
                    $scope.showInfo(res.text, res.class);
                }).error(function(error){
                    $scope.showInfo('NETWORK ERROR', 'info_show info_red');
                });
            }
            else{
                $scope.showInfo('THE PASSWORDS ARE NOT THE SAME', 'info_show info_red');
            }
        }
        else{
            $scope.showInfo('PLEASE FILL IN EVERYTHING', 'info_show info_red');
        }
        
    }
});