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

// Henter info frå input-feltet name, og oppretter bruker i collection "users" 
function createUser() {
    const name = document.getElementById("name").value; 
    firebase.firestore().collection("users").doc().set({
            name: name
        })
        .then(function () {
           console.log("bruker opprettet");
        })
    .catch((e) => {
        alert(e.message)
        console.log(e.code); 
        console.log(e.message);
    });
}
// Logger inn bruker med epost og passord 

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value; 
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
        sessionStorage.setItem("uid", userCredentials.user.uid)
        window.location.href = "/resources/html/homepage.html?email=" + email;
     })
    .catch((error) => {
    console.error("Failed: " + error.message);      
  }) 
}

// Oppretter bruker med epost og passord 

function signUp() {
  const email = document.getElementById("new_email").value;
  const password = document.getElementById("new_password").value; 
  const name = document.getElementById("name").value; 

  auth.createUserWithEmailAndPassword(email, password)
  // Lagrer også brukeren i collection "users"
   .then((userCredentials) => {
      firebase.firestore().collection("users").doc().set({
          name: name, 
          email: email,
          userId: userCredentials.user.uid
      })
      .then(function () {
          window.location.href = "/resources/html/homepage.html?email=" + email; 
      })

      console.log(res.userCredentials)
  })
   
  .catch((err) => {
      alert(err.message)
      console.log(err.code); 
      console.log(err.message);
  });
  
}

