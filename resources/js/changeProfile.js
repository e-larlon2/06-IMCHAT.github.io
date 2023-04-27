///////////////////////////////////////////////////////////
// HER LEGGER DU INN INFOEN DIN FRÅ FIREBASE

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA0XpKBRZZ8sjFIMtCFj3srR3oYTvD1hVc",
    authDomain: "imchat-59439.firebaseapp.com",
    projectId: "imchat-59439",
    storageBucket: "imchat-59439.appspot.com",
    messagingSenderId: "1056229018939",
    appId: "1:1056229018939:web:ac37d090a0999d1ceb7b1e"
});
///////////////////////////////////////////////////////////

/* Firebase config */
const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); 


// ednre bruker med ny epost, navn og passord 

function updateProfile() {
  const email = document.getElementById("change_email").value;
  const password = document.getElementById("change_password").value; 
  const name = document.getElementById("change_name").value; 

  auth.createUserWithEmailAndPassword(email, password)
  // Lagrer også endringen i collection "users"
   .then((userCredentials) => {
      firebase.firestore().collection("users").doc().set({
          name: name, 
          email: email,
          userId: userCredentials.user.uid
      })
      .then(function () {
          alert("Profilen din er endret") 
      })

      console.log(res.userCredentials)
  })
   
  .catch((err) => {
      alert(err.message)
      console.log(err.code); 
      console.log(err.message);
  });
  
}

