const path = require('path');

module.exports = (app) => {
    // Read Notes
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname + '/../database/db.json'));
    })
    // Add Notes
    app.post('/api/notes', (req, res) => {

    })
};
  