<template>
  <div id="todolist">
    <ul class="filter">
      <li>
        <input
          id="todo_state_filter_1"
          type="radio"
          name="todo_state_filter"
          value="all"
          :checked="filterMode === 'all'"
          @click="filterTodoByState"
        >
        <label for="todo_state_filter_1">すべて</label>
      </li>
      <li>
        <input
          id="todo_state_filter_2"
          type="radio"
          name="todo_state_filter"
          value="working"
          :checked="filterMode === 'working'"
          @click="filterTodoByState"
        >
        <label for="todo_state_filter_2">作業中</label>
      </li>
      <li>
        <input
          id="todo_state_filter_3"
          type="radio"
          name="todo_state_filter"
          value="done"
          :checked="filterMode === 'done'"
          @click="filterTodoByState"
        >
        <label for="todo_state_filter_3">完了</label>
      </li>
    </ul>
    <table class="table">
      <tbody>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
        <tr v-for="(todo, idx) in filteredTodos" :key="todo.id">
          <td>{{ idx }}</td>
          <td>{{ todo.comment }}</td>
          <td>
            <button @click="toggleTodoState(todo)">
              {{ todo.state }}
            </button>
            <button @click="deleteTodo(todo)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <h2>新規タスクの追加</h2>
      <input v-model="newComment" type="text">
      <button @click="addTodo">
        追加
      </button>
    </div>
  </div>
</template>

<script>
import { TODO_STATE } from '../static/enumerations.js'
import { filters } from '../static/functions.js'

export default {
  name: 'Todolist',
  components: {},
  data() {
    return {
      newComment: '', // 新規todoコメント入力用inputの値
      filterMode: 'all' // todoリストをフィルタリングするモード。(初期モードは、全て)
    }
  },
  computed: {
    // 設定されているフィルターモードを元にtodoリストをフィルタリングします。
    filteredTodos: function() {
      return filters[this.filterMode](this.$store.state.todos.list)
    }
  },
  methods: {
    // 新規todo追加
    addTodo: function() {
      if (this.newComment === '') {
        return
      }
      this.$store.dispatch('todos/add', {
        comment: this.newComment,
        state: TODO_STATE.WORKING
      })
      this.newComment = ''
    },
    // 各todoの状態を切り替えます(作業中と完了で切り替えます。)
    toggleTodoState: function(todo) {
      this.$store.dispatch('todos/toggle', { todo })
    },
    // 各todoを削除。
    deleteTodo: function(todo) {
      this.$store.dispatch('todos/delete', { todo })
    },
    // todoリストのフィルタリング用モードを変更します。
    filterTodoByState: function(event) {
      this.filterMode = event.currentTarget.value
    }
  }
}
</script>

<style>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.filter {
  display: flex;
  margin-bottom: 20px;
}
</style>
