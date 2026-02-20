import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcXx6k_yXyvhSBRbWrc5BmBj9qEhgXupA",
  authDomain: "first-database-ahp.firebaseapp.com",
  databaseURL: "https://first-database-ahp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-database-ahp",
  storageBucket: "first-database-ahp.firebasestorage.app",
  messagingSenderId: "967554982410",
  appId: "1:967554982410:web:43bd0de060c5af598135f3",
  measurementId: "G-YL5X0C0DTJ"
};

// Your web app's Firebase configuration
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const thingsRef = ref(database, "things")

// Page elements
const inputFieldEl = document.getElementById("input-field")
const pushButtonEl = document.getElementById("push-button")
const thingsEl = document.getElementById("things")

// Firebase functions
pushButtonEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value
  push(thingsRef, inputValue)
  inputFieldEl.value = ""
})

onValue(thingsRef, function(snapshot) {
    thingsEl.innerHTML = ""
  if (snapshot.exists()) {
    let things = Object.values(snapshot.val())
    thingsEl.innerHTML = ""
        
    for (let i = 0; i < things.length; i++) {
      thingsEl.innerHTML += `<li>${things[i]}</li>`   
    }   
  } else {
      thingsEl.innerHTML = "No things yet"
  }
})