  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyAkguvynRc69RZugLJjan0kVCE18WSeNms",
      authDomain: "gpt-auth0.firebaseapp.com",
      projectId: "gpt-auth0",
      storageBucket: "gpt-auth0.appspot.com",
      messagingSenderId: "927881546072",
      appId: "1:927881546072:web:8b508be9bba26b94f4fd2d",
      measurementId: "G-X1TWM94QSR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  // get data from the html
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmPass = document.getElementById("confirmPass");

  // making on function for storing data
  window.signup = function(e) {
      e.preventDefault();
      var obj = {
          email: email.value,
          password: password.value,
          confirmPass: confirmPass.value,
      }
      createUserWithEmailAndPassword(auth, obj.email.object.password)
          .then(function(success) {
              alert("Signup Successfully")
          })
          .catch(function(error) {
              alert("error" + err)
          })
      console.log(obj)
  };