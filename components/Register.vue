<template>
  <div class="register-screen">
    <div class="register-screen-top">
      <p>登録画面</p>
      <span @click="$emit('componentCloseModalRegister')">
        <fa :icon="faTimesCircle" class="icon-close fa-2x" />
      </span>
    </div>
    <div class="register-screen-main">
      <div class="register-screen-main-inner">
        <div class="inner-username">
          <label for="username">ユーザー名</label>
        </div>
        <div class="username-input">
          <fa :icon="faUser" class="inner-icon" />
          <input id="username" type="text" />
        </div>

        <div class="inner-email">
          <label for="email">メールアドレス</label>
        </div>
        <div class="email-input">
          <fa :icon="faEnvelope" class="inner-icon" />
          <input id="email" type="email" />
        </div>

        <div class="inner-password">
          <label for="password">パスワード</label>
        </div>
        <div class="password-input">
          <fa :icon="faLock" class="inner-icon" />
          <input id="password" type="password" />
        </div>
      </div>
      <div class="wrapper-btn">
        <button>登録（無料）</button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  faTimesCircle,
  faUser,
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {}
  },
  computed: {
    faTimesCircle() {
      return faTimesCircle
    },
    faUser() {
      return faUser
    },
    faEnvelope() {
      return faEnvelope
    },
    faLock() {
      return faLock
    },
  },
  methods: {},
}
</script>

<style scoped>
.register-screen-top {
  background-color: #f4707f;
  border-radius: 43px 43px 0px 0px;
  width: 570px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.register-screen-top p {
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

.register-screen-main {
  background-color: #ffffff;
  width: 570px;
  height: 510px;
  border-radius: 0px 0px 43px 43px;
}

.register-screen-main-inner {
  width: 75%;
  margin: auto;
}

.username-input,
.email-input,
.password-input {
  display: flex;
  align-items: center;
  height: 55px;
  border: 1px solid #707070;
  border-radius: 12px;
}

.inner-icon {
  height: 30px;
  width: 30px;
  padding: 5px 5px;
  color: #cecaca;
}

input {
  width: 100%;
  outline: none;
  font-size: 1.3rem;
}

.inner-username,
.inner-email,
.inner-password {
  padding-top: 30px;
  padding-bottom: 15px;
}

label {
  font-size: 1.2rem;
}

.wrapper-btn {
  margin-top: 30px;
  text-align: center;
}

button {
  color: white;
  font-size: 1.5rem;
  background-color: #f4707f;
  padding: 20px 23px;
  border-radius: 30px;
}
</style>
