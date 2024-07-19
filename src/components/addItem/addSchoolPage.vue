<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const addSchoolResponse = ref(null);

// Рефы для формы и ее полей
const nameSchool = ref('');
const titleSchool = ref('');
const city = ref('');
const descriptionSchool = ref('');
const address = ref('');

const addSchool = async () => {
    try {
    const schoolData = {
        name: nameSchool.value,
        title: titleSchool.value,
        cityId: city.value,
        description: descriptionSchool.value,
        address: address.value,
    };
    const authToken = store.getters['postUser/authToken']; // Get token from store
    const response = await axios.post('http://localhost:4004/v1/schools', schoolData, {
        headers: {
            Authorization: `Bearer ${authToken}`, // Use token in header
            'Content-Type': 'application/json'
        }
    });
    addSchoolResponse.value = response.data;
    console.log(addSchoolResponse.value);
    } catch (error) {
    console.error('Error adding school:', error);
    }
};

const onSubmit = (event) => {
    event.preventDefault();
    addSchool();
    router.push('/PersonalAccount');
};
</script>
<template>
    <div class="addSchoolWrapper">
        <div class="addSchoolBlock">
            <div class="addSchoolTitle">
                Добавление школы
            </div>
            <form @submit="onSubmit" method="POST" class="form_add_school">
                <label for="name_school">Название школы</label>
                <input v-model="nameSchool" type="text" name="name_school" id="name_school" required><br/>
                <label for="title_school">Заголовок</label>
                <input v-model="titleSchool" type="text" name="title_school" id="title_school" required><br/>
                <label for="city">Город</label>
                <input v-model="cityId" type="text" name="city" id="city" required/><br/>
                <label for="description_school">Описание</label>
                <textarea v-model="descriptionSchool" type="text" name="description_school" id="description_school" required>
                </textarea><br/>
                <label>Адрес</label>
                <input v-model="address" type="text" name="address" id="address"/><br/>
                <button type="submit" value="Далее" id="upload_btn">
                    Далее
                </button>
            </form>
            <div v-if="addSchoolResponse">
                <h2>Ответ от сервера:</h2>
                <pre>{{ addSchoolResponse }}</pre>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .addSchoolWrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .addSchoolBlock{
        margin: 30px;
        font-family: 'Montserrat', sans-serif;
    }
    .addSchoolTitle{
        font-size: 2rem;
        font-weight: 600;
    }
    .form_add_school{
        display: flex;
        flex-direction: column;
        width: 400px;
    }
    .form_add_school label{
        font-size: 20px;
    }
    .form_add_school input{
        height: 25px;
        font-size: 20px;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 5px 10px;
    }
    textarea{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        resize: none;
        padding: 10px;
        height: 100px;
    }
    #upload_btn{
        margin-top: 2rem;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 20px;
        margin: auto;
        border: none;
        background-color: #007BFF;
        transition: all 200ms ease;
        color: #fff;
    }
    #upload_btn:hover{
        background-color: #0056b3;
    }
</style>
