<template>
    <Header></Header>
    <div class="container">
        <div id="main" class="mtb-60">
            <div id="main-img" class="br-40" style="position: relative;">
                <div style="position: absolute; bottom: 0; left: 0;">
                    <img src="../assets/icons/header/Vector.png" alt="" class="ml-20">
                    <p class="font-36 fw-700 color-white m-20" id="main-title"></p>
                </div>
            </div>
            <p id="main-text" class="font-17 fw-400"></p>
        </div>
        <div id="outsourcing" class="mtb-60">
            <img src="../assets/icons/header/header-logo-1.png" alt="">
            <p id="outsourcing-title" class="fw-700 font-34"></p>
            <img src="../assets/icons/header/Outsourcing.png" alt="">
            <span id="outsourcing-text" class="fw-500 font-20"></span>
        </div>
        <div id="consumer" class="mtb-60">
            <div class="flex-div" style="align-items: center;">
                <div>
                    <label for="" class="fw-400 font-15 mtb-20">Выберите тип услуги</label><br>
                    <select class="border-1-solid-black width-400 br-15 p-12-15 font-15 fw-300" name="" id="" v-model="serviceId">
                        <option value="1">Инженерно-техническая эксплуатация</option>
                        <option value="2">Сервисное и бытовое обслуживание</option>
                        <option value="3">Сервисное и бытовое обслуживание</option>
                        <option value="4">Транспортные перевозки</option>
                    </select><br>
                    <label for="" class="fw-400 font-15 mtb-20">Введите свое полное имя</label><br>
                    <input type="text" placeholder="Имя, фамилия" v-model="fullName" class="border-1-solid-black width-400 br-15 p-12-15 font-15 fw-300"><br>
                    <label for="" class="fw-400 font-15 mtb-20">Введите свой номер телефона</label><br>
                    <input type="tel" placeholder="+998" v-model="phoneNumber" class="border-1-solid-black width-400 br-15 p-12-15 font-15 fw-300"><br>
                    <button @click="postConsumerData()" class="mtb-20 bg-28C79E p-15-30 br-15 color-white border-none font-16 fw-600">Отправить</button>
                </div>
                <div>
                    <img src="../assets/img/cooperation/Group 9.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import API from '../api';
import {mapGetters} from 'vuex';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Cooperation',
    components: {Header, Footer},
    data() {
        return {
            serviceId: '',
            fullName: '',
            phoneNumber: '',
            lang: ''
        }
    },
    methods: {
        setMainImg(data) {
            var url = 'https://back.alfabestservis.uz/storage/' + data.replaceAll('\\', '//');
            document.getElementById("main-img").style.background = `url('${url}') no-repeat`;
            document.getElementById("main-img").style.height = '500px';
        },
        setMainTitle(data) {
            document.getElementById("main-title").innerHTML = data;
        },
        setMainText(data) {
            document.getElementById("main-text").innerHTML = data;
        },
        getMainData() {
            if(this.lang == 'ru') {
                var config = {
                    headers: {'Accept-Language': 'ru'}
                };    
            }
            if(this.lang == 'uz') {
                var config = {
                    headers: {'Accept-Language': 'uz'}
                };
            }
            API.get('/api/cooperation', config)
                .then(data => {
                    console.log(data.data);
                    this.setMainImg(data.data.datas[0].image);
                    if(this.lang == 'ru') {
                        this.setMainTitle(data.data.datas[0].title_ru);
                        this.setMainText(data.data.datas[0].text_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setMainTitle(data.data.datas[0].title_uz);
                        this.setMainText(data.data.datas[0].text_uz);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        setOutsourcingTitle(data) {
            document.getElementById("outsourcing-title").innerHTML = data;
        },
        setOutsourcingText(data) {
            document.getElementById("outsourcing-text").innerHTML = data;
        },
        getOutsourcingData() {
            if(this.lang == 'ru') {
                var config = {
                    headers: {'Accept-Language': 'ru'}
                };
            }
            if(this.lang == 'uz') {
                var config = {
                    headers: {'Accept-Language': 'uz'}
                };
            }
            API.get('/api/outsourcing', config)
                .then(data => {
                    console.log(data.data);
                    if(this.lang == 'ru') {
                        this.setOutsourcingTitle(data.data.datas[0].title_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setOutsourcingTitle(data.data.datas[0].title_uz);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            API.get('/api/outsourcing_category', config)
                .then(data => {
                    console.log(data.data);
                    if(this.lang == 'ru') {
                        this.setOutsourcingText(data.data.datas[0].text_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setOutsourcingText(data.data.datas[0].text_uz);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        postConsumerData() {
            var serviceId = this.serviceId;
            var fullName = this.fullName;
            var phoneNumber = this.phoneNumber;
            var obj = {
                service_id: serviceId,
                full_name: fullName,
                phone: phoneNumber
            }
            console.log(obj);
            if(this.lang == 'ru') {
                var config = {
                    headers: {'Accept-Language': 'ru'}
                };
            }
            if(this.lang == 'uz') {
                var config = {
                    headers: {'Accept-Language': 'uz'}
                };
            }
            API.post('/api/service_consumer', obj, config)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    computed: {
        ...mapGetters(['getSelectedLang']),
        getLang() {
            var lang = this.getSelectedLang;
            this.lang = lang;
        }
    },
    mounted() {
        this.getLang;
        this.getMainData();
        this.getOutsourcingData();
    }
}
</script>

<style scoped>
.flex-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-column-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container {
    padding: 0 80px;
}

.mtb-60 {
    margin: 60px 0;
}

.ml-20 {
    margin-left: 20px;
}

.font-36 {
    font-size: 36px;
}

.fw-700 {
    font-weight: 700;
}

.color-white {
    color: white;
}

.m-20 {
    margin: 20px;
}

.font-24 {
    font-size: 24px;
}

.font-17 {
    font-size: 17px;
}

.fw-400 {
    font-weight: 400;
}

.width-100pc {
    width: 100%;
}

.font-20 {
    font-size: 20px;
}

.fw-500 {
    font-weight: 500;
}

.font-34 {
    font-size: 34px;
}

.ptb-20 {
    padding: 20px 0;
}

.table-layout-fixed {
    table-layout: fixed;
}

.overflow-x-scroll {
    overflow-x: scroll;
}

.mtb-20 {
    margin: 20px;
}

.font-30 {
    font-size: 30px;
}

.p-20-40 {
    padding: 20px 40px;
}

.fw-600 {
    font-weight: 600;
}

.font-18 {
    font-size: 18px;
}

.color-28C79E {
    color: #28C79E;
}

.mr-20 {
    margin-right: 20px;
}

.color-8B8B8B {
    color: #8B8B9B;
}

.p-60-80 {
    padding: 60px 80px;
}

.font-16 {
    font-size: 16px;
}

.font-15 {
    font-size: 15px;
}

.p-14-15 {
    padding: 14px 15px;
}

.width-400 {
    width: 400px;
}

.br-15 {
    border-radius: 15px;
}

.border-1-solid-8D9197 {
    border: 1px solid #8D9197;
}

.p-15-30 {
    padding: 15px 30px;
}

.bg-28C79E {
    background: #28C79E;
}

.border-none {
    border: none;
}

.font-14 {
    font-size: 14px;
}

.color-8D9197 {
    color: #8D9197;
}

.br-40 {
    border-radius: 40px;
}

.border-1-solid-black {
    border: 1px solid black;
}

.p-12-15 {
    padding: 12px 15px;
}

.fw-300 {
    font-weight: 300;
}
</style>