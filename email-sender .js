var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bilel.mh1997@gmail.com',
    pass: 'Bakl551907'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'haifahaithem3@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});