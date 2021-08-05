<template>
  <div>
    <div class="search-result-screen">
      <div class="search-result-screen-top">
        <p>検索結果</p>
        <span @click="$emit('componentCloseModalSerchResult')">
          <fa :icon="faTimesCircle" class="icon-close fa-2x" />
        </span>
      </div>
      <div class="search-result-screen-main">
        <div class="wrapper-btn">
          <button>OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {}
  },
  computed: {
    faTimesCircle() {
      return faTimesCircle
    },
  },
  methods: {},
}
</script>

<style scoped>
.search-result-screen-top {
  background-color: #ff5c4e;
  border-radius: 43px 43px 0px 0px;
  width: 570px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.search-result-screen-top p {
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

.search-result-screen-main {
  background-color: #ffffff;
  width: 570px;
  height: 600px;
  border-radius: 0px 0px 43px 43px;
}

.wrapper-btn {
  padding-top: 30px;
  text-align: center;
}

button {
  color: white;
  font-size: 1.5rem;
  background-color: #ff5c4e;
  padding: 18px 23px;
  border-radius: 30px;
}
</style>
