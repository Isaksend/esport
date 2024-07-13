import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import QazMap from './components/QazMap.vue';
import SportSchools from './components/SportSchools.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/QazMap', component: QazMap, alias: '/' },
        { path: '/SportSchools', component: SportSchools }
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app');

const modalBlock = document.querySelector('.modal_block');
let scrollPosition = 0;
function openModal() {
    scrollPosition = window.pageYOffset; 
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`; 
    document.body.style.width = '100%';
    modalBlock.style.display = "block";
}
function closeModal() {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
    modalBlock.style.display = "none";   
}
document.querySelector('.authBlock').addEventListener('click', openModal);
document.querySelector('.close_btn').addEventListener('click', closeModal);
document.addEventListener('DOMContentLoaded', function () {
    var iinInput = document.getElementById('iin');
    if (iinInput) {
        iinInput.addEventListener('input', function (e) {
            var value = e.target.value;
            e.target.value = value.replace(/[^0-9]/g, ''); // Удаляем все нечисловые символы
        });

        iinInput.addEventListener('change', function (e) {
            if (e.target.value.length !== 12) {
                alert('ИИН должен содержать ровно 12 цифр.');
            }
        });
    } else {
        console.log('Элемент с ID "iin" не найден в DOM.');
    }
});
