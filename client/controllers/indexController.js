myApp.controller('indexController', function($scope, $location, $cookies, mongooseFactory){

	var current_user = $cookies.get('logged_user');
  	if(!current_user){
      	$location.url('/')
  	}

	console.log('I am able to load my indexController along with my index partial');

	//logout method
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