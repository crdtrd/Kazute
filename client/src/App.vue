<template>
  <div id="app">
    <h1>Which one are you?</h1>
    <div class="buttons">
      <button class="button">Student</button>
      <button class="button">Teacher</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
