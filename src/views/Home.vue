<template>
    <Header></Header>
    <div class="container">
        <div class="content" style="position: relative;">
            <div v-for="(item, index) in content" :key="index">
                <div v-if="contentNo === index + 1">
                    <div class="main-img" :style="`background: url(https://back.alfabestservis.uz/storage/${item.img}) no-repeat; height: 400px; width: 1000px; background-size: cover; position: relative; border-radius: 40px; margin: auto;`">
                        <div style="position: absolute; bottom: 0; left: 0;">
                            <img src="../assets/icons/header/Vector.png" alt="" class="ml-20"><br>
                            <p class="font-36 fw-700 color-white m-20" id="main-title">{{ item.text }}</p>
                            <button @click="this.$router.push('/' + item.link)" class="m-20 p-10-15 border-none bg-28C79E br-45 color-white font-16 fw-600">Узнать больше</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style="text-align: right; position: absolute; right: 20%; top: 80%;">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <img class="circle" @click="showContent(1)" src="../assets/icons/slideshow/filled.png" alt="">
                    <img class="circle" @click="showContent(2)" src="../assets/icons/slideshow/unfilled.png" alt="">
                    <img class="circle" @click="showContent(3)" src="../assets/icons/slideshow/unfilled.png" alt="">
                    <img class="circle" @click="showContent(4)" src="../assets/icons/slideshow/unfilled.png" alt="">
                </div>
            </div>
        </div>
        <div id="about" class="flex-div mtb-60" style="align-items: center;">
            <div>
                <img id="about-img" src="" alt="">
            </div>
            <div class="ml-50">
                <p class="font-34 fw-700 mtb-20" id="about-header"></p>
                <span id="about-text" class="font-17 fw-400 mtb-20"></span>
                <button class="p-10-15 bg-28C79E br-45 border-none color-white mtb-40 pointer" onclick="location.href = '/about'">Узнать больше</button>
            </div>
        </div>
        <div id="pros" class="flex-div">
            <div>
                <img src="../assets/icons/pros/icon 1.png" alt="">
                <span class="font-30 fw-500">+320.000</span><span class="font-18 fw-400">кв.м²</span>
                <p class="font-18 fw-400 color-8B8B8B">Площади объектов<br> благоустройства</p>
            </div>
            <div>
                <img src="../assets/icons/pros/icon 2.png" alt="">
                <span class="font-30 fw-500">+70.000</span><span style="font-size: 18px; font-weight: 400;">кв.м²</span>
                <p class="font-18 fw-400 color-8B8B8B">Площади объектов<br> клининга</p>
            </div>
            <div>
                <img src="../assets/icons/pros/icon 3.png" alt="">
                <span class="font-30 fw-500">+1000</span>
                <p class="font-18 fw-400 color-8B8B8B">Питающихся</p>
            </div>
            <div>
                <img src="../assets/icons/pros/icon 4.png" alt="">
                <span class="font-30 fw-500">+500</span>
                <p class="font-18 fw-400 color-8B8B8B">Сотрудников</p>
            </div>
        </div> 
        <div id="aims" class="mtb-60">
            <img src="../assets/icons/header/header-logo-1.png" alt=""><br>
            <p id="aims-header" class="font-34 fw-700"></p>
            <div class="flex-div" style="align-items: center;">
                <div class="width-40pc">
                    <p id="aims-text" class="font-17 fw-400"></p>
                </div>
                <div>
                    <table>
                        <tr>
                            <td class="border-bottom-1-solid-D9D9D9 pr-10">
                                <p class="aim-id font-20 fw-600"></p>
                            </td>
                            <td class="border-bottom-1-solid-D9D9D9">
                                <p class="aim-text font-18 fw-400"></p>
                            </td>
                            <td>
                                <img class="aim-img" src="" alt="">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-bottom-1-solid-D9D9D9">
                                <p class="aim-id font-20 fw-600"></p>
                            </td>
                            <td class="border-bottom-1-solid-D9D9D9">
                                <p class="aim-text font-18 fw-400"></p>
                            </td>
                            <td>
                                <img class="aim-img" src="" alt="">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-bottom-1-solid-D9D9D9">
                                <p class="aim-id font-20 fw-600"></p>
                            </td>
                            <td class="border-bottom-1-solid-D9D9D9">
                                <p class="aim-text font-18 fw-400"></p>
                            </td>
                            <td>
                                <img class="aim-img" src="" alt="">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-bottom-1-solid-D9D9D9">
                                <p class="aim-id font-20 fw-600"></p>
                            </td>
                            <td class="border-bottom-1-solid-D9D9D9">
                                <p class="aim-text font-18 fw-400"></p>
                            </td>
                            <td>
                                <img class="aim-img" src="" alt="">
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>       
    </div>
    <div id="additional">
        <img src="../assets/icons/header/logo white.png" alt="">
        <br><br><br>
        <p class="color-white font-34 fw-700 ptb-20">Наши партнеры довольны нами</p>
        <svg height="10" width="500">
            <line x1="0" y1="0" x2="400" y2="0" style="stroke: white; stroke-width: 5px;" />
        </svg>
        <p class="color-white font-20 fw-500 ptb-20">Если вас заинтересовали наши услуги, станьте нашим<br> партнером и получите премиальные услуги</p>
    </div>
    <div class="container">
        <div id="history" class="mtb-60">
            <img src="../assets/icons/header/header-logo-1.png" alt="">
            <p class="font-34 fw-700 ptb-20">История</p>
            <div class="flex-div">
                <div>
                    <img id="history-img" src="" alt="" width="400">
                </div>
                <div class="ml-100">
                    <p id="history-year" class="font-45 fw-700 pb-20"></p>
                    <p id="history-text" class="font-17 fw-400 ptb-20"></p>
                    <br><br><br><br><br>
                    <span class="font-45 fw-700 mr-40 color-28C79E pointer">2017</span>
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
    name: 'Home',
    components: {Header, Footer},
    data() {
        return {
            lang: '',
            content: [],
            contentNo: 1
        }
    },
    methods: {
        showContent(num) {
            this.contentNo = num;
            document.querySelectorAll('.circle').forEach(elem => {
                elem.src = "./src/assets/icons/slideshow/unfilled.png";
            });
            document.querySelectorAll('.circle')[num - 1].src = "./src/assets/icons/slideshow/filled.png";
        },
        setAboutHeader(data)
        {
            document.getElementById("about-header").innerHTML = data;
        },
        setAboutText(data)
        {
            document.getElementById("about-text").innerHTML = data;
        },
        setAboutImg(data)
        {
            document.getElementById("about-img").src = 'https://back.alfabestservis.uz/storage/' + data;
        },
        getAboutData() {
            var config = {};
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
            API.get('/api/about_company', config)
                .then(data => {
                    console.log(data.data);
                    if(this.lang == 'ru') {
                        this.setAboutHeader(data.data.datas[0].home_title_ru);
                        this.setAboutText(data.data.datas[0].home_text_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setAboutHeader(data.data.datas[0].home_title_uz);
                        this.setAboutText(data.data.datas[0].home_text_uz);
                    }
                    this.setAboutImg(data.data.datas[0].home_image);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        setAimsHeader(data) {
            document.getElementById('aims-header').innerHTML = data;
        },
        setAimsText(data) {
            document.getElementById('aims-text').innerHTML = data;
        },
        getAimsData() {
            var config = {};
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
            API.get('/api/aim', config)
                .then(data => {
                    console.log(data.data);
                    if(this.lang == 'ru') {
                        this.setAimsHeader(data.data.datas[0].title_ru);
                        this.setAimsText(data.data.datas[0].text_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setAimsHeader(data.data.datas[0].title_uz);
                        this.setAimsText(data.data.datas[0].text_uz);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        setAimId(id) {
            document.getElementsByClassName('aim-id')[id-1].innerHTML = '0' + id.toString();
        },
        setAimText(id, data) {
            document.getElementsByClassName('aim-text')[id-1].innerHTML = data;
        },
        setAimImg(id, data) {
            document.getElementsByClassName('aim-img')[id-1].src = 'https://back.alfabestservis.uz/storage/' + data;
        },
        getAimData() {
            var config = {};
            if(this.lang == 'ru')
            {
                var config = {
                    headers: {'Accept-Language': 'ru'}
                };
            }
            if(this.lang == 'uz')
            {
                var config = {
                    headers: {'Accept-Language': 'uz'}
                };
            }
            API.get('/api/aim_category', config)
                .then(data => {
                    console.log(data.data);
                    data.data.datas.forEach(elem => {
                        this.setAimId(elem.id);
                        if(this.lang == 'ru')
                        {
                            this.setAimText(elem.id, elem.text_ru);
                        }
                        if(this.lang == 'uz')
                        {
                            this.setAimText(elem.id, elem.text_uz);
                        }
                        this.setAimImg(elem.id, elem.image);
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getHistoryImg(data) {
            document.getElementById('history-img').src = 'https://back.alfabestservis.uz/storage/' + data;
        },
        getHistoryYear(data) {
            document.getElementById('history-year').innerHTML = data;
        },
        getHistoryText(data) {
            document.getElementById('history-text').innerHTML = data;
        },
        getHistoryData(year) {
            var config = {};
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
            API.get('/api/history', config)
                .then(data => {
                    console.log(data.data);
                    this.getHistoryImg(data.data.datas.find(x => x.year == year).image);
                    this.getHistoryYear(data.data.datas.find(x => x.year == year).year);
                    if(this.lang == 'ru')
                    {
                        this.getHistoryText(data.data.datas.find(x => x.year == year).text_ru);
                    }
                    if(this.lang == 'uz')
                    {
                        this.getHistoryText(data.data.datas.find(x => x.year == year).text_uz);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        setHomeContent(id, img, text, link) {
            var obj = {
                id: id,
                img: img,
                text: text,
                link: link
            };
            this.content.push(obj);
        },
        getHomeContentData() {
            var config = {};
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
            API.get('/api/home_content', config)
                .then(res => {
                    console.log(res.data);
                    this.content = [];
                    res.data.datas.forEach(elem => {
                        if(this.lang == 'ru') {
                            this.setHomeContent(elem.id, elem.img, elem.text_ru, elem.home_service_link);
                        }
                        if(this.lang == 'uz') {
                            this.setHomeContent(elem.id, elem.img, elem.text_uz, elem.home_service_link);
                        }
                    });
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
        this.getAboutData();
        this.getAimsData();
        this.getAimData();
        this.getHistoryData(2017);
        this.getHomeContentData();
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
#additional {
    background-image: url('../assets/img/additional/home.png');
    background-repeat: no-repeat;
    height: 600px;
    padding: 20px 80px;
}
table, table td {
    border-collapse: collapse;
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

.p-10-15 {
    padding: 10px 15px;
}

.br-45 {
    border-radius: 45px;
}

.ml-50 {
    margin-left: 50px;
}

.mtb-40 {
    margin: 40px 0;
}

.pointer {
    cursor: pointer;
}

.width-40pc {
    width: 40%;
}

.border-bottom-1-solid-D9D9D9 {
    border-bottom: 1px solid #D9D9D9;
}

.pr-10 {
    padding-right: 10px;
}

.ml-100 {
    margin-left: 100px;
}

.font-45 {
    font-size: 45px;
}

.pb-20 {
    padding-bottom: 20px;
}

.mr-40 {
    margin-right: 40px;
}
</style>