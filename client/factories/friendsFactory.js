myApp.factory('friendsFactory', function($http){

	var users = []

	var friends = []

	var factory = {}

	factory.getUsers = function(callback){
		$http.get('/users').then(function(data){
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