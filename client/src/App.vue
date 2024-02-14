<template>
  <div class="teacher-page">
    <div class="header">
      <h1>{{ username }}</h1>
      <button @click="logout">Logout</button>
    </div>
    <div class="quiz-list">
      <button v-for="quiz in quizzes" :key="quiz.id" class="quiz-tile" @click="selectQuiz(quiz)">
        {{ quiz.title }}
      </button>
    </div>
    <button class="add-quiz-btn" @click="addQuiz">Add Quiz</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'Teacher123', // Dummy username
      quizzes: [] // Quizzes array will be populated from dummy data
    };
  },
  created() {
    this.fetchQuizzes();
  },
  methods: {
    fetchQuizzes() {
      // Dummy data for quizzes
      this.quizzes = [
        { id: 1, title: "Math Quiz" },
        { id: 2, title: "Science Quiz" },
        { id: 3, title: "History Quiz" },
        // ... other quizzes
      ];
    },
    logout() {
      // Dummy logout logic
      alert("Logged out successfully!");
      // Implement real logout logic here
    },
    addQuiz() {
      // Dummy add quiz logic
      const newQuizId = this.quizzes.length + 1;
      const newQuiz = { id: newQuizId, title: `New Quiz ${newQuizId}` };
      this.quizzes.push(newQuiz);
      alert(`Added: ${newQuiz.title}`);
    },
    selectQuiz(quiz) {
      // Handle quiz selection
      alert(`Quiz selected: ${quiz.title}`);
      // Implement the logic to navigate to the quiz details or start the quiz
    }
  }
}
</script>

<style>
.teacher-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.quiz-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}
.quiz-tile {
  /* Style your buttons as needed */
  display: block;
  width: 100%;
  padding: 20px;
  margin: 5px 0;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: pointer;
}
.quiz-tile:hover {
  background-color: #e0e0e0;
}
.add-quiz-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
