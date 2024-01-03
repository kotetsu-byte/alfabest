<template>
    <Header></Header>
    <div class="container p-60-80">
        <p id="contacts-title" class="font-36 fw-600"></p>
        <div class="flex-div" style="align-items: center;">
            <div>
                <p id="contacts-text" class="font-16 fw-400"></p>
                <br>
                <label for="" class="font-15 fw-400 mtb-20">Введите свое полное имя</label><br>
                <input type="text" placeholder="Имя, фамилия" v-model="fullName" class="p-14-15 width-400 br-15 border-1-solid-8D9197"><br>
                <label for="" class="font-15 fw-400 mtb-20">Введите свой номер телефона</label><br>
                <input type="tel" placeholder="+998" v-model="phoneNumber" class="p-14-15 width-400 br-15 border-1-solid-8D9197"><br>
                <br>
                <button @click="postClientData()" class="p-15-30 br-15 bg-28C79E border-none color-white font-16 fw-600">Отправить</button>
                <br>
                <br>
                <p class="font-14 fw-400 color-8D9197">Телефон</p>
                <p id="phone" class="font-14 fw-400"></p>
                <br>
                <p class="font-14 fw-400 color-8D9197">Адрес</p>
                <p id="address" class="font-14 fw-400"></p>
                <br>
                <p class="font-14 fw-400 color-8D9197">Email</p>
                <p id="email" class="font-14 fw-400"></p>
            </div>
            <div>
                <img id="contacts-img" class="br-15" src="" alt="">
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import API from '../api'
import {mapGetters} from 'vuex';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Contacts',
    components: {Header, Footer},
    data() {
        return {
            fullName: '',
            phoneNumber: '',
            lang: ''
        }
    },
    methods: {
        setContactsTitle(data) {
            document.getElementById("contacts-title").innerHTML = data;
        },
        setContactsText(data) {
            document.getElementById("contacts-text").innerHTML = data;
        },
        setPhone(data) {
            document.getElementById("phone").innerHTML = data;
        },
        setAddress(data) {
            document.getElementById("address").innerHTML = data
        },
        setEmail(data) {
            document.getElementById("email").innerHTML = data;
        },
        setContactsImg(data) {
            document.getElementById("contacts-img").src = 'https://back.alfabestservis.uz/storage/' + data;
        },
        getContactsData() {
            var config = {};
            if(this.lang == 'ru') {
                config = {
                    headers: {'Accept-Language': 'ru'}
                };    
            }
            if(this.lang == 'uz') {
                config = {
                    headers: {'Accept-Language': 'uz'}
                };
            }
            API.get('/api/contact_page', config)
                .then(res => {
                    console.log(res.data);
                    if(this.lang == 'ru') {
                        this.setContactsTitle(res.data.datas[0].title_ru);
                        this.setContactsText(res.data.datas[0].text_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setContactsTitle(res.data.datas[0].title_uz);
                        this.setContactsText(res.data.datas[0].text_uz);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            API.get('/api/contact_info', config)
                .then(res => {
                    console.log(res.data);
                    this.setPhone(res.data.datas[0].phone);
                    if(this.lang == 'ru') {
                        this.setAddress(res.data.datas[0].address_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setAddress(res.data.datas[0].address_uz);
                    }
                    this.setEmail(res.data.datas[0].email);
                    this.setContactsImg(res.data.datas[0].image);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        postClientData() {
            var fullName = this.fullName;
            var phoneNumber = this.phoneNumber;
            var obj = {
                full_name: fullName,
                phone: phoneNumber
            };
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
            API.post('/api/contact', obj, config)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
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
        this.getContactsData();
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
</style>