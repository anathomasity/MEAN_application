myApp.factory('friendsFactory', function($http){

	var users = []

	var friends = []

	var factory = {}

	factory.getFriends = function(current_user,callback){
		// later we will have to pass the loggedIn user's id in the url
		console.log('got to the GETFRIENDS factory in the getFriends method');
		$http.get('/users/friends/' + current_user).then(function(data){
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
		console.log("current_user on factory", current_user);
		$http.get('/users/'+current_user).then(function(data){
			users = data.data;
			callback(data.data);
		});
	}

	factory.addFriend = function(userId, current_user, callback) {
		console.log('got to the addfriend factory');
		console.log("this is the userID coming from friendsController", userId);
		console.log("this is the current_user coming from friendsController", current_user);
		$http.get('/addFriend/' + userId + '/' + current_user).then(function(data){
			callback(data.data);
		})
	}

	return factory;
})
