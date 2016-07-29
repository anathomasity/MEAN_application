myApp.factory('friendsFactory', function($http){

	var users = []

	var friends = []

	var factory = {}

	factory.getFriends = function(callback){
		// later we will have to pass the loggedIn user's id in the url
		console.log('got to the GETFRIENDS factory in the getFriends method');
		$http.get('/users/friends').then(function(data){
			callback(data.data);
		})
	}




	// LINE 21 WILL GO INSTEAD OF LINE 22, AND ALSO REMOVE VAR FID AND ADD FRIENDID TO THE URL
	// factory.getFriend = function(friendId, callback) {
	factory.getFriend = function(callback) {
		var fid = '579a3359de9afb3c32574733';
		console.log('got to the getFriend factory in the getFriend method');
		// THIS NEEDS TO GET CHANGED TO friendId LATER
		$http.get('/friend/' + fid ).then(function(data){
			console.log('FACTORY. WHATS BACK:', data, data.data);
			callback(data.data);
		});
	}

	factory.getUsers = function(current_user, callback){
		$http.get('/users/'+current_user).then(function(data){
			users = data.data;
			callback(data.data);
		});
	}

	factory.addFriend = function(userId, callback) {
		console.log('got to the addfriend factory');
		$http.get('/users/' + userId).then(function(data){
			callback(data.data);
		})
	}

	return factory;
})
