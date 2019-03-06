import Vuex from 'vuex'

// ストアのインポート
import { todos } from './todos.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      todos
    }
  })
}

export default createStore
