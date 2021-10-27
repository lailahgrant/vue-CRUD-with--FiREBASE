import { createRouter, createWebHistory } from "vue-router";
import Create from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import View from '@/views/View.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

//1. need a function that executes every  time navigation to the route starts,
// checks the user and then directs them as necessary. 
//use  a "beforeEach" route  guard
//2. the first time route is hit, user.value will always be null bse Firebase hasn't had the chance to fully initiaalize yet :--
///this means the user will always get redirected to login even if they are  fully authenticated. 
// get around this by waiting for the  Firebase API to initialize ::---
//this is done by 2 edits,, one to the authentication composition Api file(firebase.js) and another to the route guard
//2  b) import a new reference "initialised" wc is  initially false,when  the auth  changes - set it to true. 
// Firebase will always fire  an onAuthStateChanged event as soon as the API is initialised. It does so with a null parameter if the user is unauthenticated, or a user object if they are.
//   /** Need to watch this value in the  route guard  **/
import { user,  initialised } from '@/firebase'


const routes = [
  {
    path: "/",
    name: "Create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component:Edit,
  },
  {
    path: "/view",
    name: "View",
    component:View
  },
  {
    path: "/login",
    name: "Login",
    component:Login
  },
  {
    path: "/dashboard",
    name: "/Dashboard",
    component: Dashboard
  },
];


// need a function that executes every  time navigation to the route starts,
// checks the user and then directs them as necessary. 
//use  a "beforeEach" route  guard
//   /** Need to watch this value in the  route guard  **/

// router.beforeEach((to, _, next) => {
  
//   if (initialised.value) {
//     if (!to.matched.some(record => record.meta.public) && !user.value) {
//     return next("/login");
//     }
    
//     next();

//   } else {
//     watch(
//       () => initialised.value,
//       (newValue) => {
//         if (newValue) {
//           if (!to.matched.some(record => record.meta.public) && !user.value) {
//             return next("/login")
//           }
//           next()
//         }
//       }
//     )
//   }

  

// });


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
