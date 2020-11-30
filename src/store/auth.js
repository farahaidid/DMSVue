
import { DB, FIREBASE } from '../firebase'

const state = {
  user: null
}

const getters = {
  user : s => s.user,
  isLogged: s => s.user != null,
}

const mutations = {
  SET_FIREBASE_USER : (s, u) => s.user = u,
  CLEAR_AUTH_DATA : (s, v) => {
    s.user = null
  },
}

const actions = {
  FETCH_USER_DETAILS : async({}) => {
    if(!FIREBASE.auth().currentUser) return null
    let uid = FIREBASE.auth().currentUser.uid
    return await DB.collection('users').doc(uid).get().then(ref => {
      return {
        id: ref.id,
        ...ref.data()
      }
    }).catch(err => {
      console.log(`ERROR-actions-auth-CREATE_NEW_USER`, err);
      throw new Error(err)
    })
  },
  CREATE_NEW_USER : async({}, user) => {
    let uid = user.uid
    delete user.uid
    return await DB.collection('users').doc(uid).set(user).then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR-actions-auth-CREATE_NEW_USER`, err);
      throw new Error(err)
    })
  },
  LOGOUT : async ({commit}, payload) => {
    try{
      await FIREBASE.auth().signOut()
      commit('CLEAR_AUTH_DATA')
      return
    }catch(err){
      console.log(`ERROR-actions-auth-LOGOUT`, err);
      throw new Error(err)
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}