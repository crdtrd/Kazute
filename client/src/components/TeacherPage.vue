<template>
    <div>
      <div class="header">
        <div class="username">{{ username }}</div>
        <button @click="logout">Logout</button>
      </div>
      <div class="quizzes">
        <button v-for="quiz in quizzes" :key="quiz.id" class="quiz">
          {{ quiz.title }}
        </button>
      </div>
      <button class="add-quiz" @click="addQuiz">Add Quiz</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'Teacher1',
        quizzes: [
          { id: 1, title: 'Quiz 1' },
          { id: 2, title: 'Quiz 2' },
          { id: 3, title: 'Quiz 3' },
          // Add more quizzes as needed
        ],
      };
    },
    methods: {
      logout() {
        // Clear user session and redirect to login page
        alert('Logout clicked');
      },
      addQuiz() {
        // Navigate to quiz creation page
        alert('Add Quiz clicked');
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
  .quizzes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }
  .quiz {
    background-color: #f0f0f0;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .add-quiz {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
  </style>