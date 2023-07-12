<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template> -->

<template>
  <button @click="handleShow(1)">1A2B</button>
  <button @click="handleShow(2)">TodoList</button>
  <div v-if="showComponent == 1" class="container">
    <HelloWorld />
  </div>
  <div v-else>
    <HelloWorld2 />
  </div>

  <!-- <router-link to="/">Home</router-link>
  <router-link to="/1a2b">1a2b</router-link>
  <router-link to="/todoList">todoList</router-link>
  <router-view /> -->
</template>

<script>
import HelloWorld from "./components/1A2B.vue";
import HelloWorld2 from "./components/Todo_2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorld2,
  },
  data() {
    return {
      showComponent: 1,
    };
  },
  methods: {
    handleShow(val) {
      if (val == 1) {
        this.showComponent = 1;
      }
      if (val == 2) {
        this.showComponent = 2;
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  border: none;
  color: darkgrey;
  margin: 0 3px;
}
button:hover {
  color: black;
}
</style>
