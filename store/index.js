// 模块方式引入
import axios from '~/plugins/axios'

export const state = () => ({
  titles: []
})

export const mutations = {
  getTitles (state, data) {
    state.titles = data
  }
}

export const getters = {
  titles (state) {
    return state.titles
  }
}

export const actions = {
  AgetTitles ({commit, state}, data) {
    commit('getTitles', data)
  },
  nuxtServerInit ({commit}, {req}) {
    axios.get('/api/articles').then(res => {
      commit('getTitles', res.data)
    })
  }
}
