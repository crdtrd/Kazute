<template>
    <div class="question-element">
      <input type="text" v-model="question" placeholder="Question">
      <select v-model="answer">
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        question: '',
        answer: 'true'
      };
    },
    watch: {
      question(newVal) {
        this.$emit('update', { ...this.element, question: newVal });
      },
      answer(newVal) {
        this.$emit('update', { ...this.element, answer: newVal });
      }
    },
    props: {
      element: Object
    }
  };
  </script>
  
  <style scoped>
  /* Styles for true/false question element */
  </style>
  