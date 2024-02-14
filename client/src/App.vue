<template>
  <div class="container">
    <h1>Which one are you?</h1>
    <div class="button-group">
      <button class="btn">Student</button>
      <button class="btn">Teacher</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleSelection'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 200px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>