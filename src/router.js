import {createRouter, createWebHashHistory} from 'vue-router';
import QazMap from './components/QazMap.vue';
import SportSchools from './components/SportSchools.vue';
import PersonalAccount from './components/PersonalAccount/PersonalAccount.vue';
import SchoolData from './components/SportSchools/SchoolData.vue';
import AddSchoolPage from './components/addItem/addSchoolPage.vue';
import SchoolInfo from './components/SportSchools/SchoolInfo.vue';
import SportsMenProfile from './components/SportSchools/SportsMenProfile.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/QazMap', component: QazMap, alias: '/' },
        { path: '/SportSchools', component: SportSchools },
        { path: '/PersonalAccount', component: PersonalAccount},
        { path: '/SchoolData', component: SchoolData},  
        {   path: '/school/:id',
            name: 'SchoolData',
            component: SchoolData,
            props: true 
        },
        { path: '/AddSchool', component: AddSchoolPage},
        { path: '/SportsmenProfile', component: SportsMenProfile}
    ]
})
export default router;