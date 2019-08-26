var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: 'kindly enter the name of user',
    },
    email: {
        type: String,
        required: 'kindly enter the email',
    },
    password: {
        type: String,
        required: 'kindly enter the password',
    },
});

module.exports = mongoose.model('User', UserSchema);