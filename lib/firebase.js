import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD5sGRKud_QOHSTHBGldU6i3TWMHvci724",
    authDomain: "blogify-e960d.firebaseapp.com",
    projectId: "blogify-e960d",
    storageBucket: "blogify-e960d.appspot.com",
    messagingSenderId: "437498983559",
    appId: "1:437498983559:web:903bd2bc9f3e3cbda67422",
    measurementId: "G-9TL4ME75T4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()

