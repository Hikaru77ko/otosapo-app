<template>
  <div>
    <Header />
    <div class="main">
      <div class="main-boder">
        <div class="main-line">
          <h2 class="main-text">
            音サポはこれから楽器をはじめる人に向けて、経験者が勧める楽器練習動画を、共有できるサイトとなってます。
          </h2>
        </div>
      </div>
    </div>
    <h3 class="heading">楽器別の投稿</h3>
    <div class="wrapper-postcard">
      <NuxtLink to="/guitar_posting_page">
        <div class="card guiter">
          <div class="card-img"></div>
          <div class="card-content">
            <h4 class="card-title">Guiter</h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/bass_posting_page">
        <div class="card bass">
          <div class="card-img"></div>
          <div class="card-content">
            <h4 class="card-title">Bass</h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/keyboard_posting_page">
        <div class="card keyboard">
          <div class="card-img"></div>
          <div class="card-content">
            <h4 class="card-title">Keyboard</h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/drum_posting_page">
        <div class="card drum">
          <div class="card-img"></div>
          <div class="card-content">
            <h4 class="card-title">Drum</h4>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 630px;
  background-color: #f8c564;
  position: relative;
}

.main-boder {
  height: 60%;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border: solid 4px black;
}

.main-line {
  height: 99%;
  width: 99%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border: dashed 2px black;
}

.main-text {
  text-align: center;
  font-size: 25px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 40px;
}

.heading {
  width: 50%;
  color: #4b4b4b;
  text-align: center;
  font-size: 48px;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 200px;
  box-shadow: inset 0 -0.3em #dadddf;
}

.wrapper-postcard {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 200px;
  display: flex;
  justify-content: space-between;
}

.card.guiter {
  width: 220px;
  background: #86ccf8;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card.bass {
  width: 220px;
  background: #9de0b8;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card.keyboard {
  width: 220px;
  background: #fd977f;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card.drum {
  width: 220px;
  background: #f8b464;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}

.card-img {
  border-radius: 5px 5px 0 0;
  background-color: rgb(245, 244, 230);
  max-width: 100%;
  height: 170px;
}

.card-content {
  height: 50px;
  line-height: 50px;
}

.card-title {
  font-size: 25px;
  text-align: center;
  color: rgb(245, 245, 245);
}
</style>
