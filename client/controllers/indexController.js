myApp.controller('indexController', function($scope, $location, $cookies, mongooseFactory){

	// Here is where we are creating indexController.
	// You have to make sure that our index controller matches the name
	// that we pass in, in our router.
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	console.log('I am able to load my indexController along with my index partial');

	// d.a({name: 'req.body.test', status: 'working'}, function(d){
	// 	console.log(d);
	// })
	mongooseFactory.getMongooses(function(data){
		console.log('this is data in indexController get mognooses', data);
		$scope.mongooses = data;
	})

	$scope.createMongoose = function(){
		console.log('createMongoose indexController', $scope.newMongoose);
		mongooseFactory.addMongoose($scope.newMongoose, function(mongooseArray){
			$scope.mongooses = mongooseArray;
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
})
