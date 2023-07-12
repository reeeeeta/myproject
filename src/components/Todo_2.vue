<template>
  <div class="body">
    <div class="container">
      <h1 class="header">ToDo List</h1>
      <input
        id="inputBox"
        v-model="newTodo"
        type="text"
        placeholder="Add ToDo List"
      />
      <button type="reset" id="add" @click="addFunction">Add</button>
      <button type="reset" id="done" @click="done" style="display: none">
        Done
      </button>
      <ul>
        <li v-for="todo in todos" :key="todo.id" class="list">
          <div class="listText">
            <span :id="todo.id">{{ todo.text }}</span>
          </div>
          <div class="buttonDiv">
            <button id="remove" @click="removeFunction(todo)">x</button>
            <button id="edit" @click="editFunction(todo)">edit</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      newTodo: "",
      todos: [
        { id: id++, text: "Study JavaScript" },
        { id: id++, text: "Buy breakfast" },
        { id: id++, text: "Read book" },
      ],
    };
  },
  methods: {
    addFunction() {
      //alert(this.newTodo);
      if (this.newTodo.trim().length == 0) {
        alert("Write something");
        return;
      }
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
    },
    removeFunction(todo) {
      //this.todos = this.todos.style.display = "none";
      this.todos = this.todos.filter((t) => t !== todo);
      //let todo = document.getElementById("todo");
      //this.todo.value = "";
      let add = document.getElementById("add");
      let done = document.getElementById("done");
      add.style.display = "inline";
      done.style.display = "none";
      let inputBoxValue = document.getElementById("inputBox");
      inputBoxValue.value = "";
    },
    editFunction(todo) {
      //alert(todo.id);
      this.editingTodoId = todo.id;
      let span = document.getElementById(todo.id);
      let spanValue = span.innerHTML;
      //alert(spanValue);
      let inputBoxValue = document.getElementById("inputBox");
      inputBoxValue.value = spanValue;

      let add = document.getElementById("add");
      let done = document.getElementById("done");
      add.style.display = "none";
      done.style.display = "inline";
    },

    done() {
      let add = document.getElementById("add");
      let done = document.getElementById("done");
      add.style.display = "inline";
      done.style.display = "none";
      let inputBoxValue = document.getElementById("inputBox");
      let editedTodo = this.todos.find(
        (todo) => todo.id === this.editingTodoId
      );
      if (editedTodo) {
        editedTodo.text = inputBoxValue.value;
      }
      this.editingTodoId = null; // 重置todoId
      inputBoxValue.value = "";
      this.newTodo = "";
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  font-family: TeX Gyre Schola, serif;
}
input {
  width: 70%;
  padding: 10px;
  border: none;
  font-size: 15px;
  border-radius: 6px;
}

button {
  border: none;
  padding: 4px;
  margin: 0 1px;
  border-radius: 6px;
  font-size: 13px;
  color: #888;
  width: 40px;
}

button:hover {
  color: black;
}

.list {
  display: flex;
  justify-content: space-between;
}
.listText {
  flex: 1.5;
  text-align: left;
  margin-left: 5%;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
.buttonDiv {
  flex: 1;
  margin-right: -3%;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(#84c1ff, #ffc1e0);
}

.container {
  text-align: center;
  height: 80vh;
  border: 2px solid white;
  padding: 20px;
  flex-direction: column;
  font-size: 20px;
  color: white;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  color: white;
}
</style>
