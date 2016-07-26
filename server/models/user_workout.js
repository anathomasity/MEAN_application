var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User_workoutschema = new mongoose.Schema({
	act_time: Number,
	_user: [{type: Schema.Types.ObjectId, ref: 'user'}],
	_workout: [{type: Schema.Types.ObjectId, ref: 'workout'}],
},{timestamps:true});
mongoose.model('user_workout', User_workoutschema);
