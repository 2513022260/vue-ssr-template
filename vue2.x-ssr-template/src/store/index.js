import Vue from 'vue'
import Vuex from 'vuex'
import { Book } from './modules/book'

Vue.use(Vuex)
export function createStore() {
  return new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      book: Book
    }
  })
}
