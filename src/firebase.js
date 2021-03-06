// import  firebase from 'firebase/app'
import { initializeApp } from "firebase/app"
import {getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc, query} from "firebase/firestore/lite"
import { ref, onUnmounted } from 'vue'
import "firebase/auth"
import { getAuth, signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithCredential } from "firebase/auth";

const config = {
        apiKey: "AIzaSyADgGKw5HIZjayWSY67nZXjMKX6xhvs4U8",
        authDomain: "vue-crud-1b171.firebaseapp.com",
        projectId: "vue-crud-1b171",
        storageBucket: "vue-crud-1b171.appspot.com",
        messagingSenderId: "734742842355",
        appId: "1:734742842355:web:adb7136333e26343162086",
        measurementId: "G-K3LWRJCLFJ"
}

// const firebaseApp = initializeApp(config)
initializeApp(config)


const db = getFirestore()
const usersCollection = collection(db,'/users')

 //===Functions for each of the CRUD operations

//createUser fn to add users to the users collection
export const createUser = user => {
    const db = getFirestore();
    const usersCollection = doc(db, `users/${user.email}`);
//     const usersCollection = doc(db, 'users/user')
    console.log(user)
    return setDoc(usersCollection, user);
}

// 
//getUser fn, accepts  user's  id and return the documentation if it exists
export const getUser = async id => {
    const docRef = doc(db, `/users/${id}`);
    const user = await getDoc(docRef);
    return user.exists ? user.data() : null
}

// //update fn
export const updateUser = (id, user) => {
    const docRef = doc(db, `/users/${id}`);
    return  setDoc(docRef, user)
}

// //delete fn
export const deleteUser = id => {
    const docRef = doc(db, `/users/${id}`);
    ///  add  an alert, then page refresh after an alert
    const r = alert(`Are you sure you want to delete?`)
    // if (r == true) {
    //     this.$router.go()
    // }
    return deleteDoc(docRef)
}

// //create a composition hook that will return the ref to an array of users from  the database
// //to  do it we'll
// //add a listener on the usersCollection that it updates whenever changes in the usersCollection  are  detected
// //creating this  listener will return a cleanup fn that will call onunMounted
export const useLoadUsers = () => {
    const users = ref([]);
    // const userQuery = query(usersCollection)
    getDocs(usersCollection).then(snapshot => {
        users.value = snapshot.docs.map(doc => ({  id: doc.id, ...doc.data() }))
    })

    // const close = usersCollection.onSnapshot(snapshot => {
    //     users.value = snapshot.docs.map(doc => ({  id: doc.id, ...doc.data() }))
    // })
    onUnmounted(close)
    return users
}


// //* AUTHENTICTION */

// will be used with the route guard
export const initialised = ref(false)

export const user = ref(null);

const authent = getAuth();

authent.onAuthStateChanged((u) => {
    user.value = u;
    initialised.value = true
});

//  /** logout */
export async function logout() {
    await authent.signOut();                                             
}

// * Signin with Google* */
// const provider = new GoogleAuthProvider();
// export async function google() {
    ///get currently ssiggned-in usser by using currentUseer property
      // if the user isn''t signed-in, currentUseer is  null
    //const theUser = authent.currentUser
    
    // await signInWithPopup(new GoogleAuthProvider());
   /*  signInWithPopup(authent, provider)
.then((result) => { */
    // This gives you a Google Access Token. You can use it to access the Google API.
   /*  const token = credential.accessToken;
    const credential = GoogleAuthProvider.credentialFromResult(result); */
    
       /*  signInWithCredential(credential).then((userCrede) => {
            console.log(userCrede)
    })
     */
    // The signed-in user info.
      /* console.log(result)
      console.log(`Display name is ${displayName}`) */

      //if (theUser !== null) {
          //theUser object has basic properties such as display name, email, etc
            /* const displayName = token.theUser.displayName
            const email = user.email;
          const photoURL = user.photoURL
          console.log(`Display name is ${displayName}`); */

  
      //}

    // ...
  ///}).catch((error) => {
    // Handle Errors here.c
    /* const errorCode = error.code;
    const errorMessage = error.message; */
    // The email of the user's account used.
    ///const email = error.email;
    // The AuthCredential type that was used.
    ///const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  ///});
//     return {
//     email,
//     displayName,
//     photoURL
// }


//} 

//Signin
    const provider = new GoogleAuthProvider();

    export async function google() {
        
    }


/* export async function google() {
    signInWithPopup(authent, provider).then(async(result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken;
        let crd=  await signInWithCredential(credential)
        console.log(result)
        console.log(crd)
        })
    } */


///show  details
    //  SHOW USER  DETAILS



//  ///** Login**/
export async function useLogin(){
    const email = ref("");
    const password = ref("");

    async function login() {
        //     const resp = await authent.signInWithEmailAndPassword(
        //         email.value,
        //         password.value
        //     );

        //     if(!resp.user) throw Error("User not Found !!!");

        //     user.value = resp.user;

        // }

        signInWithEmailAndPassword(authent, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return {
        email, 
        password,
        login,
    }

}


















