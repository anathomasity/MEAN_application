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
			// .when('/mongoose/:id', 
			// {
			// 	controller: 'showController', 
			// 	templateUrl: "partials/show.html"
			// })			
	})
}());