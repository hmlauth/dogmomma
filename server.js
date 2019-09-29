require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const contactRoutes = require('./routes/contactRoutes.js');

app.use(bodyParser.json()); // parse form inputs into json
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(__dirname + 'index.html'));

app.get('/', function(req, res){
    res.render('index.html');
  });

contactRoutes(app);

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})