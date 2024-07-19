<script setup lang="ts">
    import BaseButton from '../Base/BaseButton.vue';
    import BaseInput from '../Base/BaseInput.vue';
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
        <div class="profile_info">
            <div class="profile_img">
                <img src="#"/>
            </div>
            <div class="profile_info_text">
                <div class="fullname">
                    <div class="fullname_title">
                        ФИО
                    </div>
                    <div class="fullname_text">
                        Рамазан Оразов
                    </div>
                </div>
                <div class="biography">
                    <div class="biography_title">
                        Биография
                    </div>
                    <div class="biography_text">
                        И́горь Вале́рьевич Ша́цкий — казахстанский футболист, вратарь клуба «Актобе» и сборной Казахстана.
                    </div>
                </div>
                <div class="awards">
                    <div class="award_title">
                        Награды
                    </div>
                    <div class="award_list">
                        <div class="award_item">
                            <img src="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
