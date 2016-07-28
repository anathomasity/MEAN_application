var mongoose = require('mongoose');
var User = mongoose.model('user');
var Workout = mongoose.model('workout');
var UserWorkout = mongoose.model('user_workout');

module.exports = (function() {
	return {
		login: function(req, res){
			User.findOne({
            email: req.body.email
        }, function(err, data) {
            if (err) {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            } else if (data && data.validPassword(req.body.password)) {
                res.json({
                    _id: data._id,
                    first_name: data.first_name,
                    last_name: data.last_name
                });
            } else {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            }
        })
		},

		register: function(req, res){
			var user = new User(req.body);
        user.save(function(err, newuser) {
            if (err){
              res.json(err);
            }
            else{
            res.json({
                _id: newuser._id,
                first_name: newuser.first_name,
                last_name: newuser.last_name
            });
          }
        });
		},

		getUsers: function(req, res){
			User.find({_id:{$ne:req.params.id}}, function(err, users){
				if(err){
					console.log('this is the error in the backend users controller for getUsers method', err);
				} else {
					res.json(users);
				}
			})
		},

		addFriend: function(req, res){
			var current_user = $cookies.get('logged_user');
			console.log("this is the current user from the cookie in the backend users controller in addfriend method", current_user);
			console.log(req.params.id, 'this is the req.params.id for addfriend method in backend users controller')
			var find_friend = User.findOne({_id: req.params.id}, function(err,friend) {
				console.log(friend, 'THIS IS THE FRIEND');
				if(err){
					console.log('coudlnt find user in DB', err);
				}
				else {

				}
				if (find_friend){
					find_friend._friends.push(req.params)
				}
			})

		},

		// user.save(function(erro, result){
		// 	if(erro){
		// 		console.log('couldnt save user', erro);
		// 	}
		// 	else {
		// 		console.log('updated user', result);
		// 		res.json(result);
		// 	}
		// })

		getWorkouts: function(req, res){
			console.log(req.params.type, "this is req params type");
				console.log(req.params.level, "this is req params level");
			Workout.find({$and:[
				{level: req.params.level},
				{type: req.params.type}
			]}, function(err, result){
				if(err){
					console.log('couldnt fund workouts in db from getWorkouts in users controller backend', err);
				}
				else{
					console.log(req.params.type, "this is req params type");
					console.log(req.params.level, "this is req params level");
					console.log('foudn workouts in the getWorkouts method users backend controller', result);
					res.json(result);
				}
			})

		},

		getAllWorkouts: function(req, res){
			console.log(req.params.type, "this is req params type");
				console.log(req.params.level, "this is req params level");
			Workout.find({}, function(err, result){
				if(err){
					console.log('couldnt fund workouts in db from getWorkouts in users controller backend', err);
				}
				else{
					console.log(req.params.type, "this is req params type");
					console.log(req.params.level, "this is req params level");
					console.log('foudn workouts in the getWorkouts method users backend controller', result);
					res.json(result);
				}
			})

		},

		getUserWorkouts: function(req, res){
			UserWorkout.find({})
			 //.populate('_user')
			 .exec(function(err, result) {  
				if(err){
					console.log('couldnt fund workouts in db from getWorkouts in users controller backend', err);
				}
				else{
					console.log('foudn workouts in the myWorkouts method users backend controller', result);
					res.json(result);
				}       
			     
			  }); 

		},

		myWorkouts: function(req, res){
			UserWorkout.find()
			 //.populate('_workout','description')
			 .populate('_user',{"_id":req.params.user_id})
			 .populate('_workout')
			 .exec(function(err, result) {  
				if(err){
					console.log('couldnt fund workouts in db from getWorkouts in users controller backend', err);
				}
				else{
					console.log('foudn workouts in the myWorkouts method users backend controller', result);
					res.json(result);
				}       
			     
			  }); 

		}


		getWorkout: function(req, res){
			Workout.find({_id: req.params.id}, function(err, workout){
				if(err){
					console.log(err);
				} else {
					res.json(workout);
				}
			})
		},


		// getFriends: function(req,res) {
		// 	User.findOne({first_name: 'Neha'}).populate('_friends').exec(function(err, user){
		// 		if(err){return err}
		// 		console.log('THIS ARE THE FRIENDS:', user._friends)
		// 		res.json(user._friends)
		// 	})
		// }


	}
})();
