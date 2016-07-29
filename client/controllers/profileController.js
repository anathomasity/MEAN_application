myApp.controller('profileController', function($scope, $cookies, $location, $anchorScroll, workoutsFactory,usersFactory){

	// Here is where we are creating indexController.
	// You have to make sure that our index controller matches the name
	// that we pass in, in our router.
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	var current_user = $cookies.get('logged_user');
  	if(!current_user){
      	$location.url('/')
  	}

    usersFactory.myWorkouts( $cookies.get('logged_user'),function(data){
    	$scope.myWorkouts = data; 
  	})

///////myWorkouts method for dashboard description

	console.log('I am able to load my profileController along with my profile partial');
	$scope.scrollTo=function(id){
		$location.hash(id);
		$anchorScroll();
	}
	//log out method
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
	// d.a({name: 'req.body.test', status: 'working'}, function(d){
	// 	console.log(d);
	// })
	// mongooseFactory.getMongooses(function(data){
	// 	console.log('this is data in indexController get mognooses', data);
	// 	$scope.mongooses = data;
	// })

	// $scope.createMongoose = function(){
	// 	console.log('createMongoose indexController', $scope.newMongoose);
	// 	mongooseFactory.addMongoose($scope.newMongoose, function(mongooseArray){
	// 		$scope.mongooses = mongooseArray;
	// 	})
	// }
})
