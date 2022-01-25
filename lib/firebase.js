import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, QueryConstraint } from 'firebase/firestore';
import { doc, getDoc, setDoc, collection, getDocs, where, query, deleteField } from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import { getAuth, updateProfile, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5sGRKud_QOHSTHBGldU6i3TWMHvci724",
    authDomain: "blogify-e960d.firebaseapp.com",
    projectId: "blogify-e960d",
    storageBucket: "blogify-e960d.appspot.com",
    messagingSenderId: "437498983559",
    appId: "1:437498983559:web:903bd2bc9f3e3cbda67422",
    measurementId: "G-9TL4ME75T4"
};

// Initialize App

const firebaseApp = initializeApp(firebaseConfig);
// Initialize other products

export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()

// Handle Sign in with Google
export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export const createUserDocument = async (user, additionalData) => {
    if (!user) return

    const { uid } = user
    const userRef = doc(db, 'users', uid)
    const snapshot = await getDoc(userRef)
    if (!snapshot.exists()) {
        const createdAt = new Date().getTime()
        try {
            await setDoc(userRef, {
                createdAt,
                uid,
                avatarURL: 'https://firebasestorage.googleapis.com/v0/b/blogify-e960d.appspot.com/o/init%2Fdefault%20avt%2Fdefault.jpg?alt=media&token=66d59f79-31d6-4c5b-b943-e505465c3673',
                ...additionalData
            }).then(() => {
                return true
            })
        } catch (err) {
            console.log(err)
        }
    } else {
        return
    }
}

export const checkUniqueUsername = async (username) => {
    if (!username) return
    let check = false
    const userCollection = collection(db, 'users')
    const userQuery = query(userCollection, where('username', '==', username))
    await getDocs(userQuery).then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            check = true
        }
    })
    return check
}

export const getTargetUserUID = async (username) => {
    if (!username) return
    let uid = null
    const userCollectionRef = collection(db, 'users');
    const queryUserToBeDisplayed = query(userCollectionRef, where("username", "==", username))
    await getDocs(queryUserToBeDisplayed).then((querySnapshot) => {
        if (querySnapshot.size === 1) {
            querySnapshot.forEach((snapshot) => {
                const data = snapshot.data()
                uid = data.uid
            })
        }
    })
    return uid
}

export const getTargetUsername = async (uid) => {
    let username = null
    if (!uid || uid.includes('/')) return username
    const userRef = doc(db, 'users', uid)
    await getDoc(userRef).then((snapshot) => {
        const data = snapshot.data()
        if (data) {
            username = data.username
        }
    })
    return username
}

export const getTargetUserAvt = async (uid) => {
    let url = null
    if (!uid || uid.includes('/')) return url
    const userRef = doc(db, 'users', uid)
    await getDoc(userRef).then((snapshot) => {
        const data = snapshot.data()
        if (data) {
            url = data.avatarURL
        }
    })
    return url
}

export const uploadUserAvatar = async (user, file) => {
    if (!user) {
        return
    }
    // Set up file collection
    const fileCollection = 'avatars'

    // Get user data
    const { uid } = user
    const userRef = doc(db, "users", uid)
    const userSnap = await getDoc(userRef)

    // Get user username
    const userName = userSnap.data().username
    const fileName = file.name

    // Set up
    const pathToFile = `users/${userName}/${fileCollection}/${fileName}`
    const fileRef = ref(storage, pathToFile)

    // Upload the file
    await uploadBytes(fileRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
    })
    // Update the avatar url in the database
    getDownloadURL(ref(storage, pathToFile))
        .then((url) => {
            updateProfile(user, {
                photoURL: url
            }).then(() => {
                console.log("Profile updated")
                setDoc(userRef, { avatarURL: url }, { merge: true })
                    .then(() => {
                        console.log("Successfully uploaded")
                        window.location.reload()
                    }).catch(err => console.log(err))
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

export default firebaseApp

