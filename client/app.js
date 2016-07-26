var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			// .when('/', 
			// {
			// 	controller: 'profileController',
			// 	templateUrl: "partials/index.html"
			// })
			// .when('/#section5', {
			// 	controller: "friendsController", 
			// 	templateUrl: "partials/friends.html"
			// })
			.when('/friends/:id', 
			{
				controller: 'friendsController', 
				templateUrl: "partials/show.html"
			})			
	})
}());