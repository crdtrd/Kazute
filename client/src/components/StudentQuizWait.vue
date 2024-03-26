<template>
    <div class="container">
        <button class="back-button" @click="goBack">Back</button>
        <div class="message">Waiting for start</div>
        <div class="players">
            <div v-for="player in players" :key="player.id" class="player">
                {{ player.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            players: [
                // Sample data, replace with actual data
                { id: 1, name: 'Player 1' },
                { id: 2, name: 'Player 2' },
                // ...
            ],
        };
    },
    methods: {
        goBack() {
            // Implement your back navigation logic here
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1em;
    box-sizing: border-box;
}

.back-button {
    position: absolute;
    top: 3cap;
    left: 1em;
}

.message {
    margin-bottom: 2em;
    font-size: 1.5em;
    text-align: center;
}

.players {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.player {
    margin-bottom: 1em;
}
</style>