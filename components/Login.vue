<template>
  <div class="login-screen">
    <div class="login-screen-top">
      <p>ログイン画面</p>
      <span @click="closeModalLogin()">
        <fa :icon="faTimesCircle" class="icon-close fa-2x" />
      </span>
    </div>
    <div class="login-screen-main">
      <div class="login-screen-main-inner">
        <div class="inner-email">
          <label for="email">メールアドレス</label>
        </div>
        <div class="email-input">
          <fa :icon="faEnvelope" class="inner-icon" />
          <input id="email" v-model="userDate.email" type="email" />
        </div>

        <div class="inner-password">
          <label for="password">パスワード</label>
        </div>
        <div class="password-input">
          <fa :icon="faLock" class="inner-icon" />
          <input id="password" v-model="userDate.password" type="password" />
        </div>
      </div>
      <div class="wrapper-btn">
        <button @click="login()">ログイン</button>
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
    return {
      userDate: {
        email: '',
        password: '',
      },
    }
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
  methods: {
    closeModalLogin() {
      this.$store.commit('changeStateModalLogin')
    },
    login() {
      this.$store.dispatch('userLogin', {
        email: this.userDate.email,
        password: this.userDate.password,
      })
    },
  },
}
</script>

<style scoped>
.login-screen-top {
  background-color: #9de0b8;
  border-radius: 43px 43px 0px 0px;
  width: 570px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.login-screen-top p {
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

.login-screen-main {
  background-color: #ffffff;
  width: 570px;
  height: 380px;
  border-radius: 0px 0px 43px 43px;
}

.login-screen-main-inner {
  width: 75%;
  margin: auto;
}

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
  background-color: #9de0b8;
  padding: 18px 23px;
  border-radius: 30px;
}
</style>
