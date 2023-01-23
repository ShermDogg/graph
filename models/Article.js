const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    
    image: String,

    body: String,

    createdAt: String
    
    
    
    
    
    
    
    
    
    
});

module.exports = mongoose.model('article', ArticleSchema);