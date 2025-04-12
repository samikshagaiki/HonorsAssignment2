// 16. Send an Email Using Nodemailer

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',       // replace with your email
    pass: 'your_app_password_here'      // replace with your app password
  }
});

const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Nodemailer Test',
  text: 'This is a test email sent from a Node.js app using Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error:', error);
  }
  console.log('Email sent:', info.response);
});