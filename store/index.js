export const state = () => ({
  modal: {
    isModalRegister: false,
    isModalLogin: false,
  },
  userData: {
    uid: null,
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
  getAuthUserUid(state) {
    return state.userData.uid
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
  // レンダリング時authチェック
  autoLogin({ commit, dispatch }) {
    this.$fire.auth.onAuthStateChanged((userData) => {
      console.log(userData)
      if (!userData) {
        dispatch('setUserData', {
          userUid: null,
          displayName: 'ゲスト',
        })
      } else {
        const userUid = userData.uid
        const displayName = userData.displayName
        dispatch('setUserData', {
          userUid,
          displayName,
        })
      }
    })
  },

  // アカウント作成
  async createUserData({ commit, dispatch }, payload) {
    try {
      const registerUserData =
        await this.$fire.auth.createUserWithEmailAndPassword(
          payload.email,
          payload.password
        )
      // ユーザー名登録
      await dispatch('userNameUpdate', payload.userName)

      // ユーザー情報からUidとdisplayNameをstorにセット
      const userUid = registerUserData.user.uid
      const displayName = payload.userName

      dispatch('setUserData', {
        userUid,
        displayName,
      })

      commit('closeModalRegister')
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

      // ユーザー情報からUidとdisplayNameをstorにセット
      const userUid = loginUserData.user.uid
      const displayName = loginUserData.user.displayName
      dispatch('setUserData', {
        userUid,
        displayName,
      })

      commit('closeModalLogin')
    } catch (e) {
      alert(e.message)
    }
  },

  // ログアウト処理
  // async logout({ commit, dispatch }) {
  //   try {
  //     await this.$fire.auth.signout()
  //     dispatch('setUserData', {
  //       userUid: null,
  //       displayName: 'ゲスト',
  //     })
  //   } catch (e) {
  //     alert(e.message)
  //   }
  // },

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

  // ユーザー名、uidをstoreに登録
  setUserData({ commit }, payload) {
    commit('setUserUid', payload.userUid)
    commit('setUserName', payload.displayName)
  },
}
