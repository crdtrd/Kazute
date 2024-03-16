<template>
    <div class="section-element">
      <input type="text" v-model="sectionTitle" placeholder="Section Title">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sectionTitle: ''
      };
    },
    watch: {
      sectionTitle(newVal) {
        this.$emit('update', { ...this.element, title: newVal });
      }
    },
    props: {
      element: Object
    }
  };
  </script>
  
  <style scoped>
  /* Styles for section element */
  </style>
  