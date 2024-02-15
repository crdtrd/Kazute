<template>
  <div>
    <select v-model="selectedComponent">
      <option disabled value="">Please select one</option>
      <option v-for="(component, name) in components" :key="name" :value="name">
        {{ name }}
      </option>
    </select>

    <div v-if="selectedComponent">
      <component :is="components[selectedComponent]" />
    </div>
  </div>
</template>

<script>
import WhatAreYou from './components/WhatAreYou.vue';
import TeacherLogin from './components/TeacherLogin.vue';
import TeacherPage from './components/TeacherPage.vue';

export default {
  data() {
    return {
      selectedComponent: '',
      components: {} // components will be loaded dynamically
    }
  },
  methods: {
    async loadComponents() {
      // Dynamically import all components from the 'components' folder
      const context = require.context('./components/', true, /\.vue$/);
      for (const file of context.keys()) {
        const componentName = file.split('/').pop().split('.')[0];
        this.components[componentName] = (await import(`./components/${componentName}.vue`)).default;
      }
    }
  },
  mounted() {
    this.loadComponents();
  }
}
</script>
