<template>
  <div class="header">
    <div class="header-title">
      <h1>音サポ</h1>
    </div>
    <ul>
      <li>
        <button class="btn btn-login" @click="openModalLogin()">
          ログイン
        </button>
      </li>
      <li>
        <button class="btn btn-signup" @click="openModalRegister()">
          新規登録
        </button>
      </li>
      <li>
        <p>ゲスト名</p>
      </li>
    </ul>
    <Modal v-if="modalLogin">
      <Login @componentCloseModalLogin="closeModalLogin()" />
    </Modal>
    <Modal v-if="modalRegister">
      <Register @componentCloseModalRegister="closeModalRegister()" />
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalLogin: false,
      modalRegister: false,
    }
  },

  methods: {
    openModalLogin() {
      this.modalLogin = true
    },
    openModalRegister() {
      this.modalRegister = true
    },
    closeModalLogin() {
      this.modalLogin = false
    },
    closeModalRegister() {
      this.modalRegister = false
    },
  },
}
</script>

<style scoped>
h1 {
  color: white;
  font-size: 60px;
}

p {
  color: white;
}

.btn {
  width: 150px;
  height: 44px;
  font-size: 20px;
  margin-right: 26px;
  border-radius: 10px;
}

.btn-signup {
  color: white;
  background-color: #f4707f;
  border: 3px dotted rgb(237, 215, 215);
}

.header {
  width: 100%;
  height: 129px;
  background-color: #4b4b4b;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.header ul {
  display: flex;
}
.header ul li:last-child {
  align-self: flex-end;
}
</style>
