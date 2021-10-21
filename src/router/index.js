import { createRouter, createWebHistory } from "vue-router";
import Create from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'

const routes = [
  {
    path: "/",
    name: "Create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component:Edit
  },
  {
    path: "/view",
    name: "View",
    component:View
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
