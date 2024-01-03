<template>
  <div id="footer">
    <div class="flex-div">
      <div>
        <img src="./../assets/img/footer/logo.png" alt="">
      </div>
      <div>
        <RouterLink to="/career">{{ homeMenu.carrier }}</RouterLink><br><br>
        <RouterLink to="/purchases">{{ homeMenu.purchase }}</RouterLink><br><br>
        <RouterLink to="/about">{{ homeMenu.about }}</RouterLink><br><br>
        <RouterLink to="/contacts">{{ homeMenu.contacts }}</RouterLink><br><br>
        <RouterLink to="/cooperation">{{ homeMenu.cooperation }}</RouterLink>
      </div>
      <div>
        <RouterLink to="/engineering">{{ homeService.engineering }}</RouterLink><br><br>
        <RouterLink to="/household">{{ homeService.household }}</RouterLink><br><br>
        <RouterLink to="/catering">{{ homeService.catering }}</RouterLink><br><br>
        <RouterLink to="/transportation">{{ homeService.transportation }}</RouterLink>
      </div>
      <div>
        <p>Подисывайтесь на нас</p>
        <br />
        <img src="./../assets/icons/footer/telegram.png" alt="">
        <img src="./../assets/icons/footer/ri_instagram-fill.png" alt="">
        <img src="./../assets/icons/footer/ic_outline-facebook.png" alt="">
      </div>
    </div>
    <br>
    <br>
    <hr>
    <div class="flex-div">
      <div>
        <img src="./assets/img/footer/Group.png" alt="">
      </div>
      <div>
        <a href="">Помощь</a>&nbsp;&nbsp;&nbsp;
        <a href="">Стань частью нашей команды</a>
      </div>
    </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';
import API from '../api';
import { mapGetters } from 'vuex';

export default {
    name: 'Footer',
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
        };
    },
    methods: {
        setHomeMenu(id, link, title) {
            switch (id) {
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
        setHomeService(id, link, title) {
            switch (id) {
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
        getMenu() {
            var config = {};
            if (this.lang == 'ru') {
                config = {
                    headers: { 'Accept-Language': 'ru' }
                };
            }
            if (this.lang == 'uz') {
                config = {
                    headers: { 'Accept-Language': 'uz' }
                };
            }
            API.get('api/home_menu', config)
                .then(res => {
                console.log(res.data);
                res.data.datas.forEach(elem => {
                    if (this.lang === 'ru') {
                        this.setHomeMenu(elem.id, elem.link, elem.title_ru);
                    }
                    if (this.lang === 'uz') {
                        this.setHomeMenu(elem.id, elem.link, elem.title_uz);
                    }
                });
            });
            API.get('api/home_service', config)
                .then(res => {
                console.log(res.data);
                res.data.datas.forEach(elem => {
                    if (this.lang === 'ru') {
                        this.setHomeService(elem.id, elem.link, elem.title_ru);
                    }
                    if (this.lang === 'uz') {
                        this.setHomeService(elem.id, elem.link, elem.title_uz);
                    }
                });
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
        this.getMenu();
    },
    components: { RouterLink }
}
</script>

<style scoped>
#footer {
  background-color: #1B2330;
  height: max-content;
  color: white;
  padding: 40px 80px;
}
#footer a {
  text-decoration: none;
  color: white; 
}
.flex-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#footer-top-left {
  width: 60%;
}
</style>