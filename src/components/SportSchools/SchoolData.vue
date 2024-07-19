<script setup>
import SchoolNav from "./SchoolNav.vue";
import SchoolInfo from "./SchoolInfo.vue";
import SchoolCoachList from "./SchoolCoachList.vue";
import SchoolSportsMen from "./SchoolSportsMen.vue";
import addSportsmanProfile from "../addItem/addSportsmanProfile.vue";
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const currentView = ref('info');
const showModal = ref(false);
function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
}
function toggleModal() {
    showModal.value = !showModal.value;
    if (showModal.value) {
        disableScroll();
    } 
    else {
        enableScroll();
    }
}

function enableScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
}
function switchView(view) {
    currentView.value = view;
}
const store = useStore();
const route = useRoute(); 
const schoolId = route.params.id;
const school = computed(() => store.getters['school/school']);
const isLoading = computed(() => store.getters['school/isLoading']);

onMounted(() => {
    store.dispatch('school/fetchSchool', schoolId);
    enableScroll();
});
</script>
<template>
<div>
    <div v-if="isLoading">
        Загрузка...
    </div>
    <div v-else-if="school" class="school_data">
        <div class="school_title_info">
            <div class="school_score">
                <img src="../../assets/icons/StarLight.png" v-for="index in 5" :key="index" />
            </div>
            <div class="school_name">
                {{ school.name}}
            </div>
            <div class="school_address">
                {{ school.address }}
            </div>
            <button @click="toggleModal" class="btnAddUser">Добавить пользователя</button>
        </div>
        <school-nav @switch="switchView"/>
        <SchoolInfo v-if="currentView === 'info'" :school="school.value" />
        <SchoolCoachList v-if="currentView === 'coaches'" />
        <SchoolSportsMen v-if="currentView === 'sportsmen'" />
        <addSportsmanProfile v-if="showModal" @close="toggleModal" class="add_sportsman" />
    </div>
    <div v-else>
        Данные не найдены!
    </div>
    
</div>
</template>
<style scoped>
    .school_data{
        margin: 15px 30px;
        display: block;
        position: relative;
    }
    .school_score{
        display: flex;
    }
    .school_name{
        font-weight: 600;
        font-size: 2rem;
    }
    .router_part{
        width: 100%;
    }
    .add_sportsman{
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.4);
        top: 0;
        left: 0;
        overflow-y: auto;
    }
    .btnAddUser{
        padding: 10px 20px;
        font-size: 20px;
        border-radius: 5px;
        background-color: #203D8B;
        border: none;
        color: #fff;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
    .btnAddUser:hover{
        background-color: #294694;
    }
</style>
