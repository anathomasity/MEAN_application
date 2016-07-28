myApp.controller('workoutController', function($scope, $cookies, $location, $anchorScroll, $routeParams, usersFactory, workoutFactory){
  console.log('I am able to load my workoutController along with my workout partial');

  var current_user = $cookies.get('logged_user');
  if(!current_user){
      $location.url('/')
  }
  
  $scope.type = $routeParams.type;
  type = $routeParams.type;
  console.log('this is the routeParams', $routeParams.type);

  $scope.pickLevel = function(level){
    console.log('this is level ', level);
    console.log('this is type', type);
    workoutFactory.getWorkouts(level, type, function(data){
      // console.log(level, 'this is level in the getworkouts method in the workoutController');
      // console.log(type, 'this is type in the getworkouts method in the workoutController');
      console.log(data, "this is data in the getWorkouts method inside the workoutController");
      $scope.workouts = data;
      $scope.exercises = JSON.parse(data.description);
      console.log($scope.exercises, 'this is scope.exertcises');
    })
  }

  $scope.logout = function(){
    console.log('we are in the logout method');
    console.log($cookies.get('logged_user'), 'this is the cookie method PRE remove');
    $cookies.remove('logged_user');
    $location.url('/');
    console.log($cookies.get('logged_user'), 'this is the logged_user cookie POST remove');
    cookie_userID='';
    cookie_userNAME='';
    console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_userNAME);
  }

})
