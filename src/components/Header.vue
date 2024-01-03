<template>
    <div class="container">
        <div class="flex-div" style="align-items: center;">
            <div>
                <RouterLink to="/"><img src="../assets/img/header/logo.png" alt=""></RouterLink>
            </div>
            <div>
                <nav>
                <ul>
                    <li><RouterLink to="/about">{{ homeMenu.about }}</RouterLink></li>
                    <li><RouterLink to="/career">{{ homeMenu.carrier }}</RouterLink></li>
                    <li><RouterLink to="/purchases">{{ homeMenu.purchase }}</RouterLink></li>
                    <li><RouterLink to="/cooperation">{{ homeMenu.cooperation }}</RouterLink></li>
                    <li><RouterLink to="/contacts">{{ homeMenu.contacts }}</RouterLink></li>
                    <li><span @click="setRu()" class="pointer">Ru</span> | <span @click="setUz()" class="pointer">Uz</span></li>
                </ul>
                </nav>
            </div>
        </div>
        <div class="flex-div">
            <li><RouterLink to="/engineering">{{ homeService.engineering }}</RouterLink></li>
            <li><RouterLink to="/household">{{ homeService.household }}</RouterLink></li>
            <li><RouterLink to="/catering">{{ homeService.catering }}</RouterLink></li>
            <li><RouterLink to="/transportation">{{ homeService.transportation }}</RouterLink></li>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import API from '../api';

export default {
    name: 'Header',
    components: {},
    data() {
        return {
            lang: '',
            homeMenu: {
                about: '',
                carrier: '',
                purchase: '',
                cooperation: '',
                contacts: ''
            },
            homeService: {
                engineering: '',
                household: '',
                catering: '',
                transportation: ''
            }
        }
    },
    methods: {
        ...mapActions(['setLang']),
        setHomeMenu(id, link, title) {
            switch(id) {
                case 1:
                    this.homeMenu.about = title;
                    break;
                case 2:
                    this.homeMenu.carrier = title;
                    break;
                case 3:
                    this.homeMenu.purchase = title;
                    break;
                case 4:
                    this.homeMenu.cooperation = title;
                    break;
                case 5:
                    this.homeMenu.contacts = title;
                    break;
            }
        },
        setHomeService(id ,link, title) {
            switch(id) {
                case 1:
                    this.homeService.engineering = title;
                    break;
                case 2:
                    this.homeService.household = title;
                    break;
                case 3:
                    this.homeService.catering = title;
                    break;
                case 4:
                    this.homeService.transportation = title;
                    break;
            }
        },
        setRu() {
            this.setLang(0);
            window.location.reload();
        },
        setUz() {
            this.setLang(1);
            window.location.reload();
        },
        getMenu() {
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
            API.get('api/home_menu', config)
                .then(res => {
                    console.log(res.data);
                    res.data.datas.forEach(elem => {
                        if(this.lang === 'ru') {
                            this.setHomeMenu(elem.id, elem.link, elem.title_ru)
                        }
                        if(this.lang === 'uz') {
                            this.setHomeMenu(elem.id, elem.link, elem.title_uz)
                        }    
                    });
                });
            API.get('api/home_service', config)
                .then(res => {
                    console.log(res.data);
                    res.data.datas.forEach(elem => {
                        if(this.lang === 'ru') {
                            this.setHomeService(elem.id, elem.link, elem.title_ru)
                        }
                        if(this.lang === 'uz') {
                            this.setHomeService(elem.id, elem.link, elem.title_uz)
                        }
                    });
                })
        }
    },
    computed: {
        ...mapGetters(['getSelectedLang']),
        getLang() {
            var lang = this.getSelectedLang;
            this.lang = lang;
            this.getMenu();
        }
    },
    mounted() {
        this.getLang;
        this.getMenu();
    }
}
</script>

<style scoped>
.container {
  height: max-content;
  margin: 30px 0;
  padding: 0px 80px;
}
.container ul {
  list-style-type: none;
}
.container ul li {
  display: inline;
  margin-left: 20px;
}
.container a {
  color: black;
  text-decoration: none;
}
.flex-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.flex-div li {
    list-style-type: none;
}

.pointer {
    cursor: pointer;
}
</style>