const express = require('express');
const error = require('./middleware/error');
const colors = require('colors');

const characterRouter = require('./characters/character-router');

const server = express();

server.use(express.json());

// API Routes
server.use('/api/characters', characterRouter);
server.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Super Mario API'
  });
});

// Error MiddleWare
server.use(error);

module.exports = server;
