const bcrypt = require('bcrypt');
const userInfoModel = require('../model/authentication')
const PostuserInfoSignUp = (req,res,next)=>{
    const email=req.body.email;
    const f_name = req.body.Fname;
    const l_name = req.body.Lname;
    const password = req.body.password;
    const userid = req.body.userid;
    console.log('controller',password)
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            res.json({
                error:err,
            })
        }
        var signupuser = new userInfoModel.usermodel();
        signupuser.StoreSingnUpUser(email,f_name,l_name,hash,userid).then(()=>{
            
            res.status(200).json({
                message:"user sign up successfully",
                
            })
    
        }).catch(error => {
            console.error(error)
            res.status(404).json({
                message:'Data could not be stored due to  '+error.message,
            })
        });
        
    })
}
module.exports = {
    PostuserInfoSignUp,
    
}