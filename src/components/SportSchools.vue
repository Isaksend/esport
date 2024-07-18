<script setup>
import { ref, computed, onMounted } from 'vue';
import SearchBar from "./SearchBar.vue";
import SchoolList from "./SportSchools/SchoolList.vue";
import axios from 'axios';
import { useStore } from 'vuex';
const store = useStore();
const searchQuery = ref('');
const schools = ref('');
const fetchSchools = async () => {
    try {
        const authToken = store.getters['postUser/authToken'];
        console.log('AuthToken:', authToken); // Debug log for authToken
        const response = await axios.get('http://localhost:4004/v1/schools', {
            headers: {
                Authorization: `Bearer ${authToken}`, // Используйте токен в заголовке
            }
        });
        schools.value = response.data;
        console.log('Schools data:', response.data); // Debug log
    } catch (error) {
        console.error('Error fetching schools:', error);
    }
};

const filteredSchools = computed(() => {
    if (!searchQuery.value.trim()) {
        return schools.value;  
    }
    return schools.value.filter(school =>
        school.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const handleSearch = (query) => {
    searchQuery.value = query;
};

onMounted(fetchSchools);
</script>
<template>
    <div>
        <div v-if="true" class="search_input">
            <search-bar @search="handleSearch"></search-bar>
            <SchoolList :schools="filteredSchools"></SchoolList>
        </div>
        <div v-if="false" class="choosed_school">
            <SchoolData :items="schools" />
        </div>
    </div>
</template>
<style scoped>

</style>
