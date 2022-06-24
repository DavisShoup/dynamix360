import firebase from "firebase/app";
import "firebase/auth";

const config = {
        apiKey: 'AIzaSyAFRL0yv8Yelz0WSF1PW3kjyyLYW8U4ATE',
        authDomain: 'dynamix360-officals.firebaseapp.com',
        projectId: 'dynamix360-officals',
        storageBucket: 'dynamix360-officals.appspot.com',
        messagingSenderId: '837478492447',
        appId: '1:837478492447:web:53a136555b8ec4d705682a',
        measurementId: 'G-RN5DEH5NW4'
      };
      
firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}


export { auth, login, logout }; 