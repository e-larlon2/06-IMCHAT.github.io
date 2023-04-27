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

// Henter brukerdata fra database og sjekker uid mot session-objektet
function checkLogin() {
    // get username from post variable
    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    //console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email')
    console.log(email);
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.uid) {
        console.log(sessionStorage.getItem("uid"))
        } else {
            console.log("bruker ikke innlogget")
            window.location.href = "../../index.html"
        }
    } else {
        console.log("sesjonsobjekt ikke lagd")
    }

    //henter all data om brukeren (basert på "email"-variabelen)
    //sjekker uid fra session og fra databasen
    //dersom treff = HURRA, innlogget

}


