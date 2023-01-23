const express = require('express');
const nodemailer = require("nodemailer");
const {graphqlHTTP} = require('express-graphql');
const BodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors');
const dotenv =  require("dotenv");
const schema = require('./schema');
const connectDB = require('./db');

dotenv.config();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: ['authorization']
}
const app = express();
app.use(cors(corsOptions))
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/graphql',
 graphqlHTTP ({
    schema,
    graphiql:true,
    headerEditorEnabled: true
    
})
);

app.listen(process.env.PORT, () => {
    console.log(`App running on PORT ${process.env.PORT}`);

});
