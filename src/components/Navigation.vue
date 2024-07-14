<script setup>
import { ref, onMounted } from 'vue';

const currentUser = ref(null);

onMounted(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        currentUser.value = JSON.parse(userData);
    }
});

const logout = () => {
    localStorage.removeItem('currentUser');
    currentUser.value = null;
    // Перенаправление на страницу входа
};

</script>
<template>
    <div class="menu">
        <div class="titleInfoBlock">
            <div class="EmpblemBlock">
                <div class="EmplemImg">
                    <img src="../assets/emblem_kz.png"/>
                </div>
            </div>
            <div class="NameOrg">
                <div class="NameTitle">
                    Комитет по делам спорта и физической культуры
                    Министерства туризма и спорта Республики Казахстан
                </div>
            </div>
        </div>
        <div class="navigationList">
            <div class="navBlock">
                <a href="#/QazMap" class="navLink">
                    <img src="../assets/icons/Address.png">
                    <div class="navText">
                        Карта
                    </div>
                </a>
                <a href="#/SportSchools" class="navLink">
                    <img src="../assets/icons/Home.png">
                    <div class="navText">
                        Спортивные школы
                    </div>
                </a>
                <a href="#" class="navLink">
                    <img src="../assets/icons/Event.png">
                    <div class="navText">
                        Новости и мероприятия
                    </div>
                </a>
                <a href="#" class="navLink">
                    <img src="../assets/icons/Schedule.png">
                    <div class="navText">
                        Расписание тренировок 
                    </div>
                </a>
                <a href="#" class="navLink">
                    <img src="../assets/icons/Analytics.png">
                    <div class="navText">
                        Статистика
                    </div>
                </a>
                <a href="#" class="navLink">
                    <img src="../assets/icons/Shop.png">
                    <div class="navText">
                        Магазин
                    </div>
                </a>
                <a href="#" class="navLink">
                    <img src="../assets/icons/Survey.png">
                    <div class="navText">
                        Опросы
                    </div>
                </a>
            </div>
        </div>
        <div v-if="currentUser">
            <a href="#/PersonalAccount" class="user_link">
                <div class="user_block" v-for="(currentUser, index) in currentUser" :key="index">
                    <img :src="currentUser.photo" alt="User Photo" class="user_photo">
                    <p class="user_name">{{ currentUser.name }}</p>
                </div>
                <button @click="logout">Выйти</button>
            </a>
        </div>
        <div v-else class="authBlock" id="authBlock">
            <a href="#" class="authLink">
                <img src="../assets/icons/Login.png">
                <div class="navText">
                    Войти
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
    .menu{
        width: 335px;
        left: 0;
        top: 0;
        background-color: #203D8B;
        height: 100vh;
        position: fixed;
    }
    .EmpblemBlock{
        padding-left: 15px;
        padding-top: 15px;
    }
    .EmplemImg{
        width: 87px;
        height: 90px;
    }
    .NameOrg{
        padding-left: 15px;
        font-size: 1.125rem;
        color: #fff;
        font-weight: 700;
        padding-right: 5%;
    }
    .NameTitle{
        margin-top: 1rem;
    }
    .navigationList{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .navLink{
        padding: 10px 0 10px 15px;
        display: flex;
        text-decoration: none;
        color: #fff;
    }
    .navBlock{
        margin-top: .75rem;
    }
    .navLink img{
        width: 30px;
        height: 30px;
    }
    .navText{
        padding: 4px 10px;
        font-size: 1.125rem;
        font-weight: 500;
    }
    .navLink:hover{
        background-color: #294694;
    }
    .navLink:focus{
        background-color: #294694;
    }
    .user_block {
        display: flex;
        align-items: center;
        flex-grow: 1;
        min-width: 0;
        position: absolute;
        bottom: 10px;
        left: 15px;
        width: 100%;
        text-decoration: none;
        color: #fff;
    }
    .user_photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .user_name {
        margin-left: 10px;
    }
    .authBlock{
        flex-grow: 1;
        min-width: 0;
        position: absolute;
        bottom: 10px;
        width: 100%;
    }
    .authLink{
        display: flex;
        text-decoration: none;
        color: #fff;
        padding: 10px 0 10px 15px;
        flex-grow: 1;
        width: 100%;
    }
    .authBlock:hover{
        background-color: #294694;
    }
    .authLink img{
        width: 30px;
        height: 30px;
    }
    @media screen and (max-width: 431px){
        .menu{
            position: static;
            width: 100%;
        }
        .authLink{
            width: 95%;
        }
        .titleInfoBlock{
            display: flex;
        }
        .NameOrg{
            font-size: .85rem;
        }
        .EmplemImg{
            width: 58px;
            height: 60px;
        }
        .EmplemImg img{
            width: 100%;
            height: 100%;
        }
    }
</style>
