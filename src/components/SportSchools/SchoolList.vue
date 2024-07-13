<script setup>
    import { ref } from 'vue';
    import { defineProps } from 'vue';
    import SchoolItem from './SchoolItem.vue';
    const tile_formate = ref(true);
    function toggleFormate(){
        tile_formate.value = !tile_formate.value;
    }
    const props = defineProps({
        items: Array
    });
</script>
<template>
    <div class="listBlock">
        <div class="listTitle">
            Спортивные школы
        </div>
        <div class="formateBlock">
            <div class="formateChoice" @click="toggleFormate">
                <div class="tile_formate">
                    <img v-if="tile_formate" src="../../assets/icons/tile_formate.png">
                    <img v-else src="../../assets/icons/tile_formate_off.png">
                </div>
                <div class="tile_formate">
                    <img v-if="!tile_formate" src="../../assets/icons/line_formate.png">
                    <img v-else src="../../assets/icons/line_formate_off.png">
                </div>
            </div>
        </div>
        <div class="listSchool">
            <SchoolItem
                v-for="item in items"
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>
<style scoped>
    .listBlock{
        padding: 0 30px;
        font-family: 'Montserrat', sans-serif
    }
    .listTitle{
        font-size: 1.5rem;
        font-weight: 600;
        color: #000;
    }
    .formateChoice{
        display: flex;
        gap: 20px;
        justify-content: right;
        align-items: center;
        margin-top: 1.5rem;
        cursor: pointer;
    }
    .listSchool{
        display: grid;
        grid-gap: 10px;
        padding: 20px 0;
        justify-content: start;
        max-width: 100%;
        margin: auto;
    }
    @media (min-width: 1805px) {
        .listSchool {
            grid-template-columns: repeat(5, 1fr);
        }
    }
    @media (min-width: 1514px) and (max-width: 1804px) {
        .listSchool {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media (min-width: 1226px) and (max-width: 1513px){
        .listSchool {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (min-width: 935px) and (max-width: 1225px) {
        .listSchool {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 934px) {
        .listSchool {
            grid-template-columns: 1fr;
        }
    }

</style>