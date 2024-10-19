/*  // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
 
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";


 const firebaseConfig = {
   apiKey: "AIzaSyAk-I_4WCJBMrpzsTHtS2HYNtsmOXiCQAM",
   authDomain: "course-selection-96c11.firebaseapp.com",
   projectId: "course-selection-96c11",
   storageBucket: "course-selection-96c11.appspot.com",
   messagingSenderId: "523971162124",
   appId: "1:523971162124:web:2a3a821668e1982a25fe29",
   measurementId: "G-PYBSEKH1QT"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAnalytics(app);
//inputs 

const submit=document.getElementById("submit");

submit.addEventListener("click",function (event) {
event.preventDefault();
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating Account...");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);

  });
})


 */
