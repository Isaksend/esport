<script setup>
import currentUser from '../../../public/database/admin.json';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const message = computed(() => store.getters['postUser/message']);
const iin = computed(() => store.getters['postUser/iin']);
console.log('Message in PersonalAccount.vue:', message.value); // Debug log
console.log('Iin in PersonalAccount.vue:', iin.value); // Debug log
</script>
<template>
    <div class="personalAccount"> 
        <h1 class="pers_title">Личный кабинет</h1>
        <div v-if="currentUser">
            <div v-for="(currentUser, index) in currentUser" :key="index">
                <div class="user_profile">
                    <div :style="{ backgroundImage: 'url(' + currentUser.photo + ')' }" class="user_photo">
                    </div>
                    <div class="user_info">
                        <div class="strong">Должность:</div>
                        <div> {{ message }}</div>
                        <div class="strong">ИИН:</div>
                        <div>{{ iin }}</div>
                        <div class="strong">Имя:</div>
                        <div>{{ currentUser.name }}</div>
                        <div class="strong">Фамилия:</div> 
                        <div>{{ currentUser.surname }}</div>
                        <!-- <div class="logoutBtn"><input type="submit" value="Выйти" id="logout" @click="logout"></div> -->
                    </div>
                </div>
            </div>
            <div class="add_funct_block">
                <div class="add_school add_item">
                    <a href="#/AddSchool" class="link_add_item">
                        <div class="add_item_contain">
                            <img src="../../assets/icons/plus.png">
                            <p class="add_item_text">Добавить школу</p>
                        </div>
                    </a>
                </div>
                <div class="add_sportsmen add_item">
                    <a href="#" class="link_add_item">
                        <div class="add_item_contain">
                            <img src="../../assets/icons/plus.png">
                            <p class="add_item_text">Добавить спортсмена</p>
                        </div>
                    </a>
                </div>
                <div class="add_coach add_item">
                    <a href="#" class="link_add_item">
                        <div class="add_item_contain">
                            <img src="../../assets/icons/plus.png">
                            <p class="add_item_text">Добавить тренера</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Данных нет о таком пользователе</p>
        </div>
    </div>
</template>
<style scoped>
    .personalAccount{
        font-family: 'Montserrat', sans-serif;
    }
    .pers_title{
        margin-left: 1.875rem;
    }
    .user_profile{
        margin-left: 1.875rem;
        width: 56rem;
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 39.5% 1fr; 
        grid-template-rows: 1fr; 
        gap: 0% 2.8%; 
        grid-template-areas: 
            "user_photo user_info"; 
    }
    .user_photo { 
        grid-area: user_photo;
    }
    .user_info { 
        grid-area: user_info; 
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        position: relative;
    }
    .user_photo{
        width: 100%;
        height: 400px;
        background-size: 100%;
        stroke: 3px solid black;
        stroke-width: 1px;
    }
    .user_info .strong{
        font-size: 20px;
        font-weight: 600;
    }
    .logoutBtn{
        position: absolute;
        bottom: 0px;
    }
    .add_funct_block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; 
        padding: 20px;
        width: 95%;
    }
    .add_item { 
        width: 350px; 
        height: 250px;
        margin: 10px; 
        background-color: #ffffff;
        border: 1px dashed #031954; 
        transition: all 200ms ease;
    }
.add_item:hover{
    transform: translateY(-10px);
}
.link_add_item {
    text-decoration: none;
    color: inherit;
    width: 360px; 
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_item_contain {
    text-align: center;
}

.add_item img {
    width: 30px; 
    height: auto; 
}

.add_item_text {
    margin-top: 10px; 
    font-size: 16px;
    font-weight: 500;
    color: #474747;
}

</style>
