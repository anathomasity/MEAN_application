myApp.controller('friendController', function($scope, friendsFactory){

	console.log('I am able to load my friendController');

	friendsFactory.getFriend(friendId, function(data){
		$scope.friend = data;
	})

})