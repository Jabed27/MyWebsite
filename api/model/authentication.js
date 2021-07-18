const firebase = require('./FirebaseConnect');
const database = firebase.firestore();
const usersCollection =database.collection('users');
const bcrypt = require('bcrypt');
const { firestore } = require('../../../Disclose/api/model/FirebaseConnect');

class usermodel{
    //storing to the data base
  async StoreSingnUpUser(email,fname,lname,hash,userid){
   /* UserModel.AllUsersData[id]={
      'First_Name':firstname,
      'Last_Name':lastname,
      'Email':email,
      'Address':address,
      'NID':nid,  
  } ;*/
    //var uid = usersCollection.doc().id;
    //console.log(id);
    console.log(email);
    await usersCollection.doc(userid).set({
       
        email:email,
        fname:fname,
        lname:lname,
        password:hash
       
      })
     
      //return uid;
  }
}
module.exports ={
    usermodel,
  }