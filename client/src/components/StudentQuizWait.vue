<template>
    <div class="app">
        <header>
            <button @click="goBack" class="back-button">Back</button>
        </header>
        <main>
            <div class="waiting-message">waiting for start</div>
            <ul class="player-list">
                <li v-for="player in players" :key="player.id">{{ player.name }}</li>
            </ul>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            players: []
        };
    },
    methods: {
        goBack() {
            // Logic to handle back button functionality
            this.$router.go(-1);
        }
    },
    mounted() {
        // Fetch the list of connected players
        // This would be an API call to your server
        // For example purposes, let's assume this is the response
        this.players = [
            { id: 1, name: 'Player 1' },
            { id: 2, name: 'Player 2' },
            // more players
        ];
    }
}
</script>
<style scoped>
.app {
    font-family: 'Arial', sans-serif;
    text-align: center;
}

header {
    background-color: #f5f5f5;
    padding: 1em;
    position: relative;
}

.back-button {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5em 1em;
    background-color: #3498db;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}

.waiting-message {
    font-size: 1.2em;
    color: #555;
    margin-top: 2em;
}

.player-list {
    list-style: none;
    padding: 0;
    margin-top: 2em;
}

.player-list li {
    background-color: #ecf0f1;
    margin: 0.5em;
    padding: 0.5em;
    border-radius: 4px;
}
</style>