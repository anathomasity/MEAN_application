myApp.controller('startWorkoutController', function($scope, $cookies, $location, $anchorScroll, $routeParams, usersFactory, workoutFactory){
  console.log('I am able to load my Start workout Controller along with my workout partial');

  var current_user = $cookies.get('logged_user');
  if(!current_user){
      $location.url('/')
  }

  console.log('HEREEHREHRHEHR',$routeParams.id);
  workoutFactory.getWorkout($routeParams.id , function(data) {

    console.log('back from factory with our workout', data);
    $scope.workout = data;
  })

  $scope.addToDashboard = function(workout,time){
    console.log('WORKOUT AND TIME', workout, time);
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
