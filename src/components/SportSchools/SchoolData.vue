<script setup>
import SchoolNav from "./SchoolNav.vue";
import SchoolInfo from "./SchoolInfo.vue";
import SchoolCoachList from "./SchoolCoachList.vue";
import SchoolSportsMen from "./SchoolSportsMen.vue";
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const currentView = ref('info');
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
        </div>
        <school-nav @switch="switchView"/>
        <SchoolInfo v-if="currentView === 'info'" :school="school.value" />
        <SchoolCoachList v-if="currentView === 'coaches'" />
        <SchoolSportsMen v-if="currentView === 'sportsmen'" />
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
</style>
