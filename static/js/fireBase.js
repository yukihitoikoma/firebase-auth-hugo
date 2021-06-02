var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCIevy37LU6cc5OyIjQ4_3HMxtGLcid●●",
    authDomain: "●●.firebaseapp.com",
    projectId: "●●",
    storageBucket: "●●.appspot.com",
    messagingSenderId: "8813218163●●",
    appId: "1:881321816310:web:fe017b20a703dc1f937●●",
    measurementId: "G-GHS9SNRP●●",
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
