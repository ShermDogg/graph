const mongoose = require('mongoose');


const dotenv =  require("dotenv");
dotenv.config();


const connectDB =  () => {

try {
     mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MONGO CONNECT')
} catch (error) {
console.log(err)
}

}

module.exports = connectDB