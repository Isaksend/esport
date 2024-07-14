<script setup>
import { ref, computed } from 'vue';
import SearchBar from "./SearchBar.vue";
import SchoolList from "./SportSchools/SchoolList.vue";
import items from '../assets/items.json';

const searchQuery = ref('');
const itemsData = ref(items);
const filteredItems = computed(() => {
    if (!searchQuery.value.trim()) {
        return itemsData.value;  
    }
    return itemsData.value.filter(item =>
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
const handleSearch = (query) => {
    searchQuery.value = query;
};
</script>
<template>
    <div>
        <div v-if="true" class="search_input">
            <search-bar @search="handleSearch"></search-bar>
            <SchoolList :items="filteredItems"></SchoolList>
        </div>
        <div v-if="false" class="choosed_school">
            <SchoolData :items="items" />
        </div>
    </div>
</template>
<style scoped>

</style>
