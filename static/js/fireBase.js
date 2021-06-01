var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCIevy37LU6cc5OyIjQ4_3HMxtGLcidFiY",
    authDomain: "auamdc.firebaseapp.com",
    projectId: "auamdc",
    storageBucket: "auamdc.appspot.com",
    messagingSenderId: "881321816310",
    appId: "1:881321816310:web:fe017b20a703dc1f937cd7",
    measurementId: "G-GHS9SNRPG6"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
