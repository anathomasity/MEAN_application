require('./server/config/db.js');
//this config requirement comes from server.js

var mongoose = require('mongoose');
var usersdb = mongoose.model('user');
var workoutdb = mongoose.model('workout');
var userworkoutdb = mongoose.model('user_workout');
//// these requirement should be the same as users.js(controller)

list = [
	{
		name: "Beginning Core 1",
    type: 'Core',
    level: 'Beginner',
    est_time: 15,
    description: ['crunches - 60 sec', 'elbow plank - 60 sec'],
    },{timestamps:true}
	},

	{
		user_name: "Eden"
	},
	{
		user_name: "Niel"
	}
]

name: String,
type: String,
level: String,
est_time: Number,
description: String,
},{timestamps:true});

//user = new Userdb(data);

for(var i in list)  {
	Userdb.findOne({user_name: list[i].user_name}, function(err, user){
		console.log(user)
		if (user ==  null) {
			user = new Userdb(list[i]);
			user.save(function(err, result){
				if(err){
					console.log(err);
					console.log('Found this err while creating a new user ' err);
				} else {
					console.log('this is a new user created by seeding',result);

				}

			})
		}else{
			console.log("this data already exist")
		}

	})
}
