var express = require('express');
var nodemailer=require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/send',function(req,res,next){
  var transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
      user:'iqbalict39@gmail.com',
      pass:''
    }
  });
  var mailOptions={
    from:'jhon Doe <johndoe@outlook.com>',
    to:'iqbalict39@gmail.com',
    subject:'Website submission',
    text:'you have a new submission with the following details....Name: '+req.body.name+'Email:'+req.body.email+'Message'+req.body.message,
    html:'<p>You got a new submission with the following details..</p><ul><li>Name:'+req.body.name+'</li><li>Email:'+req.body.email+'</li><li>Message:'+req.body.message+'</li></ul>'
  };
  transporter.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error);
      res.redirect('/');
    }else {
      console.log('Message Sent:'+info.response);
      res.redirect('/');
    }
  });
});
module.exports = router;
