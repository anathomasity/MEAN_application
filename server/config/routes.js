var users = require('./../controllers/users.js')

module.exports = function(app){

	app.get('/users', function(req, res){
		console.log(' made it to my /users get route');
		users.getUsers(req, res);
	})

	app.get('/users/:id', function(req,res) {
		console.log('got to the addfriend route');
		users.addFriend(req,res);
	})
}