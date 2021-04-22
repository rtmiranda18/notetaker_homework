const express = require('express');
const app = express();
const port = 3000;

bodyParser = require('body-parser');
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})