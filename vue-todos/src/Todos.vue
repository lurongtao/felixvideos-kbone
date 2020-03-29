<template>
  <div class="container">
    <div class="title">todos</div>
    <div class="form">
      <input type="text" v-model="inputText" class="new-todo" placeholder="下一步行动计划是？">
      <button class="add-btn" @click="newTodo">确定</button>
    </div>
    <div class="todo-list">
      <div
        class="todo-item"
        :class="item.done ? 'done' : ''"
        v-for="item in todo"
        :key="item.id"
      >
        <div class="toggle" @click="toggle(item.id)"></div>
        <div>{{ item.text }}</div>
        <div class="delete" @click="deleteItem(item.id)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      todo: [
        {
          text: '学习 Kbone',
          id: 0,
          done: false
        },
        {
          text: '学习 Vue',
          id: 1,
          done: false
        }
      ],
      inputText: ''
    }
  },
  methods: {
    newTodo() {
      if (this.inputText.trim() === '') {
        return 
      }

      this.todo.unshift({
        text: this.inputText,
        id: ++this.id,
        done: false,
        createTime: new Date()
      })
    },

    toggle(id) {
      this.todo[id].done = !this.todo[id].done
    },

    deleteItem(id) {
      this.todo.splice(id, 1)
    }
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.container {
  padding: 0 10px;
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-nickname {
  color: #aaa;
}

.title{
  width: 100%;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.55);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.new-todo {
  height: 38px;
  border: none;
  padding-left: 10px;
  background: rgba(0, 0, 0, 0.003);
  display: inline-block;
  flex: 1;
  outline: none;
}

.add-btn{
  width: 20%;
  min-width: 70px;
  height: 40px;
  border: 0;
  border-left: 1px solid #ccc;
  border-radius: 0px;
  outline: none;
  appearance: none;
  -webkit-appearance:none;
  background: none;
  line-height: 40px;
  text-align:center;
}

.add-btn:after {
  border: none;
}

.form {
  display: flex;
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
}

.todo-list {
  width: 100%;
  padding-bottom: 40px;
}

.todo-item {
  position: relative;
  height: 40px;
  line-height: 40px;
  padding-left: 60px;
  border-bottom: 1px solid #ddd;
}

.toggle{
  position: absolute;
  left:8px;
  width: 26px;
  top:8px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: inline-block;
}

.toggle:after{
  display: none;
}

.done .toggle:after{
  display: block;
  content: '✔';
  position: relative;
  top:-8px;
  left:6px;
  color: #79ddce;
}

.delete{
  position: absolute;
  right: 8px;
  width: 32px;
  height: 32px;
  text-align: center;
  display: inline-block;
  color: rgba(175, 47, 47, 0.5);
  top:0px;
}

.delete:after{
  content: '✕'
}

.done{
  color: #d9d9d9;
  text-decoration: line-through;
}

todo-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
}

.add-btn:active{
  background-color: #ddd;
}

button {
  background: none;
  font-size: 12px;
  color: #777;
}

button:after {
  border: none;
}

.todo-count {
  position: absolute;
  left: 8px;
  top: 8px;
}

.ib {
  display: inline-block;
}

.footer {
  height: 40px;
  line-height: 28px;
  width: 100%;
  font-size: 12px;
  background-color: rgb(247, 247, 247);
  color: #777;
  position: fixed;
  bottom: 0px;
}

.clear-completed {
  position: absolute;
  top: 15px;
  right: 4px;
}

.filters {
  margin-left: 80px;
}

.filters .ib view, .filters .ib div {
  padding:0 4px;
  margin: 8px;
}

.selected{
  border: 1px solid rgba(175, 47, 47, 0.3);
}

.strong{
  font-weight: 500;
}
</style>