var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Userschema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	_friends: [{type: Schema.Types.ObjectId, ref: 'user'}],
},{timestamps:true});
mongoose.model('user', Userschema);
