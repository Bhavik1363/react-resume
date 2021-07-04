import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAVDbFbseogykJj5blTBztkwnq8S452CRY",
    authDomain: "resume-7ce5a.firebaseapp.com",
    projectId: "resume-7ce5a",
    storageBucket: "resume-7ce5a.appspot.com",
    messagingSenderId: "326191965912",
    appId: "1:326191965912:web:ad4e38284a21c870df19ad",
    measurementId: "G-WBBSMVYCZ0"
}

firebase.initializeApp(firebaseConfig)

export default firebase