var firebaseConfig = {
    apiKey: "AIzaSyAs9EsuTIwvopbAxDNpCbxvfXmk-lUEkx4",
    authDomain: "ownwebsite-62bf2.firebaseapp.com",
    projectId: "ownwebsite-62bf2",
    storageBucket: "ownwebsite-62bf2.appspot.com",
    messagingSenderId: "351965737654",
    appId: "1:351965737654:web:d9141819a1ca63f547ac17",
    //measurementId: "G-79Y1RVNQNG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();


  async function signup(){
    var fname = document.getElementById("f_name").value;
    var lname = document.getElementById("l_name").value;
    var email = document.getElementById("emailAddress");
    var password = document.getElementById("password");
    console.log('signup',email.value);
    
    console.log('signup',fname)
    if(fname=="" ||lname ==""||email.value==""||password.value==""){
      alert("Fill out all the form!");
    }else{
        
        const promise =await auth.createUserWithEmailAndPassword(email.value,password.value);
        promise.catch(e=>alert(e.message));
        alert("registered!");
        console.log('Authentication done!!!')
    }
    
}

const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open(method,url);
      xhr.responseType = 'json'
      if(data){
          xhr.setRequestHeader('Content-Type','application/json');
      
      }
      xhr.onload = () =>{
          if (xhr.status >= 200 || xhr.status<=210) { 
            window.location.replace("/"),alert("You are signed up");
           } else { 
             alert(xhr.response)
           }
          resolve(xhr.response);
          console.log(xhr.response)
      };
      xhr.send(JSON.stringify(data));
  });
  //alert('contact successfully!')
  return promise;
  }

//window.location.replace("/signin"),alert("You are signed up");
const sendData=()=>{
    var fname = document.getElementById("f_name").value;
    var lname = document.getElementById("l_name").value;
    
    var email = document.getElementById("emailAddress").value;
    var password = document.getElementById("password").value;
    console.log("hi"+document.getElementById('f_name').value);
    console.log("hi"+document.getElementById('l_name').value);
    if(fname=="" ||lname ==""||email.value==""||password.value==""){
         alert('fill all the field please');
    }else{
        auth.onAuthStateChanged(function(user){
          if(user){
              console.log('senddata',user.uid);
            localStorage.setItem("First_Name",f_name);
            localStorage.setItem("Last_Name",l_name);
            localStorage.setItem("Email",email);
            localStorage.setItem("userid",user.uid)
            sendHttpRequest('POST','http://localhost:5000/mywebsite/api/auth/signup',{
            Fname:fname,
            Lname:lname,
            email:email,
            password:password,
            userid:user.uid,
            
        });
          }
        })
        
        
    }
    
  };


  async function signin(){
    console.log('inside signin')
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  console.log(email.value,password.value)
  const promise = auth.signInWithEmailAndPassword(email.value,password.value).then(()=>{
     //checking user is active or not
      auth.onAuthStateChanged(function(user){
          if(user){
              var email = user.email;
              alert("Active user "+email);
              //is signed in
              window.location.replace("/");alert("You are signed in!");
              
          }else{
              alert("No user");
              window.location.replace("/signup");
              //no user
          }
      })
  });
  
  promise.catch(e=>alert(e.message));
  //state change
  
 
}
  document.getElementById("register").addEventListener('click', e => {
      console.log('getdocid');
    e.preventDefault();
    signup();
    sendData();
  });