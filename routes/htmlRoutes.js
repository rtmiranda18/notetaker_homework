const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../pages/index.html'));
    })
    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname + '/../pages/notes.html'));
    })
};
  