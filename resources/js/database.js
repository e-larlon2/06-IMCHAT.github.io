// HER LEGGER DU INN INFOEN DIN FRÅ FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyBcZHr3QR-xLO7bw9suFkedp2rTzhmxoiM",
    authDomain: "imchat-bd8ff.firebaseapp.com",
    projectId: "imchat-bd8ff",
    storageBucket: "imchat-bd8ff.appspot.com",
    messagingSenderId: "1027558483065",
    appId: "1:1027558483065:web:3d4512b878da8b9ae420a8"
  };
///////////////////////////////////////////////////////////

/* Firebase config */
const db = firebaseApp.firestore();

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
