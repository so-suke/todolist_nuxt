import { TODO_STATE } from '../static/enumerations.js'
import * as types from './mutation-types'

export const todos = {
  namespaced: true,
  state: () => ({
    list: []
  }),
  mutations: {
    [types.ADD_TODO](state, payload) {
      state.list.push({
        comment: payload.comment,
        state: payload.state
      })
    },
    [types.DELETE_TODO](state, payload) {
      state.list.splice(state.list.indexOf(payload.todo), 1)
    },
    [types.TOGGLE_TODO](state, payload) {
      if (payload.todo.state === TODO_STATE.WORKING) {
        payload.todo.state = TODO_STATE.DONE
      } else if (payload.todo.state === TODO_STATE.DONE) {
        payload.todo.state = TODO_STATE.WORKING
      }
    }
  },
  actions: {
    add(context, payload) {
      context.commit(types.ADD_TODO, payload)
    },
    delete(context, payload) {
      context.commit(types.DELETE_TODO, payload)
    },
    toggle(context, payload) {
      context.commit(types.TOGGLE_TODO, payload)
    }
  }
}
