const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { writeData, readData, deleteData } = require('../controllers/controllers');
const routes = express.Router();

// Middleware
routes.use(express.static(path.join(__dirname, '..', '..', 'public')));
routes.use(express.json());
routes.use(bodyParser.json());
routes.use(express.urlencoded({ extended: true }))

routes.post('/api/add', writeData);
routes.get('/api/projects', readData);
routes.delete('/api/delete/:id', deleteData);

// Get Requests
routes.get('/api/add', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
});

routes.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'table.html'))
});


module.exports = routes;