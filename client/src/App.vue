<template>
  <div id="app">
    <h1>Login</h1>
    <input v-model="userId" placeholder="User ID" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userId: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/login', {
          userId: this.userId,
          password: this.password
      })
      .then(response => {
          console.log("Login response:", response.data);
      })
      .catch(error => {
          console.error("Login error:", error);
      });
    },
    register() {
      axios.post('http://localhost:3000/register', {
          userId: this.userId,
          password: this.password
      })
      .then(response => {
          console.log("Register response:", response.data);
      })
      .catch(error => {
          console.error("Register error:", error);
      });
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
