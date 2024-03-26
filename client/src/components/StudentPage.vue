<template>
    <div class="container">
      <div class="input-group">
        <label for="quizCode">Quiz Code</label>
        <input type="text" id="quizCode" v-model="quizCode" placeholder="Enter Quiz Code">
      </div>
  
      <button @click="connectToQuiz">Connect</button>
  
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" placeholder="Enter Username">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quizCode: '',
        username: ''
      };
    },
    methods: {
      connectToQuiz() {
        // Logic to connect to the quiz
        console.log("Quiz Code:", this.quizCode, "Username:", this.username);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .input-group {
    margin-bottom: 20px;
    width: 100%;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  label {
    display: block;
  }
  
  @media (max-width: 600px) {
    .container {
      width: 90%;
    }
  }
  </style>
  