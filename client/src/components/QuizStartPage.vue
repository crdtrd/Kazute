<template>
    <div class="quiz-page">
        <div class="quiz-info">
            <h2>Quiz Code: {{ quizCode }}</h2>
            <button @click="startQuiz">Start</button>
            <button @click="cancelQuiz">Cancel</button>
        </div>
        <div class="players-board">
            <h2>Connected Players</h2>
            <ul>
                <li v-for="player in players" :key="player.id">{{ player.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quizCode: '123456', // Replace this with your actual quiz code
        };
    },
    computed: {
        players() {
            return this.$store.state.players; // Assuming you have a Vuex store with a players array
        },
    },
    methods: {
        startQuiz() {
            // Implement your logic to start the quiz
        },
        cancelQuiz() {
            // Implement your logic to cancel the quiz
        },
    },
};
</script>

<style scoped>
.quiz-page {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f5f5f5;
}

.quiz-info {
    width: 45%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.quiz-info h2 {
    margin-bottom: 20px;
    color: #333;
}

.quiz-info button {
    margin-right: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
}

.quiz-info button:last-child {
    background-color: #dc3545;
}

.players-board {
    width: 45%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.players-board h2 {
    margin-bottom: 20px;
    color: #333;
}

.players-board ul {
    list-style-type: none;
    padding-left: 0;
}

.players-board li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.players-board li:last-child {
    border-bottom: none;
}
</style>