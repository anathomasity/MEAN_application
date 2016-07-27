var mongoose = require('mongoose');
var User = mongoose.model('user');

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
			User.find({}, function(err, users){
				if(err){
					console.log(err);
				} else {
					res.json(users);
				}
			})
		},

		addFriend: function(req, res){
			console.log(req.params.id)
			User.findOne({_id: req.params.id}, function(err,friend) {
				console.log(friend, 'THIS IS THE FRIEND')
				User.findOne({first_name: 'Neha'}, function(error, user){
				if(err){
					console.log('coudlnt find user in DB', err);
				} else {
					user._friends.push(friend);
					user.save(function(erro, result){
						if(erro){
							console.log('couldnt save user', erro);
						} else {
							console.log('updated user', result);
							res.json(result);
						}
					})
				}
				})
			})

		},

		getFriends: function(req,res) {
			User.findOne({first_name: 'Neha'}).populate('_friends').exec(function(err, user){
				if(err){return err}
				console.log('THIS ARE THE FRIENDS:', user._friends)
				res.json(user._friends)
			})
		}


		// getMongoose: function(req, res){
		// 	// this should probably be findOne isntead of find
		// 	mongooseDb.find({_id: req.params.id}, function(err, result){
		// 		if(err){
		// 			console.log("this is teh mongoose you are looking for", result);
		// 		} else {
		// 			console.log('this is our mongoose',result);
		// 			res.json(result);
		// 		}
		// 	})
		// },
		// updateMongoose: function(req, res){
		// 	mongooseDb.findOne({_id: req.params.id}, function(err, result){
		// 		if(err){
		// 			console.log('coudlnt find mongoose', err);
		// 		} else {
		// 			result.name = req.body.name;
		// 			result.weight = req.body.weight;
		// 			result.color = req.body.color;
		// 			result.save(function(err, result){
		// 				if(err){
		// 					console.log('couldnt save update mongoose', err);
		// 				} else {
		// 					console.log('foudn mongoose ', result);
		// 					res.json(result);
		// 				}
		// 			})
		// 		}
		// 	})
		// }
	}
})();
