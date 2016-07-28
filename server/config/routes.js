var users = require('./../controllers/users.js');
var mongoose = require('mongoose');

module.exports = function(app){

	app.get('/users', function(req, res){
		console.log(' made it to my /users get route');
		users.getUsers(req, res);
	})

	app.get('/workouts/:level/:type', function(req, res){
		console.log(' made it to the /workouts/:level/:type get route');
		users.getWorkouts(req, res);
	})

	// app.get('/users/friends', function(req,res) {
	// 	console.log('got to get friends route');
	// 	users.getFriends(req,res);
	// })
	//
	// app.get('/users/:id', function(req,res) {
	// 	console.log('got to the addfriend route');
	// 	users.addFriend(req,res);
	// })

	app.get('/workout/:id', function(req,res){
		console.log('got to get workout route');
		users.getWorkout(req,res);
	})

	app.post('/login', function(req, res){
		console.log('got to the login route');
		users.login(req, res);
	})

  app.post('/register', function(req, res){
		console.log('got to the register route');
		users.register(req, res);
	})
}
