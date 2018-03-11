var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'for.anton.tretyak@gmail.com',
    pass: '**********'
  }
});

var mailOptions = {
  from: 'for.anton.tretyak@gmail.com',
  to: 'for.anton.tretyak@gmail.com, ltaisiya98@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h2>That was easy</h2>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});