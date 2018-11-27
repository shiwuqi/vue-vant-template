import { queryImgList } from '@/api/home'

const state = {
  imageList: []
}

const getters = {

}

const mutations = {
  updateImageList(state, payload) {
    state.imageList = payload
  }
}

const actions = {
  async queryImgList({ commit }, cb) {
    try {
      const res = await queryImgList()
      if (res.status === "00") {
        commit('updateImageList', res.data.images)
      } else {
        cb && cb(res)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  namespaced: true, //开启命名空间，避免不同module下的actions和mutations重名
  state,
  getters,
  mutations,
  actions
}