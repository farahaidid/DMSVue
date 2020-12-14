import {DB} from '@/firebase'
import { v4 as uuidv4 } from 'uuid'
const state = {
  liveChatUid: null,
  localMessages: []
}

const getters = {
  localMessages: s => s.localMessages,
  liveChatUid: s => s.liveChatUid
}

const mutations = {
  SET_LOCAL_MESSAGES: (s, m) => s.localMessages = m,
  SET_UID: (s, v) => s.liveChatUid = v
}

const actions = {
  ADD_LOCAL_MESSAGE: async ({getters, commit, dispatch}, p) => {
    try{
      let uid = getters['liveChatUid'] || uuidv4()
      if(getters['liveChatUid'] == null) commit('SET_UID', uid)
      await DB.collection('liveChat').add({uid: uid, text: p})
      return dispatch('FETCH_LIVE_CHAT')
    }catch(e){
      console.log(e)
    }
  },
  FETCH_LIVE_CHAT: async ({getters, commit}) => {
    try{
      if(getters['liveChatUid'] == null) commit('SET_UID', uuidv4())
      let msgs = (await DB.collection('liveChat').where('uid','==',getters['liveChatUid']).get()).docs
      console.log(msgs)
      return msgs.map(m => ({
        id: m.id,
        ...m.data()
      }))
    }catch(e){
      console.log(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}