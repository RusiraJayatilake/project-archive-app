const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { writeData, readData } = require('../controllers/controllers');
const routes = express.Router();

// Middleware
routes.use(express.static(path.join(__dirname, 'public')));
routes.use(express.json());
routes.use(bodyParser.json());
routes.use(express.urlencoded({ extended: true }))

routes.post('/', writeData);
routes.get('/projects', readData);

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
});

routes.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'table.html'))
});


module.exports = routes;