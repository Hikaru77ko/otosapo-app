<template>
  <div>
    <div class="header">
      <div class="header-title">
        <NuxtLink to="/">
          <h1>音サポ</h1>
        </NuxtLink>
      </div>
      <ul>
        <li>
          <button class="btn btn-logout" @click="logout()">ログアウト</button>
        </li>
        <li>
          <p class="btn-delete-account">アカウント削除</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style scoped>
h1 {
  color: white;
  font-size: 60px;
}

.btn {
  width: 150px;
  height: 44px;
  font-size: 20px;
  margin-right: 26px;
  border-radius: 10px;
}

.btn-delete-account {
  color: white;
  cursor: pointer;
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
  align-items: baseline;
}
/* .header ul li:last-child {
  align-self: flex-end;
} */
</style>
