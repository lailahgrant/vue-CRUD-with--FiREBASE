import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
        apiKey: "AIzaSyADgGKw5HIZjayWSY67nZXjMKX6xhvs4U8",
        authDomain: "vue-crud-1b171.firebaseapp.com",
        projectId: "vue-crud-1b171",
        storageBucket: "vue-crud-1b171.appspot.com",
        messagingSenderId: "734742842355",
        appId: "1:734742842355:web:adb7136333e26343162086",
        measurementId: "G-K3LWRJCLFJ"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')


//===Functions for each of the CRUD operations

//createUser fn to add users to the users collection
export const createUser = user => {
    return usersCollection.add(user)
}

//getUser fn, accepts  user's  id and return the documentation if it exists
export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

//update fn
export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

//delete fn
export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

//create a composition hook that will return the ref to an array of users from  the database
//to  do it we''ll
//add aa  listener on the usersCollection s that it updates whenever changes in   the usersColl  are  detected
//creating this  listener will return a cleanup fn that will call on unMounted
export const useLoadUsers = () => {
    
}
