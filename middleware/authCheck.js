// export default function ({ store }) {
//   const idToken = localStorage.getItem('idToken')
//   if (!idToken) {
//     store.commit('setUserName', 'ゲスト')
//     store.commit('setUserUid', null)
//     alert('ログアウトしました')
//   } else {
//     this.$fire.auth.onAuthStateChanged((userData) => {
//       console.log(userData)
//       const userUid = userData.user.uid
//       const displayName = userData.user.displayName
//       store.dispatch('setUserData', {
//         userUid,
//         displayName,
//       })
//     })
//   }
// }
