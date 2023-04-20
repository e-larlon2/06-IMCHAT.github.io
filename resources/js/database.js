// HER LEGGER DU INN INFOEN DIN FRÅ FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyB0rhX72Kv__d8j4bBHY6BUte4crfGmxfk",
    authDomain: "imchat-5101a.firebaseapp.com",
    projectId: "imchat-5101a",
    storageBucket: "imchat-5101a.appspot.com",
    messagingSenderId: "176522722962",
    appId: "1:176522722962:web:3b51f6123e5535b22d704b"
  };
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