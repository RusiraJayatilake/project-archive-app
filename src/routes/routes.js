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

// Add
routes.post('/api/add', (req, res) =>{
    const {title, description, reference} = req.body;
    writeData({ title, description, reference })
    .then(() => {
        res.json({ message: 'Data added successfully' })
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    })
});

// Read
routes.get('/api/projects', (req, res) => {
    readData()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({ error: err.message });
    });
});

// Delete
routes.delete('/api/delete/:id', (req, res) =>{
    const { id } = req.params;     
    deleteData({ id })
    .then(() => {
        res.json({ message: 'Data deleted successfully' });
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    })
});

// Get Requests
routes.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
});

routes.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'table.html'))
});


module.exports = routes;