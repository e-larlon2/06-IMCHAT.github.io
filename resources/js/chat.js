/////// js fil til homepage

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

