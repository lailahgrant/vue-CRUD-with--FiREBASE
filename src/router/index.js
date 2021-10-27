import { createRouter, createWebHistory } from "vue-router";
import Create from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import View from '@/views/View.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

//1. need a function that executes every  time navigation to the route starts,
// checks the user and then directs them as necessary. 
//use  a "beforeEach" route  guard
//2. the first time route is hit, user.value will always be null bse Frebase hasn't had the chance to fully initiaalize yet :--
///this means 
import { user } from '@/firebase'


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
router.beforeEach((to, _, next) => {
  if (!to.matched.some(record => record.meta.public) && !user.value) {
    return next("/login");
  }

  next();

});


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
