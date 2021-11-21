<template>
  <div class="header">
    <div class="header-title">
      <NuxtLink to="/">
        <h1>音サポ</h1>
      </NuxtLink>
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
        <p @click="myPageTransition()">{{ userName }} 様</p>
      </li>
    </ul>
    <Modal v-if="isModalLogin">
      <Login />
    </Modal>
    <Modal v-if="isModalRegister">
      <Register />
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    isModalRegister() {
      return this.$store.getters.getModalStateRegister
    },
    isModalLogin() {
      return this.$store.getters.getModalStateLogin
    },
    userName() {
      return this.$store.getters.getLoginUserName
    },
  },

  methods: {
    openModalRegister() {
      this.$store.commit('openModalRegister')
    },
    openModalLogin() {
      this.$store.commit('openModalLogin')
    },
    myPageTransition() {
      if (!this.$store.getters.getAuthUserUid) {
        alert('ログインするとMyPageに遷移します')
      } else {
        this.$router.push('/my_page')
      }
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
  cursor: pointer;
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
