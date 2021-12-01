<template>
  <div class="header">
    <div class="header-title">
      <NuxtLink to="/">
        <h1>音サポ</h1>
      </NuxtLink>
    </div>
    <ul v-if="!isAuthenticated">
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
        <p>{{ userName }} 様</p>
      </li>
    </ul>
    <ul v-if="isAuthenticated">
      <li>
        <button class="btn btn-post" @click="openModalPost()">投稿する</button>
      </li>
      <li>
        <button class="btn btn-mypage" @click="myPageTransition()">
          Mypage
        </button>
      </li>
      <li>
        <p>{{ userName }} 様</p>
      </li>
    </ul>
    <Modal v-if="isModalLogin">
      <Login />
    </Modal>
    <Modal v-if="isModalRegister">
      <Register />
    </Modal>
    <Modal v-if="isModalPost">
      <Post />
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
    isModalPost() {
      return this.$store.getters.getModalStatePost
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
    userName() {
      return this.$store.getters.getLoginUserName
    },
  },

  methods: {
    openModalRegister() {
      this.$store.commit('changeStateModalRegister')
    },
    openModalLogin() {
      this.$store.commit('changeStateModalLogin')
    },
    openModalPost() {
      this.$store.commit('changeStateModalPost')
    },
    myPageTransition() {
      this.$router.push('/my_page')
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
  border: 2px solid rgb(237, 215, 215);
}

.btn-post {
  color: white;
  background-color: #86ccf8;
  border: 2px solid white;
}

.btn-login,
.btn-mypage {
  color: black;
  background-color: white;
  border: 1px solid black;
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
