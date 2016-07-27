var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
		.when('/',
		{
			controller: 'loginController',
			templateUrl: "partials/login.html"
		})
			// .when('/dashboard',
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
				controller: 'friendController',
				templateUrl: "partials/show.html"
			})


	})
}());
