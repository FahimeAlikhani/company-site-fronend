import { createRouter, createWebHistory } from "vue-router";
import Home from "../../components/Pages/Main/Home.vue"
import ConsultingPage from '../Pages/Other/ConsultingPage.vue'
import ProjectRequest from '../Pages/Other/ProjectRequest.vue'

const routes=[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/ConsultingPage',
      name: 'ConsultingPage',
      component: ConsultingPage
    },
    {
        path: '/ProjectRequest',
        name: 'ProjectRequest',
        component: ProjectRequest
    }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;