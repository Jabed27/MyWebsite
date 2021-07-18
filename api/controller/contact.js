const { json } = require('body-parser');
const ContactModel = require('../model/contactmodel')

const PostContactInfo = (req,res,next)=>{
    
    //const username=req.body.name;
    console.log("controller theke"+req.body);
    const useremail=req.body.email;
    const message=req.body.msg;
    const subject = req.body.subject;
    console.log('useremail from controller'+useremail);
    console.log('subject from controller'+subject);
   /* var contactmodel=new ContactModel.ContactModel();
    //after storing to the firebase than it will store to the server
    contactmodel.storeUserData(req.body.name,req.body.email,req.body.msg,res).then((uid)=>{
        console.log(uid);
        contactmodel.storeuserDataToServer(uid,username,useremail,message);
        res.status(200).json({
            message:"Contact message store successfully",
            
        })

    });*/
    ContactModel.sendMail(useremail,subject,message);
    res.status(200).json({
        message:"Contact message store successfully",
        
    })
    
}
module.exports = {
    PostContactInfo,
}