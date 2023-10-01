
<template>
  <header id="header">
    <div class="flex-div" style="align-items: center;">
      <div>
        <img src="./assets/img/header/logo.png" alt="">
      </div>
      <div>
        <nav>
          <ul>
            <li>О компании</li>
            <li>Карьера</li>
            <li>Закупки</li>
            <li>Сотрудничество</li>
            <li>Контакты</li>
            <li>Ru | Uz</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex-div">
      <a href="">Инженерно-техническая эксплуатация</a>
      <a href="">Сервисное и бытовое обслуживание</a>
      <a href="">Копоративное питание</a>
      <a href="">Транспортные перевозки</a>
    </div>
  </header>
  <RouterLink to="/home">Home</RouterLink> 
  <RouterView />
  <footer id="footer">
    <div class="flex-div">
      <div class="flex-div" id="footer-top-left">
        <div>
          <img src="./assets/img/footer/logo.png" alt="">
        </div>
        <div>
          <a href="">Карьера</a><br><br>
          <a href="">Закупки</a><br><br>
          <a href="">О компании</a><br><br>
          <a href="">Наши партнеры</a><br><br>
          <a href="">Контакты</a><br><br>
          <a href="">Сотрудничество</a>
        </div>
        <div>
          <a href="">Сервисное и бытовое обслуживание</a><br><br>
          <a href="">Копоративное питание</a><br><br>
          <a href="">Транспортные перевозки</a><br><br>
          <a href="">Инженерно-техническая эксплуатация</a>
        </div>
      </div>
      <div>
        <p>Подисывайтесь на нас</p>
        <img src="./assets/icons/footer/telegram.png" alt="">
        <img src="./assets/icons/footer/ri_instagram-fill.png" alt="">
        <img src="./assets/icons/footer/ic_outline-facebook.png" alt="">
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
        <a href="">Помощь</a>
        <a href="">Стань частью нашей команды</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>
#header {
  height: max-content;
  padding: 20px 80px;
}
#header ul {
  list-style-type: none;
}
#header ul li {
  display: inline;
  margin-left: 20px;
}
#header a {
  color: black;
  text-decoration: none;
}
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