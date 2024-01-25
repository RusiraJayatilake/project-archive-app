const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = express.Router();

// Middleware
routes.use(express.static(path.join(__dirname, 'public')));
routes.use(express.json());
routes.use(bodyParser.json());

routes.get('/', (req, res) => {
    res.json('Application Running')
});

routes.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
});


module.exports = routes;