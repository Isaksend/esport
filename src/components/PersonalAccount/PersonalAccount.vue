<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const currentUser = ref(null);
    onMounted(() => {
    const userData = localStorage.getItem('currentUser');
        if (userData) {
            currentUser.value = JSON.parse(userData);
        } else {
            router.push('/'); // Перенаправление на страницу входа, если нет данных пользователя
        }
    });
    const logout = () => {
        localStorage.removeItem('currentUser'); // Удаление данных пользователя
        router.push('/');
    };
</script>
<template>
    <div class="personalAccount"> 
        <h1 class="pers_title">Личный кабинет</h1>
        <div v-if="currentUser">
            <div v-for="(admin, index) in adminData" :key="index">
                <div class="user_profile">
                    <div :style="{ backgroundImage: 'url(' + currentUser.photo + ')' }" class="user_photo">
                    </div>
                    <div class="user_info">
                        <p><strong>Должность:</strong> {{ currentUser.position }}</p>
                        <p><strong>ИИН:</strong> {{ currentUser.iin }}</p>
                        <p><strong>Имя:</strong> {{ currentUser.name }}</p>
                        <p><strong>Пароль:</strong> {{ currentUser.password }}</p>
                        <p><input type="submit" value="Выйти" id="logout" @click="logout"></p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Загрузка данных...</p>
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
    .user_photo { grid-area: user_photo; }
    .user_info { grid-area: user_info; }
    .user_photo{
        width: 100%;
        height: 400px;
        background-size: 100%;
        stroke: 3px solid black;
        stroke-width: 1px;
    }
</style>
