import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import QazMap from './components/QazMap.vue';
import SportSchools from './components/SportSchools.vue';
import PersonalAccount from './components/PersonalAccount/PersonalAccount.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/QazMap', component: QazMap, alias: '/' },
        { path: '/SportSchools', component: SportSchools },
        { path: '/PersonalAccount', component: PersonalAccount},
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app');
