import { TODO_STATE } from './enumerations.js'

export const filters = {
  // フィルター:全ての場合
  all: function(todos) {
    return todos
  },
  // フィルター:作業中の場合
  working: function(todos) {
    return todos.filter(function(todo) {
      return todo.state === TODO_STATE.WORKING
    })
  },
  // フィルター:完了の場合
  done: function(todos) {
    return todos.filter(function(todo) {
      return todo.state === TODO_STATE.DONE
    })
  }
}
