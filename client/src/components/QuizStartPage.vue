<template>
    <div class="quiz-page">
      <div class="left-panel">
        <div class="quiz-code">
          <h2>Quiz Code: {{ quizCode }}</h2>
        </div>
        <div class="buttons">
          <button @click="startQuiz">Start</button>
          <button @click="cancelQuiz">Cancel</button>
        </div>
      </div>
      <div class="right-panel">
        <h3>Connected Players</h3>
        <ul>
          <li v-for="player in players" :key="player.id">{{ player.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quizCode: '12345', // Replace with dynamic code
        players: [] // This will be populated with connected players
      };
    },
    methods: {
      startQuiz() {
        // Implement logic to start the quiz
      },
      cancelQuiz() {
        // Implement logic to cancel the quiz
      }
    },
    // Optionally, use created or mounted lifecycle hooks to load initial data
    mounted() {
      // Implement logic to load connected players, e.g., through a WebSocket connection
    }
  };
  </script>
  
  <style scoped>
  .quiz-page {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    height: 100vh;
  }
  
  .left-panel, .right-panel {
    flex-basis: 45%;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .left-panel {
    background-color: #f5f5f5;
  }
  
  .right-panel {
    background-color: #fff;
    overflow-y: auto;
  }
  
  .quiz-code {
    background-color: #e9ecef;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .quiz-code h2 {
    margin: 0;
    color: #333;
  }
  
  .buttons {
    display: flex;
    justify-content: space-evenly;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  button:nth-child(1) {
    background-color: #28a745;
  }
  
  button:nth-child(2) {
    background-color: #dc3545;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background-color: #f8f9fa;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #333;
    margin-top: 0;
  }
  </style>
  
  