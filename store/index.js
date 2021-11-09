export const state = () => ({
  modal: {
    isModalRegister: false,
    isModalLogin: false,
  },
  userData: {
    uid: '',
    userName: 'ゲスト',
  },
})

export const getters = {
  getModalStateRegister(state) {
    return state.modal.isModalRegister
  },
  getModalStateLogin(state) {
    return state.modal.isModalLogin
  },
  getLoginUserName(state) {
    return state.userData.userName
  },
}

export const mutations = {
  openModalRegister(state) {
    state.modal.isModalRegister = true
  },

  closeModalRegister(state) {
    state.modal.isModalRegister = false
  },

  openModalLogin(state) {
    state.modal.isModalLogin = true
  },

  closeModalLogin(state) {
    state.modal.isModalLogin = false
  },
  setUserName(state, name) {
    state.userData.userName = name
  },
  setUserUid(state, userUid) {
    state.userData.uid = userUid
  },
}

export const actions = {
  // ユーザー登録処理
  async createUserData({ commit, dispatch }, payload) {
    try {
      const registerUserData =
        await this.$fire.auth.createUserWithEmailAndPassword(
          payload.email,
          payload.password
        )
      // ユーザー名登録
      dispatch('userNameUpdate', payload.userName)

      // トークン発行
      const token = await this.$fire.auth.currentUser.getIdToken(true)

      // トークンをストレージにセット
      await dispatch('setToken', token)

      // ユーザー情報からUidとdisplayNameをstorにセット
      const userUid = await registerUserData.user.uid
      const displayName = await registerUserData.user.displayName
      await dispatch('setUserData', {
        userUid,
        displayName,
      })

      commit('closeModalLogin')
    } catch (e) {
      alert(e.message)
    }
  },

  // ログイン処理
  async userLogin({ commit, dispatch }, payload) {
    try {
      const loginUserData = await this.$fire.auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )

      console.log(loginUserData)

      // トークン発行
      const token = await this.$fire.auth.currentUser.getIdToken(true)

      // トークンをストレージにセット
      dispatch('setToken', token)

      // ユーザー情報からUidとdisplayNameをstorにセット
      const userUid = await loginUserData.user.uid
      const displayName = await loginUserData.user.displayName
      await dispatch('setUserData', {
        userUid,
        displayName,
      })

      await commit('closeModalLogin')
    } catch (e) {
      alert(e.message)
    }
  },

  // ユーザー名登録処理
  async userNameUpdate({ commit }, payload) {
    try {
      const userInfo = await this.$fire.auth.currentUser
      userInfo.updateProfile({
        displayName: payload,
      })
    } catch (e) {
      alert(e.message)
    }
  },

  // ストレージにトークン登録
  setToken({ commit }, payload) {
    localStorage.setItem('idToken', payload)
  },

  // ユーザー名、uidをstoreに登録
  setUserData({ commit }, payload) {
    commit('setUserUid', payload.userUid)
    commit('setUserName', payload.displayName)
  },
}
