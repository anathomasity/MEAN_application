var users = require('./../controllers/users.js');
var mongoose = require('mongoose');

module.exports = function(app){

	app.get('/users/:id', function(req, res){
		console.log(' made it to my /users get route');
		users.getUsers(req, res);
	})
	app.get('/friend/:id', function(req,res) {
		console.log('got to the GETFRIEND route');
		users.getFriend(req,res);
	})
	// app.get('/users/friends', function(req,res) {
	// 	console.log('got to get friends route');
	// 	users.getFriends(req,res);
	// })

	app.get('/workouts/:level/:type', function(req, res){
		console.log(' made it to the /workouts/:level/:type get route');
		users.getWorkouts(req, res);
	})

	app.get('/workouts', function(req, res){
		console.log(' made it to the /workouts/:level/:type get route');
		users.getAllWorkouts(req, res);
	})

	app.get('/user_workouts', function(req, res){
		console.log(' made it to the /workouts/:level/:type get route');
		users.getUserWorkouts(req, res);
	})


///////dashboar description////
	app.get('/myWorkouts/:user_id', function(req, res){
		console.log(' made it to the getMYWORKOUTS route', req.params.user_id);
		users.myWorkouts(req, res);
	})

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

	app.post('/user_workouts', function(req,res) {
		// console.log('got to user_workouts route', req.body);
		users.addWorkoutToUser(req,res);
	})
}
