<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});
const getCategoryColor = (category) => {
const colors = {
    'Каз. курес': '#29FF72', 
    'бокс': '#E1253C',       
    'борьба': '#FFB629'    
};
return colors[category] || '#ffffff'; // Белый цвет по умолчанию, если категория не найдена
};

</script>
<template>
    <div class="schoolBlock">
        <div class="school_item">
            <img :src="item.image" alt="Image of school" class="item_image">
            <div class="item_title">
                {{ item.title }}
            </div>
            <div class="item_address">
                {{ item.address }}
            </div>
            <div class="item_categories">
                <div 
                    v-for="category in item.categories" 
                    :key="category"
                    class="category"
                    :style="{ backgroundColor: getCategoryColor(category) }"
                >
                    {{ category }}
                </div>
            </div>
            <div class="item_description">
                {{ item.description }}
            </div>
            <div class="item_rating">
                <div v-for="index in 5" :key="index" class="star">
                    <img src="../../assets/icons/StarLight.png" v-if="index <= item.rating" alt="Filled Star">
                    <img src="../../assets/icons/StarGray.png" v-else alt="Empty Star">
                </div>
            </div>
            <span class="score_text">Оценка</span><br/>
            <div class="item_link_block">
                <a :href="item.linkURL" target="_blank" class="item_detail_link">Подробнее</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.school_item {
    /* padding: 10px; */
    background: #fff;
    margin-bottom: 50px;
    font-family: 'Montserrat', sans-serif;
    width: 100%; 
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: left; /* Центрирование содержимого по горизонтали */
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.item_image {
    width: 100%;
    height: 208px;
}
.item_title {
    margin: 16px 0 0 15px;
    font-size: 20px;
    font-weight: 500;
}
.item_address {
    margin-left: 15px;
    font-size: 1rem;
    font-weight: 500;
    color: #606060;
}
.item_categories{
    display: flex;
    gap: 10px;
    margin-left: 15px;
}
.item_categories .category {
    padding: 2px 4px;
    color: #fff;
    font-size: 10px;
    border-radius: 5px;
}
.item_description {
    margin: 0 5px 20px 15px;
    font-size: .75rem;
    font-weight: 500;
    color: #606060;
}
.item_rating {
    display: flex;
    align-items: center;
    margin-left: 15px;
}

.item_rating .star {
    width: 20px;
    height: 20px;
}
.score_text{
    margin-left: 15px;
    font-size: .75rem;
    color: #606060;
    font-weight: 500;
}
.item_link_block{
    padding-top: 20px;
}
.item_detail_link {
    color: #031954;
    text-decoration: none;
    margin-top: 40px;
    margin-left: 15px;
    padding: 6px 28px;
    border: 1px solid #031954;
    border-radius: 5px;
    font-size: 14px;
    transition: all 200ms ease;
}
.item_detail_link:hover{
    background-color: #031954;
    color: #fff;
}
</style>