const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json()); // parse form inputs into json
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/contact', (req, res) => {
    console.log('this works', req.body);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})