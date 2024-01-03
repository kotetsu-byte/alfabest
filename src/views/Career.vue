d<template>
    <Header></Header>
    <div class="container">
        <div id="main" class="mtb-60">
            <div id="main-img" style="position: relative; border-radius: 40px;">
                <div style="position: absolute; bottom: 0; left: 0;">
                    <img src="../assets/icons/header/Vector.png" alt="" class="ml-20"><br>
                    <p class="font-36 fw-700 color-white m-20" id="main-title"></p>
                </div>
            </div>
        </div>
        <div id="content" class="mtb-60">
            <img src="../assets/icons/header/header-logo-1.png" alt="">
            <div class="flex-div">
                <div>
                    <p class="font-34 fw-700" id="content-title"></p>
                </div>
                <div>
                    <p class="font-17 fw-400" id="content-text"></p><br>  
                    <a id="vacancy-link" class="font-18 fw-400"></a>
                    <br>
                    <p id="vacancy-title" class="font-18 fw-600"></p>
                    <br>
                    <div class="flex-div" style="align-items: center; justify-content: start;">
                        <div style="width: max-content;">
                            <span id="vacancy-id" class="font-20 fw-600 color-28C79E mr-20"></span>
                        </div>
                        <div>
                            <p id="vacancy" class="fw-600 font-18"></p>
                            <p id="vacancy-description" class="fw-400 font-17 color-8B8B8B"></p>
                        </div>
                    </div>
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
    name: 'Career',
    components: {Header, Footer},
    data() {
        return {
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
        setContentTitle(data) {
            document.getElementById("content-title").innerHTML = data;
        },
        setContentText(data) {
            document.getElementById("content-text").innerHTML = data;
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
            API.get('/api/carrier', config)
                .then(data => {
                    console.log(data);
                    this.setMainImg(data.data.datas[0].image);
                    if(this.lang == 'ru') {
                        this.setMainTitle(data.data.datas[0].image_title_ru);
                        this.setContentTitle(data.data.datas[0].title_ru);
                        this.setContentText(data.data.datas[0].content_ru);    
                    }
                    if(this.lang == 'uz') {
                        this.setMainTitle(data.data.datas[0].image_title_uz);
                        this.setContentTitle(data.data.datas[0].title_uz);
                        this.setContentText(data.data.datas[0].content_uz);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        setVacancyTitle(data) {
            document.getElementById("vacancy-title").innerHTML = data;
        },
        setVacancyLink(data) {
            document.getElementById("vacancy-link").innerHTML = data;
            document.getElementById("vacancy-link").href = data;
        },
        setVacancyId(data)
        {
            document.getElementById("vacancy-id").innerHTML = '0' + data.toString();
        },
        setVanancy(data) {
            document.getElementById("vacancy").innerHTML = data;
        },
        setVacancyDescription(data) {
            document.getElementById("vacancy-description").innerHTML = data;
        },
        getVacanacyData() {
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
            API.get('/api/vacancy', config)
                .then(data => {
                    console.log(data.data);
                    if(this.lang == 'ru') {
                        this.setVacancyTitle(data.data.datas[0].title_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setVacancyTitle(data.data.datas[0].title_uz);
                    }
                    this.setVacancyLink(data.data.datas[0].link);
                })
                .catch(error => {
                    console.log(error);
                })
            API.get('/api/vacancy_category', config)
                .then(data => {
                    console.log(data.data);
                    this.setVacancyId(data.data.datas[0].vacancy_id);
                    if(this.lang == 'ru') {
                        this.setVanancy(data.data.datas[0].title_ru);
                        this.setVacancyDescription(data.data.datas[0].text_ru);    
                    }
                    if(this.lang == 'uz') {
                        this.setVanancy(data.data.datas[0].title_uz);
                        this.setVacancyDescription(data.data.datas[0].text_uz);
                    }
                })
        },
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
        this.getVacanacyData();
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
</style>