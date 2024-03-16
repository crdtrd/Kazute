<template>
  <div class="sorting-question">
    <input type="text" v-model="question" placeholder="Question">

    <div v-for="(item, index) in items" :key="index" class="sortable-item">
      <input type="text" v-model="item.text">
      <input type="number" v-model.number="correctOrder[index]" :min="1" :max="items.length">
    </div>

    <button @click="addItem">Add Item</button>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        question: '',
        items: [{ text: '' }],
        correctOrder: []  // Store the correct order
      };
    },
    computed: {
      radioGroupName() {
        return `optionGroup-${this._uid}`;
      }
    },
    methods: {
      addItem() {
        this.items.push({ text: '' });
        this.correctOrder.push(this.items.length);
      }
    },
    watch: {
      items(newItems) {
        // Adjust correctOrder if the number of items changes
        this.correctOrder = newItems.map((_, index) => index + 1);
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
  