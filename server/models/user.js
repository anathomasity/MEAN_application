var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var Userschema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	_friends: [{type: Schema.Types.ObjectId, ref: 'user'}],
},{timestamps:true});

Userschema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
Userschema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

Userschema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

mongoose.model('user', Userschema);
