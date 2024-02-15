<template>
  <div>
    <button v-for="component in components" :key="component" @click="currentComponent = component">
      Load {{ component }}
    </button>

    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import WhatAreYou from './components/WhatAreYou.vue';
import TeacherLogin from './components/TeacherLogin.vue';
import TeacherPage from './components/TeacherPage.vue';

export default {
  data() {
    return {
      currentComponent: null,
      components: ['WhatAreYou', 'TeacherLogin', 'TeacherPage']
    }
  },
  components: {
    WhatAreYou,
    TeacherLogin,
    TeacherPage
  }
}
</script>