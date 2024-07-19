<script setup lang="ts">
    import BaseButton from '../Base/BaseButton.vue';
    import BaseInput from '../Base/BaseInput.vue';
    import userData from '../../../public/database/profile.json';
    interface UserProfile {
        name: string;
        surname: string;
        position: string;
        biography: string;
        status: string;
        photo: string;
        disciplines: string[];
        coach: string;
        rating: number;
        gallery: string[]; 
    }
    const user = (userData as UserProfile[])[0];
</script>
<template>
    <div class="sports_men_profile">
        <base-button
            label="Submit"
            color="#fff"
            backgroundColor="#031954"
            borderColor="#031954"
            fontSize="16px"
        />
        <div class="p-4">
            <!-- Default Input -->
            <base-input placeholder="Enter text" />
            <!-- Customized Input -->
            <base-input
            color="#031954"
            backgroundColor="#fff"
            fontSize="14px"
            placeholder="Custom Input"
            />
        </div>
        <div class="profile_info flex gap-x-9 justify-center px-8">
            <div class="profile_img border-1 border-black border-solid">
                <img :src="user.photo" class="w-auto h-auto"/>
            </div>
            <div class="profile_info_text flex-col justify-around">
                <div class="fullname">
                    <div class="fullname_title text-1xl font-bold">
                        ФИО
                    </div>
                    <div class="fullname_text">
                        {{ user.name + " " + user.surname }}
                    </div>
                </div>
                <div class="biography w-3/4 mt-2.5">
                    <div class="biography_title text-1xl font-bold">
                        Биография
                    </div>
                    <div class="biography_text">
                        {{ user.biography }}
                    </div>
                </div>
                <div class="awards mt-2.5">
                    <div class="award_title text-1xl font-bold">
                        Награды
                    </div>
                    <div class="award_list">
                        <div class="award_item">
                            <img src="https://i.postimg.cc/3wSHz5Lv/3rd-Place-Medal.png" alt="За 3 место в КПЛ сезон 22/23"/>
                        </div>
                    </div>
                </div>
                <div class="discplines mt-2.5">
                    <div class="disciplines_title text-1xl font-bold">
                        Дисциплины
                    </div>
                    {{  user.disciplines.join(", ") }}
                </div>
                <div class="coach mt-2.5">
                    <div class="coach_title text-1xl font-bold">
                        Тренера
                    </div>
                    {{ user.coach }}
                </div>
            </div>
        </div>
        <div class="ratingBlock px-8 mt-4">
            <div class="item_rating flex">
                <div v-for="index in 5" :key="index" class="star">
                    <img src="../../assets/icons/StarLight.png" v-if="index <= user.rating" alt="Filled Star">
                    <img src="../../assets/icons/StarGray.png" v-else alt="Empty Star">
                </div>
            </div>
            <p class="font-bold mt-2">Рейтинг спортсмена</p>
        </div>
        <div class="gallereyBlock px-8">
            <div class="galleryTitle font-bold text-xl my-8">
                Галерея:
            </div>
            <div class="galleryList flex flex-wrap w-full justify-between gap-4">
                <div class="galleryItem sm:w-1/2 md:w-1/3 lg:w-1/4 p-1" v-for="(image, index) in user.gallery" :key="index">
                    <img :src="image" class="galleryImage w-full h-auto rounded shadow-lg transition-transform transform hover:scale-105"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .galleryList {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: flex-start;
        gap: 30px;
    }
    .galleryItem {
        width: 320px; 
        padding: 2px;
    }
    .galleryItem img {
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
        display: block;
    }
</style>
