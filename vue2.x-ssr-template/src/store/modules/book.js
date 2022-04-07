import Vue from 'vue'

const getBookApi = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: '《Vue SSR服务器渲染》', price: 100, id })
    })
  })
}

export const Book = {
  namespaced: true,
  state: {
    items: {}
  },
  mutations: {
    setItem(state, { id, item }) {
      Vue.set(state.items, id, item)
    }
  },
  actions: {
    fetchItem({ commit }, id) {
      return getBookApi(id).then(item => {
        commit('setItem', { id, item })
      })
    }
  }
}

