/////// js fil til homepage

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

/////////////////////////////////////////////////////

function submitChat() {
    const input = document.getElementById("input").value;
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    console.log(input);
    document.getElementById("txt").innerHTML = (input);
    document.getElementById("time").innerHTML = h + ":" + m;

}

// Reference to the chat container
var chatContainer = document.getElementById("chat-container");

// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value;
    
    if (messageText.trim() !== "") {
        // Create a new document in the "messages" collection
        db.collection("messages").add({
            text: messageText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function(docRef) {
            console.log("Message sent with ID: ", docRef.id);
            messageInput.value = "";
        })
        .catch(function(error) {
            console.error("Error sending message: ", error);
        });
    }
}

// Function to display messages
function displayMessage(message) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message.text;
    chatContainer.appendChild(messageElement);
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    document.getElementById("time").innerHTML = h + ":" + m;
}

// Function to listen for new messages
db.collection("messages").orderBy("timestamp")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                var message = change.doc.data();
                displayMessage(message);
            }
        });
    });

