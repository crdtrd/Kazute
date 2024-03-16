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
  
        <div class="quiz-area">
        <div v-for="(element, index) in quizElements" :key="element.id" class="quiz-element">
          <component :is="getElementComponent(element.type)" :element="element"></component>

          <button @click="moveElementUp(index)" :disabled="index === 0">Move Up</button>
          <button @click="moveElementDown(index)" :disabled="index === quizElements.length - 1">Move Down</button>
          <button @click="removeElement(index)">Remove</button>
        </div>
  </div>
      </div>
  
      <div class="footer">
        <button @click="saveQuiz">Save Quiz</button>
      </div>
    </div>
  </template>
  
  <script>
  import SectionComponent from './SectionComponent.vue'; 
  import TrueFalseQuestionComponent from './TrueFalseQuestionComponent.vue'; 
  import MultipleChoiceQuestionComponent from './MultipleChoiceQuestionComponent.vue'; 
  import SortingQuestionComponent from './SortingQuestionComponent.vue'; 
  export default {
    components: {
      SectionComponent,
      TrueFalseQuestionComponent,
      MultipleChoiceQuestionComponent,
      SortingQuestionComponent
    },
    data() {
      return {
        quizName: '',
        quizDescription: '',
        quizElements: []
      };
    },
    methods: {
      getElementComponent(type) {
        return {
          'section': 'SectionComponent',
          'true_false': 'TrueFalseQuestionComponent',
          'multiple_choice': 'MultipleChoiceQuestionComponent',
          'sorting': 'SortingQuestionComponent'
        }[type];
      },
      addElement(type) {
      const newElement = { 
        type, 
        id: Date.now(), // simple unique identifier
        // initial data for each type of element
        data: (type === 'section') ? { title: '' } : 
              (type === 'true_false') ? { question: '', answer: true } : 
              (type === 'multiple_choice') ? { question: '', options: [''], correctAnswer: '' } : 
              (type === 'sorting') ? { question: '', items: [''] } : {}
        };
        this.quizElements.push(newElement);
      },
      removeElement(index) {
        this.quizElements.splice(index, 1);
      },
      saveQuiz() {
        console.log('Saving quiz:', this.quizName, this.quizDescription, this.quizElements);
      },
      moveElementUp(index) {
        if (index > 0) {
          const element = this.quizElements[index];
          this.quizElements.splice(index, 1);
          this.quizElements.splice(index - 1, 0, element);
        }
      },
      moveElementDown(index) {
        if (index < this.quizElements.length - 1) {
          const element = this.quizElements[index];
          this.quizElements.splice(index, 1);
          this.quizElements.splice(index + 1, 0, element);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .quiz-builder {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .header, .footer {
    margin-bottom: 20px;
  }
  
  .elements-panel {
    margin-right: 20px;
    float: left;
  }
  
  .quiz-area {
    overflow: auto;
  }
  
  .quiz-element {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    position: relative;
  }
  
  button {
    margin-right: 10px;
    margin-top: 10px;
  }
  </style>
  