<template>
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="input-group">
          <label for="quiz-code">Quiz Code</label>
          <input id="quiz-code" v-model="quizCode" type="text" required>
        </div>
        <div class="input-group">
          <label for="username">Username</label>
          <input id="username" v-model="username" type="text" required>
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quizCode: '',
        username: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>