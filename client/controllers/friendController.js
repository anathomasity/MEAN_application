myApp.controller('friendController', function($scope, $location, $cookies, friendsFactory){

	console.log('I am able to load my friendController');

	friendsFactory.getFriend(friendId, function(data){
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
	}

})
