<template>
    <Header></Header>
    <div class="container">
        <p id="purchases-title" class="font-45 fw-700 ptb-20"></p>
        <p id="purchases-text" class="font-18 fw-400 ptb-20"></p>
        <div class="flex-div overflow-x-scroll">
            <div v-for="(item, index) in images" :key="index">
                <img :src="item" alt="">
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
    name: 'Purchases',
    components: {Header, Footer},
    data() {
        return {
            images: [],
            lang: ''
        }
    },
    methods: {
        setPurchasesTitle(data) {
            document.getElementById("purchases-title").innerHTML = data;
        },
        setPurchasesText(data) {
            document.getElementById("purchases-text").innerHTML = data;
        },
        setPurchasesImages(data) {
            var arr = JSON.parse(data);
            arr = arr.map(function(elem) {return 'https://back.alfabestservis.uz/storage/' + elem});
            this.images = arr;
        },
        getPurchasesData() {
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
            API.get('/api/purchase', config)
                .then(res => {
                    console.log(res.data);
                    if(this.lang == 'ru') {
                        this.setPurchasesTitle(res.data.datas[0].title_ru);
                        this.setPurchasesText(res.data.datas[0].text_ru);
                    }
                    if(this.lang == 'uz') {
                        this.setPurchasesTitle(res.data.datas[0].title_uz);
                        this.setPurchasesText(res.data.datas[0].text_uz);
                    }
                    this.setPurchasesImages(res.data.datas[0].images);
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
        this.getPurchasesData();
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