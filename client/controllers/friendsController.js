myApp.controller('friendsController', function($scope, $location, $cookies, friendsFactory){

	console.log('I am able to load my friendsController');

	friendsFactory.getUsers(function(data){
		$scope.users = data;
	})

	friendsFactory.getFriends(function(data){
		$scope.friends = data;
	})

	$scope.addFriend = function(userId){
		console.log('ADD FRIEND FIRENDS controller');
		friendsFactory.addFriend(userId, function(data){
			console.log('GOt back from factory')
		})
	}

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

	// $scope.createMongoose = function(){
	// 	console.log('createMongoose indexController', $scope.newMongoose);
	// 	mongooseFactory.addMongoose($scope.newMongoose, function(mongooseArray){
	// 		$scope.mongooses = mongooseArray;
	// 	})
	// }
})
