const path = require('path');
const noteData = require('../db/db.json');
const express = require('express');
const fs = require('fs');
module.exports = (app) => {
    app.use(express.static(__dirname + '/../db/'));
    // Read Notes
    app.get('/api/notes', (req, res) => {
        res.json(noteData);
    });
    app.get('/api/notes/:id', (req, res) => res.json(noteData));
    
    // Add Note
    app.post('/api/notes', (req, res) => {
        res.send('Got a POST request');
        fs.readFile('./db/db.json',function(err, content){
            noteData.push(req.body);
            var notes = JSON.parse(content);
            notes.push(req.body);
            if(err) {
                return console.log(err);
            }
            console.log(notes);
            fs.writeFile('./db/db.json', JSON.stringify(notes), function(err, data) {
                console.log(data);
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
        })
        res.json(true);
    })

    // Delete Note
    app.delete('/api/notes/:id', (req, res) => {
        res.send('Got a delete request');
        const note = req.body
        console.log(note);
        console.log(res);
        res.json(true);
    })
};
  