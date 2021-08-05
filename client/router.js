import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import MainBoard from "../imports/ui/note/Main.vue"
import UndeleteNote from "../imports/ui/note/UnDelete.vue"
import NotFound from '../imports/ui/NotFound.vue'
import MainDiary from '../imports/ui/diary/Main.vue'
import MainTask from '../imports/ui/task/Main.vue'
import CreateTask from '../imports/ui/task/Create.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "main",
        component: MainBoard
    },
    {
        path: '/404', 
        name: 'dashboard', 
        component: NotFound
    },
    {
        path: '/diary', 
        name: 'dashboard', 
        component: MainDiary
    },
    {
        path: '/task',
        name: 'task',
        component: MainTask
    },
    {
        path: '/createtask',
        name: 'task',
        component: CreateTask
    },
    {
        path: '/undeletenote',
        name: 'undeletenote',
        component: UndeleteNote
    }
]

const router = new VueRouter({
  routes,
})

export default router