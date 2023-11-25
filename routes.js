import HoMe from './components/HoMe.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import LoGin from './components/LoGin.vue'
import AdD from './components/AdD'
import UpDate from './components/UpDate'
const routes = [
    {
        name:'HoMe',
        component:HoMe,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'LoGin',
        component:LoGin,
        path:'/login'
    },
    {
        name:'AdD',
        component:AdD,
        path:'/add'
    },
    {
        name:'UpDate',
        component:UpDate,
        path:'/update/:id'
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router