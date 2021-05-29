import firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDom6-HevSkTp6ytOU_1a3Tsn2oJfH_htA",
    authDomain: "sharjeel-portfolio.firebaseapp.com",
    databaseURL: "https://sharjeel-portfolio-default-rtdb.firebaseio.com",
    projectId: "sharjeel-portfolio",
    storageBucket: "sharjeel-portfolio.appspot.com",
    messagingSenderId: "157257454241",
    appId: "1:157257454241:web:a389005938833247d116e0",
    measurementId: "G-KCF5LL4YTK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;