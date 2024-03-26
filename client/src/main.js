import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state: {
        players: [] // Initialize your state
    },
    // Add your mutations, actions, getters here
})

createApp(App).use(store).mount('#app')
