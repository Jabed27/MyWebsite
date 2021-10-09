var firebaseConfig = {
    apiKey: "AIzaSyAs9EsuTIwvopbAxDNpCbxvfXmk-lUEkx4",
    authDomain: "ownwebsite-62bf2.firebaseapp.com",
    projectId: "ownwebsite-62bf2",
    storageBucket: "ownwebsite-62bf2.appspot.com",
    messagingSenderId: "351965737654",
    appId: "1:351965737654:web:d9141819a1ca63f547ac17",
  };
firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();

  function signout(){
      auth.signOut();
      alert("you're signout!!");
      //window.location.replace("/signin");
  }