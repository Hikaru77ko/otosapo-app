<template>
  <div class="post-screen">
    <div class="post-screen-top">
      <p>投稿画面</p>
      <span @click="$emit('componentCloseModalPost')">
        <fa :icon="faTimesCircle" class="icon-close fa-2x" />
      </span>
    </div>
    <div class="post-screen-main">
      <div class="post-screen-main-inner">
        <p>楽器選択</p>
        <div class="select">
          <select>
            <option selected disabled>楽器種類</option>
            <option>Guitar</option>
            <option>Bass</option>
            <option>Keyboard</option>
            <option>Drum</option>
          </select>
        </div>
        <div class="inner-serach">
          <label for="serach">YouTube検索</label>
        </div>
        <div class="serach">
          <input id="serach" type="text" />
          <button class="serach-btn" @click="openSerchResult()">
            <fa :icon="faSearch" class="serach-icon" />
          </button>
        </div>
        <div class="inner-title">
          <label for="title">タイトル</label>
        </div>
        <div class="title-input">
          <input id="title" type="text" />
        </div>
        <div class="inner-url">
          <label for="url">URL</label>
        </div>
        <div class="url-input">
          <input id="url" type="text" />
        </div>
        <div class="inner-foot-group">
          <img
            src="https://placehold.jp/ffffff/8a8a8a/208x100.png?text=IMAGE"
            alt="画像が入ります"
          />
          <textarea cols="30" rows="10" placeholder="オススメの理由"></textarea>
        </div>
      </div>
      <div class="wrapper-btn">
        <button class="post-btn">投稿</button>
      </div>
    </div>
    <Modal v-if="serchResults">
      <SearchResults @componentCloseModalSerchResult="closeSerchResult()" />
    </Modal>
  </div>
</template>

<script>
import { faTimesCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      serchResults: false,
    }
  },
  computed: {
    faTimesCircle() {
      return faTimesCircle
    },
    faSearch() {
      return faSearch
    },
  },
  methods: {
    openSerchResult() {
      this.serchResults = true
    },
    closeSerchResult() {
      this.serchResults = false
    },
  },
}
</script>

<style scoped>
.post-screen-top {
  background-color: #86ccf8;
  border-radius: 43px 43px 0px 0px;
  width: 570px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.post-screen-top p {
  color: white;
  font-size: 3rem;
}

.icon-close {
  cursor: pointer;
  color: rgba(225, 223, 223, 0.954);
  position: absolute;
  transform: translateY(-50%);
  right: 10%;
}

.post-screen-main {
  background-color: #ffffff;
  width: 570px;
  height: 900px;
  border-radius: 0px 0px 43px 43px;
  padding-top: 50px;
}

.post-screen-main-inner {
  width: 75%;
  margin: auto;
}

.post-screen-main-inner p,
label {
  font-size: 1.4rem;
  color: #280000;
}

.serach {
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  border: 1px solid #707070;
  border-radius: 12px;
}

.select {
  width: 100%;
  height: 55px;
  border: 1px solid #707070;
  border-radius: 12px;
  position: relative;
  z-index: 1;
  padding-left: 15px;
}

.select::after {
  position: absolute;
  content: '';
  width: 8px;
  height: 8px;
  right: 18px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-bottom: 3px solid #282727;
  border-right: 3px solid #282727;
  z-index: -1;
}

select {
  font-size: 1.3rem;
  outline: none;
}

option[selected][disabled] {
  display: none;
}

.serach-icon {
  height: 30px;
  width: 30px;
  padding: 5px 5px;
  color: #3a3939;
}

input {
  width: 100%;
  outline: none;
  font-size: 1.3rem;
}

.serach {
  padding-left: 24px;
}

.title-input,
.url-input {
  display: flex;
  align-items: center;
  height: 55px;
  border: 1px solid #707070;
  border-radius: 12px;
  padding-left: 25px;
}

.post-screen-main-inner p,
.inner-serach,
.inner-title,
.inner-url {
  padding-top: 35px;
  padding-bottom: 15px;
  padding-left: 40px;
  position: relative;
}

.post-screen-main-inner p::before {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  content: '必須';
  font-size: 0.5rem;
  color: white;
  background-color: #f4707f;
  position: absolute;
  top: 25px;
  left: 0;
  border-radius: 50%;
}

.inner-title::before {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  content: '必須';
  font-size: 0.5rem;
  color: white;
  background-color: #f4707f;
  position: absolute;
  top: 25px;
  left: 0;
  border-radius: 50%;
}
.inner-url::before {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  content: '必須';
  font-size: 0.5rem;
  color: white;
  background-color: #f4707f;
  position: absolute;
  top: 25px;
  left: 0;
  border-radius: 50%;
}

.wrapper-btn {
  margin-top: 30px;
  text-align: center;
}

.serach-btn {
  background-color: white;
}

.post-btn {
  color: white;
  font-size: 1.3rem;
  background-color: #86ccf8;
  padding: 18px 50px;
  border-radius: 30px;
}

.inner-foot-group {
  padding-top: 60px;
  padding-bottom: 30px;
}

img {
  border: 1px solid#282727;
}

textarea {
  resize: none;
  width: 208px;
  height: 100px;
  border: 1px solid#282727;
}
</style>
