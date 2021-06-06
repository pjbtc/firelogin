import  * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDPCL-wlwoRuDLMdfEzBr2H_l-XenZjo18",
    authDomain: "firelogin-2d035.firebaseapp.com",
    firebaseUrl:"https://firelogin-2d035-default-rtdb.firebaseio.com",
    projectId: "firelogin-2d035",
    storageBucket: "firelogin-2d035.appspot.com",
    messagingSenderId: "498622624757",
    appId: "1:498622624757:web:12a6b364a96dbc696366bc"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
