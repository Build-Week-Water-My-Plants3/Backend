const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../routers/auth-router');
const plantsRouter = require('../routers/plants-router');
const userRouter = require('../routers/users-router');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req,res) => {
    res.status(200).json( 'Water My Plants' );
});

server.use('/api/auth', authRouter);
server.use('/api/plants', plantsRouter);
server.use('/api/users', userRouter);

module.exports = server
