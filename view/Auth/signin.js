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


// function signin(){
//     console.log('function signin')
//     const loginform = document.querySelector('#login-form');
   
  
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     console.log(email.value,password.value)
//         auth.signInWithEmailAndPassword(email,password).then(cred=>{
//             console.log(cred.user);
//             //reset the form
//             window.location.replace("/");alert("You are signed in!");
//         })
 
// } 
 