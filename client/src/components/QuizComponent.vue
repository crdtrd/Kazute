<template>
    <div class="quiz-builder">
      <div class="header">
        <input type="text" v-model="quizName" placeholder="Quiz Name">
        <textarea v-model="quizDescription" placeholder="Quiz Description"></textarea>
      </div>
  
      <div class="content">
        <div class="elements-panel">
          <!-- Buttons to add new elements -->
          <button @click="addElement('section')">Add Section</button>
          <button @click="addElement('true_false')">Add True/False Question</button>
          <button @click="addElement('multiple_choice')">Add Multiple Choice</button>
          <button @click="addElement('sorting')">Add Sorting Question</button>
        </div>
  
        <draggable v-model="quizElements" class="quiz-area" group="quiz">
          <div v-for="(element, index) in quizElements" :key="element.id" class="quiz-element">
            <!-- Quiz element based on its type -->
            <quiz-element :element="element" @remove="removeElement(index)"></quiz-element>
          </div>
        </draggable>
      </div>
  
      <div class="footer">
        <button @click="saveQuiz">Save Quiz</button>
      </div>
    </div>
  </template>
  
  <script>
  import draggable from 'vuedraggable';
  
  export default {
    components: {
      draggable,
    },
    data() {
      return {
        quizName: '',
        quizDescription: '',
        quizElements: []
      };
    },
    methods: {
      addElement(type) {
        const newElement = { 
          type, 
          id: Date.now() // simple unique identifier
          // add specific properties based on type
        };
        this.quizElements.push(newElement);
      },
      removeElement(index) {
        this.quizElements.splice(index, 1);
      },
      saveQuiz() {
        // Logic to save the quiz, can be a call to a backend service or local storage
        console.log('Saving quiz:', this.quizName, this.quizDescription, this.quizElements);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  