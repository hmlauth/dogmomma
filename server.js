require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json()); // parse form inputs into json
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/contact', (req, res) => {
    // console.log('this works', req.body);
    nodemailer.createTestAccount(async (err, account) => {
        
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ol>
                <li>${req.body.firstName} ${req.body.lastName}</li>
                <li>${req.body.email}</li>
            </ol>
            <h3>Message</h3>
            <p>${req.body.message}<p/>
            <h3>Needed Services</h3>
            <p>${req.body.checkedServices.join(', ')}<p/>
        `;

        let transporter = nodemailer.createTransport({
            host: `gmail`,
            port: 587,
            auth:  {
                user: process.env.NODEMAILER_USER_EMAIL, 
                pass: process.env.NODEMAILER_USER_PASSWORD
            }       
        });

        let mailOptions = {
            from: req.body.email, // sender address
            to: process.env.NODEMAILER_USER_EMAIL, // list of receivers
            replyTo: req.body.email,
            subject: 'DogMomma Inquiry', // Subject line
            html: htmlEmail // html body
        };

        let info = await transporter.sendMail({ mailOptions });
    
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    })

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})