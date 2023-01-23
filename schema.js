const bcrypt = require('bcrypt');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment')
const { createJwtToken } = require ('./utils/auth');
const dotenv =  require("dotenv")
dotenv.config();