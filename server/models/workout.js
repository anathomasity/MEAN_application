var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Workoutschema = new mongoose.Schema({
	name: String,
	type: String,
	level: String,
	est_time: Number,
	repeat: String,
	description: Array,
},{timestamps:true});
mongoose.model('workout', Workoutschema);
