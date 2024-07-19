<script setup>
import { ref } from 'vue';

const preview = ref('');
function onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            preview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
</script>
<template>
    <div class="addUserWrapper">
        <div class="addUserBlock">
            <div class="close_btn" @click="$emit('close')">
                <img src="../../../public/icons/close.png">
            </div>
            <div class="addUserTitle">
                Добавление пользователя
            </div>
            <form @submit="onSubmit" method="POST" class="form_add_user">
                <label for="surname_user">Фамилия</label>
                <input v-model="surnameUser" type="text" name="surname_user" id="surname_user" required><br/>
                <label for="name_user">Имя</label>
                <input v-model="nameUser" type="text" name="name_user" id="name_user" required><br/>
                <label for="iin">ИИН</label>
                <input v-model="iin" type="text" name="iin" id="iin" required/><br/>
                <label for="birth_date">Дата рождение</label>
                <input type="date" v-model="birthDate" name="birt_date" id="birth_date"/><br/>
                <label for="phone_number">Номер телефона</label>
                <input 
                    v-model="phoneNumber" 
                    type="tel" 
                    name="phone_number" 
                    id="phone_number" 
                    pattern="\+7[3-7]\d{9}" 
                    required
                    value="+7"
                    size="15"
                    maxlength="12"
                    autocomplete="tel" placeholder="+7 "
                /><br/>
                <label>Фото</label>
                <input type="file" id="fileInput" @change="onFileSelected">
                <img id="imagePreview" :src="preview" v-if="preview" style="width: 200px; height: auto;">
                <label for="role">
                    Роль
                </label>
                <div class="role_block">
                    <select id="role">
                        <option value="coach">
                            Тренер
                        </option>
                        <option value="sportsman">
                            Спортсмен(ка)
                        </option>
                        <option value="admin">
                            Админ школы
                        </option>
                    </select>
                </div>
                <div class="btnForAddUser">
                    <button type="submit" value="add" id="upload_btn">
                        Добавить
                    </button>   
                </div>
            </form>
            <div>
                <h2>Ответ от сервера:</h2>
                <pre>{{  }}</pre>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .addUserWrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 4rem;
    }
    .addUserBlock{
        margin: 30px;
        font-family: 'Montserrat', sans-serif;
        background-color: #fff;
        width: 400px;
        padding: 50px;
        position: relative;
        margin-top: 8rem;
        overflow-y: auto;
    }
    .close_btn{
        width: 35px;
        height: 35px;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 20px;
    }
    .addUserTitle{
        font-size: 2rem;
        font-weight: 600;
    }
    .form_add_user{
        display: flex;
        flex-direction: column;
        width: 400px;
    }
    .form_add_user label{
        font-size: 20px;
    }
    .form_add_user input{
        height: 25px;
        font-size: 20px;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 5px 10px;
    }
    #fileInput{
        border: none;
    }
    .role_block{
        position: relative;
    }
    #role{
        padding: 5px 10px;
        font-family: 'Montserrat', sans-serif;
        border-radius: 5px;
        font-size: 1rem;
    }
    .btnForAddUser{
        padding: 3rem 0;
        position: relative;
    }
    #upload_btn{
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 20px;
        border: none;
        background-color: #007BFF;
        transition: all 200ms ease;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }
    #upload_btn:hover{
        background-color: #0056b3;
    }
</style>
