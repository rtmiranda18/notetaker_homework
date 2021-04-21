const path = require('path');
const express = require('express');

module.exports = (app) => {
    app.use(express.static(__dirname + '/../pages/assets/css'));

    app.use(express.static(__dirname + '/../pages/assets/js'));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../pages/index.html'));
    })
    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname + '/../pages/notes.html'));
    })
};
  