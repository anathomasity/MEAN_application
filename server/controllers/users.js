var mongoose = require('mongoose');
var User = mongoose.model('user');
var Workout = mongoose.model('workout');

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

		// getUsers: function(req, res){
		// 	console.log("user_id on getUsers: ", req.params.id);
		// 	User.find({$and:[{_id:{$ne:req.params.id}}, {_id:}], function(err, curr){
		// 		if(err){
		// 			console.log("there's an error: ", err);
		// 		} else {
		// 			console.log("Got'em: ", curr);
		// 			res.json(curr);
		// 		}
		// 	})
		// },

		getUsers: function(req, res){
			console.log("user_id on getUsers: ", req.params.id);
			User.find({_id:{$ne:req.params.id}}, function(err, curr){
				if(err){
					console.log("there's an error: ", err);
				} else {
					console.log("Got'em: ", curr);
					res.json(curr);
				}
			})
		},


		// getUsers: function(req, res){
		// 	User.findOne({_id: req.params.id}, function(err, curr_user){
		// 		console.log(curr_user, "this is req params curr_users");
		// 		if(err){
		// 			console.log('error finding one curr_user getUsers method usersController backend', err);
		// 		}
		// 		else{
		// 			console.log('this is the curr_user getUsers method usersController backend', curr_user);
		// 			User.find({$and:[{_id:{$nin:curr_user._friends}}, {_id:req.params.curr_user}], function(err, users){
		// 				if (err){
		// 					console.log("this is the err when finding user NOT in MY obj or NOT MY id", err);
		// 				}
		// 				else {
		// 					console.log("found a user that is NOT in my friend obj and NOT me");
		// 					res.json(users);
		// 				}
		// 			}
		//
		// 			})
		// 		}
		// 	})
		// },

		// getUsers: function(req, res){
		// 	User.findOne({_id:req.params.id}, function(err, curr_user){
		// 		if(err){
		// 			console.log('this is the error in the backend curr_user controller for getUsers method', err);
		// 		}
		// 		else {
						// User.find({$and:[{_id:{$nin:curr_user._friends}}, {_id:req.params.id}], function(err, users)
						// {
						// 	if(err){
		// 						console.log('this is the error in the backend users controller for getUsers method', err);
		// 					}
		// 					else {
		// 						res.json(users);
		// 					}
		// 				}
		// 			})
		// 		}
		// }),

		addFriend: function(req, res){
			console.log(req.params.id, 'this is the req.params.id for addfriend method in backend users controller');
			console.log(req.params.curUserid, "this is the curUserid for addfriend method in backedn usersController");
			User.findOne({_id: req.params.curUserid}, function(err,myUser) {
				console.log(myUser, 'THIS IS THE FRIEND in find_CURuser');
				if(err){
					console.log('coudlnt find user in DB', err);
				}
				else {
					console.log('adding the friend id to user obj');
					myUser._friends.push(req.params.id);
					console.log('this is the updated user obj ', myUser);
					User.findOne({_id: req.params.id}, function(err, friend){
						if(err){
							console.log('there was an error here');
						} else {
							console.log('adding the user id to the friend obj');
							friend._friends.push(req.params.curUserid);
							friend.save(function(err, result){
								if (err){
									console.log('this is an err saving friend', err);
								} else{
									myUser.save(function(err, result){
										if(err){
											console.log('this is an err saving myUser', err);
										} else{
											console.log('saved myUser to DB!');
											res.json(myUser);
										}
									})
								}
							})
							console.log('this is the updated user obj ', friend);
						}
					})
				}
			})
		},

		// var find_friend = User.findOne({_id: req.params.id}, function(err,friend) {
		// 	console.log(friend, 'THIS IS THE FRIEND in find_friend');
		// 	if(err){
		// 		console.log('coudlnt find user in DB', err);
		// 	}
		// 	else {
		// 		console.log('this is friend in friend_freidn', friend);
		// 		res.json(friend);
		// 	}
		// })
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
			User.findOne({_id: req.params.user_id})
			.populate('_workouts')
			.exec(function(err, result) {
				if(err){
					console.log("couldnt populate user's workouts", err);
				}
				else{
					console.log('users workouts: ', result._workouts);
					res.json(result._workouts);
				}

			  });
		},

		getWorkout: function(req, res){
			Workout.find({_id: req.params.id}, function(err, workout){
				if(err){
					console.log(err);
				} else {
					res.json(workout);
				}
			})
		},

		addWorkoutToUser: function(req,res){
			User.findOne({_id: req.body.userId}, function(err, user) {
				console.log(user)
				if(err){console.log(err);}
				else{
					console.log('THIS IS THE WRKOUT', req.body.workout);
					user._workouts.push(req.body.workout);
					user.save(function(error,result){
						if(error){console.log('error saving workout into user');}
						else{
							console.log('updated user', result);
							res.json(result);
						}
					})
				}
			})
		},
		getFriend: function(req,res){
			User.findOne({_id: req.params.id})
			.populate('_workouts')
			.exec(function(err, result) {
				if(err){
					console.log("couldnt populate friends's workouts", err);
				}
				else{
					console.log('friends workouts: ', result);
					res.json(result);
				}

			  });
		},


		getFriends: function(req,res) {
			User.findOne({_id: req.params.id}).populate('_friends').exec(function(err, user){
				if(err){return err}
				console.log('THIS ARE THE FRIENDS:', user._friends)
				res.json(user._friends)
			})
		}


	}
})();
