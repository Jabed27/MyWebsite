const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth ={
   auth:{
       api_key: 'a7d77d517ad553788c2db4dd5c40735a-29561299-cd10308a',
       domain:'sandboxa78b7a20981e488780ac8c6e8f12073c.mailgun.org'
   }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail=(email,subject,text)=>{
    const mailOption ={
        from: email,
        to: 'zobaidulislamjabed@gmail.com',
        subject: subject,
        text: text
     };
     transporter.sendMail(mailOption,function(err,data){
        if(err){
            console.log('Error Occures!');
        }else{
            console.log(' Msg sent!');
        }
    });
}

module.exports = {sendMail};
