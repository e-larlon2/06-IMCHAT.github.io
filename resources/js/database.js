// HER LEGGER DU INN INFOEN DIN FRÅ FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyA0XpKBRZZ8sjFIMtCFj3srR3oYTvD1hVc",
    authDomain: "imchat-59439.firebaseapp.com",
    projectId: "imchat-59439",
    storageBucket: "imchat-59439.appspot.com",
    messagingSenderId: "1056229018939",
    appId: "1:1056229018939:web:ac37d090a0999d1ceb7b1e"
  };
///////////////////////////////////////////////////////////

/* Firebase config */
const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); 

// Henter info frå input-feltet name, og oppretter bruker i collection "users" 
function createUser() {
    const name = document.getElementById("name").value; 
    firebase.firestore().collection("users", "user").doc().set({
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