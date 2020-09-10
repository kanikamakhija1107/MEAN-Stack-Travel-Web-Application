var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

module.exports.get = (request, response) => {


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bhavya.pathak29@gmail.com',
            pass: 'bppp0605'
        }
    });

    var mailOptions = {
        from: 'bhavya.pathak29@gmail.com',
        to: request.params.email,
        subject: 'Welcome to Backpackers',
        text: 'You have been registered @ Backpackers!!!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};