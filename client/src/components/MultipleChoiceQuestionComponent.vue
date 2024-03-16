<template>
    <div class="question-element">
      <input type="text" v-model="question" placeholder="Question">
      <div v-for="(option, index) in options" :key="index" class="option">
        <input type="text" v-model="option.text" @input="updateOption(index, $event.target.value)">
        <input type="radio" :name="radioGroupName" :value="option.text" v-model="correctAnswer">
      </div>
      <button @click="addOption">Add Option</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        question: '',
        options: [{ text: '' }],
        correctAnswer: null
      };
    },
    computed: {
      radioGroupName() {
        return `optionGroup-${this._uid}`;
      }
    },
    methods: {
      addOption() {
        this.options.push({ text: '' });
      },
      updateOption(index, text) {
        this.options[index].text = text;
        this.$emit('update', { ...this.element, options: this.options, correctAnswer: this.correctAnswer });
      }
    },
    watch: {
      question(newVal) {
        this.$emit('update', { ...this.element, question: newVal });
      },
      correctAnswer(newVal) {
        this.$emit('update', { ...this.element, correctAnswer: newVal });
      }
    },
    props: {
      element: Object
    }
  };
  </script>
  
  <style scoped>
  /* Styles for multiple choice question element */
  </style>
  