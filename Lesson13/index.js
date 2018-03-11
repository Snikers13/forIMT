var nodemailer = require('nodemailer');

nodemailer.SMTP = {
    host: 'gmail.com', 
    port: 587,
    use_authentication: true, 
    user: 'for.anton.tretyak13@gmail.com', 
    pass: 'A0938162653'
};

var message = {
	sender: "sender@domain.com",
	to: 'for.anton.tretyak13@gmail.com',
	subject: '',
	html: '<h1>test</h1>',
};

     nodemailer.send_mail(message,   
      function(err) {   
        if (!err) { 
            console.log('Email send ...');
        } else console.log(sys.inspect(err));       
    });