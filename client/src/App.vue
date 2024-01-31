<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="id">ID:</label>
        <input type="text" id="id" v-model="id" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Handle the login process here
    }
  }
};
</script>