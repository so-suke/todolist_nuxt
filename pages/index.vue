<template>
  <div id="app" class="container">
    <h1>ToDoリスト</h1>
    <todo-list />
  </div>
</template>

<script>
import TodoList from '~/components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
.container {
  padding: 10px 30px;
}
</style>
