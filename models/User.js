const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    
    email: String,

    phone: String,
    
    password: String,

    avatar: String,

    createdAt: String,
    
    city: String,

    state: String,

    zipcode: String,

    message: String,
    
    
    
    
    
    
    
});

module.exports = mongoose.model('user', UserSchema);