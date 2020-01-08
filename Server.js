require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require("./auth/auth-router.js");
const postsRouter = require("./routes/post-router.js");
const typeRouter = require("./routes/type-router.js");
const timeRouter = require("./routes/time-router.js");

const server = express();
server.use(express.json());
// always set your Middleware under the use(express.json)

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/posts", postsRouter);
server.use("/api/type", typeRouter);
server.use("/api/time", timeRouter)
server.get('/', (req, res)=>{
    res.send(`<h1> 🔨 Server is up and running</h1> <img src="https://www.oh-i-see.com/blog/wp-content/uploads/2013/10/95732246sized.jpg" alt="Italian Trulli">`)
})

module.exports = server;