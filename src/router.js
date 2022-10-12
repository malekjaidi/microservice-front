import { createRouter, createWebHistory } from 'vue-router';
import UsersList from './components/UsersList.vue';
import RegisterUser from './components/RegisterUser.vue';
import UpdateUser from './components/UpdateUser.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/list' },
      { path: '/register', component: RegisterUser },
      { path: '/update/:id', component: UpdateUser , props: true , name :"update"},
      { path: '/list', component: UsersList },



    ]
  });

export default router;