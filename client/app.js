var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
		.when('/',
		{
			controller: 'loginController',
			templateUrl: "partials/login.html"
		})
		.when('/dashboard',
		{
			controller: 'profileController',
			templateUrl: "partials/dashboard.html"
		})
		.when('/workout/:type',
		{
			controller: 'workoutController',
			templateUrl: "partials/workout.html"
		})
		.when('/start/:id',
		{
			controller: 'startWorkoutController',
			templateUrl: "partials/start.html"
		})


			// .when('/#section5', {
			// 	controller: "friendsController",
			// 	templateUrl: "partials/friends.html"
			// })
		.when('/friends/:id',
		{
			controller: 'friendController',
			templateUrl: "partials/show.html"
		})


	})
}());
