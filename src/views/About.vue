<template>
    <Header></Header>
    <div class="container">
        <div id="main" class="mtb-60">
            <div id="main-img" style="position: relative; border-radius: 40px;">
                <div style="position: absolute; bottom: 0; left: 0;">
                    <p id="main-title" class="font-36 fw-700 color-white m-20"></p>
                </div>
            </div>
            <p id="main-text" class="font-17 fw-400"></p>
        </div>
        <div id="mission" class="mtb-60">
            <img src="../assets/icons/header/header-logo-1.png" alt="">
            <div class="flex-div" style="align-items: center;">
                <div style="width: 120%;">
                    <p id="mission-title" class="font-34 fw-700 mtb-20"></p>
                    <p id="mission-text" class="font-17 fw-400 ptb-20"></p>
                </div>
                <div>
                    <p id="mission-subtitle" class="font-30 fw-700 p-20-40"></p>
                </div>
            </div>
        </div>
        <div id="services" class="mtb-60">
            <table class="width-100pc table-layout-fixed">
                <tr>
                    <td>
                        <div class="flex-div">
                            <div class="flex-column-div">
                                <div>
                                    <p class="font-24 fw-600">Инженерно-техническая<br>эксплуатация</p>
                                </div>
                                <div>
                                    <RouterLink to="/engineering" style="text-decoration: none;"><p class="font-17 fw-500" style="color: black; text-decoration: none;">Подробно →</p></RouterLink>
                                </div>
                            </div>
                            <div>
                                <img src="../assets/img/service-table/img 1.png" alt="">
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-div">
                            <div class="flex-column-div">
                                <div>
                                    <p class="font-24 fw-600">Сервисное и бытовое<br>обслуживание</p>
                                </div>
                                <div>
                                    <RouterLink to="/household" style="text-decoration: none;"><p class="font-17 fw-500" style="color: black; text-decoration: none;">Подробно →</p></RouterLink>
                                </div>
                            </div>
                            <div>
                                <img src="../assets/img/service-table/img 2.png" alt="">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="flex-div">
                            <div class="flex-column-div">
                                <div>
                                    <p class="font-24 fw-600">Корпоративное питание</p>
                                </div>
                                <div>
                                    <RouterLink to="/catering" style="text-decoration: none;"><p class="font-17 fw-500" style="color: black; text-decoration: none;">Подробно →</p></RouterLink>
                                </div>
                            </div>
                            <div>
                                <img src="../assets/img/service-table/img 3.png"  style="width: 95%;" alt="">
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-div">
                            <div class="flex-column-div">
                                <div>
                                    <p class="font-24 fw-600">Транспортные и пассажирский перевозки</p>
                                </div>
                                <div>
                                    <RouterLink to="/transportaion" style="text-decoration: none;"><p class="font-17 fw-500" style="color: black; text-decoration: none;">Подробно →</p></RouterLink>
                                </div>
                            </div>
                            <div>
                                <img src="../assets/img/service-table/img 4.png" alt="">
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="team" class="mtb-60">
            <img src="../assets/icons/header/header-logo-1.png" alt="">
            <div class="flex-div" style="align-items: center;">
                <p class="font-34 fw-700 mtb-20">Наша команда</p>
                <div>
                    <button @click="scrollEmployess('left')" style="width: 50px; border-radius: 50px; height: 50px; background-color: white; border: 1px solid gray;"><img src="../assets/icons/slideshow/left.png" alt=""></button>
                    &nbsp;&nbsp;&nbsp;
                    <button @click="scrollEmployess('right')" style="width: 50px; border-radius: 50px; height: 50px; background-color: white; border: 1px solid gray;"><img src="../assets/icons/slideshow/right.png" alt=""></button>
                </div>
            </div>
            <div id="employees" class="flex-div" style="overflow-x: hidden; gap: 20px;">
                <div v-for="(item, index) in employees" :key="index">
                    <img :src="item.photo" alt="">
                    <p>{{ item.name }}</p>
                    <p>{{ item.position }}</p>
                </div>
            </div>
        </div>
    </div>
    <div id="additional">
        <img src="../assets/icons/header/logo white.png" alt="">
        <br><br><br>
        <p class="color-white font-34 fw-700 ptb-20">Мы с нашими партнерами уже пять лет</p>
        <svg height="10" width="500">
            <line x1="0" y1="0" x2="400" y2="0" style="stroke: white; stroke-width: 5px;" />
        </svg>
        <p class="color-white font-20 fw-500 ptb-20">Мы успешно работаем с нашими партнерами уже пять<br> лет. Теперь у нас более 10 клиентов, и вы также можете<br> сотрудничать с нами.</p>
    </div>
    <div class="container">
        <div id="gallery">
            <img src="../assets/icons/header/header-logo-1.png" alt="">
            <div class="flex-div" style="align-items: center;">
                <p class="font-34 fw-700 mtb-20">Фотогалерея</p>
                <div>
                    <button @click="scrollGallery('left')" style="width: 50px; border-radius: 50px; height: 50px; background-color: white; border: 1px solid gray;"><img src="../assets/icons/slideshow/left.png" alt=""></button>
                    &nbsp;&nbsp;&nbsp;
                    <button @click="scrollGallery('right')" style="width: 50px; border-radius: 50px; height: 50px; background-color: white; border: 1px solid gray;"><img src="../assets/icons/slideshow/right.png" alt=""></button>
                </div>
            </div>
            <div id="gallery-photos" class="flex-div" style="overflow-x: hidden; gap: 20px;">
                <div v-for="(item, index) in gallery" :key="index">
                    <img :src="item.photo" alt="" style="height: 300px; border-radius: 20px;">
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
    name: 'About',
    components: {Header, Footer},
    data() {
        return {
            lang: '',
            employees: [],
            gallery: []
        }
    },
    methods: {
        setMainImg(data) {
            var url = 'https://back.alfabestservis.uz/storage/' + data;
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
            API.get('/api/about_company', config)
                .then(data => {
                    console.log(data.data);
                    this.setMainImg(data.data.datas[0].image);
                    if(this.lang == 'ru') {
                        this.setMainTitle(data.data.datas[0].title_ru)
                        this.setMainText(data.data.datas[0].text_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setMainTitle(data.data.datas[0].title_uz)
                        this.setMainText(data.data.datas[0].text_uz);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        setMissionTitle(data) {
            document.getElementById('mission-title').innerHTML = data;
        },
        setMissionText(data) {
            document.getElementById('mission-text').innerHTML = data;
        },
        setMissionSubtitle(data) {
            document.getElementById('mission-subtitle').innerHTML = data;
        },
        getMissionData() {
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
            API.get('/api/mission', config)
                .then(data => {
                    console.log(data.data);
                    if(this.lang == 'ru') {
                        this.setMissionTitle(data.data.datas[0].title_ru);
                        this.setMissionText(data.data.datas[0].text_ru);
                        this.setMissionSubtitle(data.data.datas[0].subtitle_ru);    
                    }
                    if(this.lang == 'uz') {
                        this.setMissionTitle(data.data.datas[0].title_uz);
                        this.setMissionText(data.data.datas[0].text_uz);
                        this.setMissionSubtitle(data.data.datas[0].subtitle_uz);    
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        scrollEmployess(dir) {
            var div = document.getElementById("employees");
            switch(dir) {
                case 'left':
                    div.scrollBy({
                        top: 0,
                        left: -150,
                        behavior: "smooth"
                    });
                    break;
                case 'right':
                    div.scrollBy({
                        top: 0,
                        left: 150,
                        behavior: "smooth"
                    });
                    break;
            }
        },
        setEmployee(photo, name, position) {
            var obj = {
                photo: 'https://back.alfabestservis.uz/storage/' + photo,
                name: name,
                position: position
            }
            this.employees.push(obj);
        },
        getTeamData() {
            var config = {};
            if(this.lang =='ru') {
                var config = {
                    headers: {'Accept-Language': 'ru'}
                };    
            }
            if(this.lang == 'uz') {
                var config = {
                    headers: {'Accept-Language': 'uz'}
                };
            }
            API.get('/api/team', config)
                .then(data => {
                    console.log(data.data);
                    data.data.datas.forEach(element => {
                        if(this.lang == 'ru') {
                            this.setEmployee(element.photo, element.full_name, element.position_ru);
                        }
                        if(this.lang == 'uz') {
                            this.setEmployee(element.photo, element.full_name, element.position_uz);
                        }
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        },
        scrollGallery(dir) {
            var div = document.getElementById("gallery-photos");
            switch(dir) {
                case 'left':
                    div.scrollBy({
                        top: 0,
                        left: -250,
                        behavior: "smooth"
                    });
                    break;
                case 'right':
                    div.scrollBy({
                        top: 0,
                        left: 250,
                        behavior: "smooth"
                    });
                    break;
            }
        },
        setGalleryImg(photo) {
            var obj = {
                photo: 'https://back.alfabestservis.uz/storage/' + photo
            }
            this.gallery.push(obj);
        },
        getGalleryData() {
            var config = {};
            if(this.lang == 'ru') {
                config = {
                    headers: {'Accept-Language': 'ru'}
                };    
            }
            if(this.lang =='uz') {
                config = {
                    headers: {'Accept-Language': 'uz'}
                };
            }
            API.get('/api/photo_gallery', config)
                .then(data => {
                    console.log(data.data);
                    data.data.datas.forEach(elem => {
                        this.setGalleryImg(elem.image);
                    });
                })
                .catch(error => {
                    console.log(error);
                });
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
        this.getMissionData();
        this.getTeamData();
        this.getGalleryData();
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

table td {
    padding: 20px;
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
</style>