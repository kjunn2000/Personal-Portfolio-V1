const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
// const sendGrid = require('@sendgrid/mail');
const nodemailer = require('nodemailer');

const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});


app.post('/api/email', (req, res, next) => {
    console.log(req.body);
    // // sendGrid.setApiKey('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');
    const transporter = nodemailer.createTransport({
        service: 'gmail' ,
         auth: {
           user:process.env.EMAIL_USER, 
           pass:process.env.EMAIL_PASS 
         }
       });
    const text = "Name: "+req.body.name+"\n"+"Email: "+req.body.email+"\n"+"Message: "+req.body.message
    const msg = {               
        to: 'hunterjun2000@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: text
    }


    console.log(msg);

    transporter.sendMail(msg,(err,result)=>{
        if(err){
            console.log(err);
            return false ; 
        }
        console.log(result);
    })

    // sendGrid.send(msg)
    //     .then(result => {

    //         console.log("Successful sent Email");

    //         res.status(200).json({
    //             success: true
    //         });

    //     })
    //     .catch(err => {

    //         console.log('error: ', err);
    //         res.status(401).json({
    //             success: false
    //         });

    //     });
});
app.listen(3030, '0.0.0.0');



