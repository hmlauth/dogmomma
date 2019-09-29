const nodemailer = require('nodemailer');

module.exports = function(app) {

    app.post('/api/contact', (req, res) => {
        console.log('this works', req.body);
    
        nodemailer.createTestAccount(async (err, account) => {
            
            const htmlEmail = `
                <h3>Message from: ${req.body.name}</h3>
                <h4>Contact Details:</h4>
                <ul>
                    <li>Email: ${req.body.email}</li>
                    <li>Phone Number: ${req.body.phone}</li>
                    <li>Animal Name(s): ${req.body.animalName}</li>
                </ul>
                <h4>Message</h4>
                <p>${req.body.message}</p>
            `;
    
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth:  {
                    user: process.env.NODEMAILER_USER_EMAIL, 
                    pass: process.env.NODEMAILER_USER_PASSWORD
                }       
            });
    
            let mailOptions = {
                from: req.body.email, // sender address
                to: process.env.NODEMAILER_USER_EMAIL, // list of receivers
                replyTo: req.body.email,
                subject: 'MEGAPAWS INQUIRY', // Subject line
                html: htmlEmail // html body
            };
            console.log('mailOptions', mailOptions);
            let info = await transporter.sendMail(mailOptions);
        
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        })
    
    });
}