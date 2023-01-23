const jwt  = require('jsonwebtoken');
const dotenv =  require("dotenv");
dotenv.config();





const createJwtToken = async (user) => {
     
    return   jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
       
        
        
        
})
}

module.exports = {createJwtToken}