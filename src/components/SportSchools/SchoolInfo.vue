<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const school = computed(() => store.getters['school/school']);
</script>
<template>
    <div class="about_school">
        <div class="school_info">
            <div class="school_info_block">
                <div class="school_title">
                    Заголовок
                </div>
                <div class="school_title_text">
                    {{ school.title }}
                </div>
                <div class="description_block">
                    <div class="description_title">
                        Описание
                    </div>  
                    <div class="description_text">
                        {{ school.description }}
                    </div>
                </div>
            </div>
            <div class="school_map_block">
                <div class="school_map">
                    <img src="../../../public/images/map_school.png">
                </div>
            </div>
        </div>
        <div class="discipline_work_time_block">
            <div class="discipline_block">
                <div class="discipline_title">
                    Дисциплины
                </div>
                <div class="discipline_list">
                    <div class="discip_item kickbox_block">
                        <div class="discip_icon">
                            <img src="../../../public/icons/kickboxing.png">
                        </div>
                        <div class="discip_name">
                            Kickboxing
                        </div>
                        <div class="dicsip_description">
                            спортивное единоборство, зародившееся в 60-х — 70-х годах двадцатого века. Исторически подразделяется на американский кикбоксинг, японский кикбоксинг.
                        </div>
                        <div class="discip_coach_title">
                            Тренеры
                        </div>
                        <div class="discip_coach_list">
                            Азамат Мусагалиев, Сергей Иванов,
                            Игорь Щацский, Максим Самородов
                        </div>
                        <div class="price_title">
                            Стоимость
                        </div>
                        <div class="price_text">
                            15 занятий - 30 000 тенге
                        </div>
                    </div>
                    <div class="discip_item box_block">
                        <div class="discip_icon">
                            <img src="../../../public/icons/box.png">
                        </div>
                        <div class="discip_name">
                            Box
                        </div>
                        <div class="dicsip_description">
                            спортивное единоборство, зародившееся в 60-х — 70-х годах двадцатого века. Исторически подразделяется на американский кикбоксинг, японский кикбоксинг.
                        </div>
                        <div class="discip_coach_title">
                            Тренеры
                        </div>
                        <div class="discip_coach_list">
                            Азамат Мусагалиев, Сергей Иванов,
                            Игорь Щацский, Максим Самородов
                        </div>
                        <div class="price_title">
                            Стоимость
                        </div>
                        <div class="price_text">
                            15 занятий - 30 000 тенге
                        </div>
                    </div>
                    <div class="discip_item wrestling_block">
                        <div class="discip_icon">
                            <img src="../../../public/icons/wrestling.png">
                        </div>
                        <div class="discip_name">
                            Борьба
                        </div>
                        <div class="dicsip_description">
                            спортивное единоборство, зародившееся в 60-х — 70-х годах двадцатого века. Исторически подразделяется на американский кикбоксинг, японский кикбоксинг.
                        </div>
                        <div class="discip_coach_title">
                            Тренеры
                        </div>
                        <div class="discip_coach_list">
                            Азамат Мусагалиев, Сергей Иванов,
                            Игорь Щацский, Максим Самородов
                        </div>
                        <div class="price_title">
                            Стоимость
                        </div>
                        <div class="price_text">
                            15 занятий - 30 000 тенге
                        </div>
                    </div>
                </div>
            </div>
            <div class="work_time_contact_block">
                <div class="work_time_block">
                    <div class="work_time_title">
                        Время работы
                    </div>
                    <div class="work_time">
                        <div class="work_time_item">
                            <div class="work_day">Понедельник</div>
                            <div class="work_time_period">07:00 - 22:00</div>
                        </div>
                        <div class="work_time_item">
                            <div class="work_day">Вторник</div>
                            <div class="work_time_period">07:00 - 22:00</div>
                        </div>
                        <div class="work_time_item">
                            <div class="work_day">Среда</div>
                            <div class="work_time_period">07:00 - 22:00</div>
                        </div>
                        <div class="work_time_item">
                            <div class="work_day">Четверг</div>
                            <div class="work_time_period">07:00 - 22:00</div>
                        </div>
                        <div class="work_time_item">
                            <div class="work_day">Пятница</div>
                            <div class="work_time_period">07:00 - 22:00</div>
                        </div>
                        <div class="work_time_item">
                            <div class="work_day">Суббота</div>
                            <div class="work_time_period">07:00 - 22:00</div>
                        </div>
                        <div class="work_time_item">
                            <div class="work_day">Воскресенье</div>
                            <div class="work_time_period">07:00 - 22:00</div>
                        </div>
                    </div>
                </div>
                <div class="contact_block">
                    <div class="contact_title">
                        Контакты
                    </div>
                    <div class="contact_item">
                        <div class="contact_phone">
                            +7 (707) 700 70 07
                        </div>
                        <div class="phone_icon"><img src="../../../public/icons/phone.png"/></div>
                    </div>
                    <div class="contact_item">
                        <div class="contact_phone">
                            +7 (707) 700 70 07
                        </div>
                        <div class="phone_icon"><img src="../../../public/icons/phone.png"/></div>
                    </div>
                    <div class="contact_item">
                        <div class="contact_phone">
                            mincult.kz
                        </div>
                        <div class="phone_icon"><img src="../../../public/icons/email.png"/></div>
                    </div>
                    <div class="address_block">
                        {{ school.address}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
    .school_info{
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
        width: 95%;
    }
    .school_title{
        font-size: 20px;
        font-weight: 600;
    }
    .school_title_text{
        font-weight: 400;
        font-size: 18px;
    }
    .description_block{
        margin-top: 10px;
        width: 90%;
        font-size: 18px;
    }
    .description_title{
        font-size: 20px;
        font-weight: 600;
    }
.discipline_work_time_block{
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 57% 1fr; 
    grid-template-rows: 1fr; 
    gap: 0% 25px; 
    grid-template-areas: 
        "discipline_block work_time_contact_block"; 
}
.discipline_block { grid-area: discipline_block; }
.work_time_contact_block { grid-area: work_time_contact_block; }
.discipline_title{
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 15px;
}
.discipline_list{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
}
.discip_item{
    padding: 10px 15px 40px 40px;
    width: 250px;
    height: 200px;
    background-size: 100%;
    background-repeat: no-repeat;
}
.kickbox_block{
    background-image: url("../../../public/bkg_kickbox.png");
}
.box_block{
    background-image: url("../../../public/bkg_box.png");
}
.wrestling_block{
    background-image: url("../../../public/bkg_wrestling.png");
}
.discip_name{
    font-weight: 600;
    font-size: 14px;
}
.dicsip_description{
    font-size: 10px;
}
.discip_coach_title, .price_title{
    font-weight: 500;
    font-size: 13px;
}
.discip_coach_list, .price_text{
    font-size: 10px;
}
.work_time_contact_block{
    display: flex;
    margin-top: 30px;
    gap: 30px;
}
.work_time_block{
    font-family: 'Montserrat', sans-serif;
}
.work_time_title{
    font-size: 18px;
    font-weight: 600;
    color: #031954;
}
.work_time{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.work_time_item{
    display: flex;
    width: 250px;
    justify-content: space-between;
    font-size: 14px;
}
.contact_block{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 240px;
    gap: 10px;
}
.contact_title{
    font-size: 18px;
    font-weight: 600;
    color: #031954;
}
.contact_item{
    display: flex;
    gap: 30px;
    justify-content: space-between
}
.contact_phone{
    display: flex;
    font-size: 14px;
}
.address_block{
    position: absolute;
    bottom: 0;
    font-size: 14px;
}
</style>

