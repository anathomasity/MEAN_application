myApp.controller('friendsController', function($scope, friendsFactory){

	console.log('I am able to load my friendsController');

	friendsFactory.getUsers(function(data){
		$scope.users = data;
	})

	$scope.addFriend = function(userId){
		console.log('ADD FRIEND FIRENDS controller');
		friendsFactory.addFriend(userId, function(data){
			console.log('GOt back from factory')
		})
	}
	// $scope.createMongoose = function(){
	// 	console.log('createMongoose indexController', $scope.newMongoose);
	// 	mongooseFactory.addMongoose($scope.newMongoose, function(mongooseArray){
	// 		$scope.mongooses = mongooseArray;
	// 	})
	// }
})