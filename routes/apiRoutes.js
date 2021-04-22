const noteData = require('../database/db.json');

module.exports = (app) => {
    // Read Notes
    app.get('/api/notes', (req, res) => res.json(noteData));
    // Add Notes
    app.post('/api/notes', (req, res) => {
        res.send('Got a POST request');
        noteData.push(req.body);
        res.json(true);
    })
    app.delete('/api/notes/:id', (req, res) => {
        res.send('Got a delete request');
        console.log("receivedbyAPI");
        console.log(res);
        res.json(true);
    })
};
  