require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const contactRoutes = require('./routes/contactRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

app.use(bodyParser.json()); // parse form inputs into json
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

htmlRoutes(app);
contactRoutes(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})