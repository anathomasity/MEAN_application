myApp.controller('friendController', function($scope, $location, $cookies, friendsFactory){

	var current_user = $cookies.get('logged_user');
  	if(!current_user){
      	$location.url('/')
  	}

	console.log('I am able to load my friendController');

// LINE 11 WILL GO INSTEAD OF 12
	// friendsFactory.getFriend(friendId, function(data){
	friendsFactory.getFriend(function(data){
		$scope.friend = data;
	})

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
	};

})
