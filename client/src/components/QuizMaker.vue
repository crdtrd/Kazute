<template>
    <div id="app">
        <input v-model="quiz.name" placeholder="Quiz Name">
        <textarea v-model="quiz.description" placeholder="Quiz Description"></textarea>

        <div class="quiz-elements">
            <button @click="addSection">Add Section</button>
            <button @click="addTrueFalseQuestion">Add True/False Question</button>
            <button @click="addMultipleChoiceQuestion">Add Multiple Choice Question</button>
            <!-- copilot forgot to add this -->
            <button @click="addSortingQuestion">Add Sorting Question</button>
        </div>

        <div class="quiz">
            <div v-for="(element, index) in quiz.elements" :key="index">
                <div v-if="element.type === 'section'">
                    <input v-model="element.name" placeholder="Section Name">
                </div>
                <div v-else-if="element.type === 'trueFalse'">
                    <input v-model="element.question" placeholder="Question">
                    <input type="checkbox" v-model="element.answer"> True
                </div>
                <div v-else-if="element.type === 'multipleChoice'">
                    <input v-model="element.question" placeholder="Question">
                    <div v-for="(option, i) in element.options" :key="i">
                        <input type="radio" :value="i" v-model="element.answer">
                        <input v-model="element.options[i]" placeholder="Option">
                        <button @click="removeOption(element, i)">Remove Option</button>
                    </div>
                    <button @click="addOption(element)">Add Option</button>
                </div>
                <div v-else-if="element.type === 'sorting'">
                    <input v-model="element.question" placeholder="Question">
                    <div v-for="(option, i) in element.options" :key="i">
                        <input v-model="element.options[i]" placeholder="Option">
                        <button @click="removeOption(element, i)">Remove Option</button>
                    </div>
                    <button @click="addOption(element)">Add Option</button>
                    <div>
                        Correct Order (comma-separated indices):
                        <input v-model="element.correctOrder" placeholder="0,1,2,...">
                    </div>
                </div>
                <button @click="moveElementUp(index)" :disabled="index === 0">Move Up</button>
                <button @click="moveElementDown(index)" :disabled="index === quiz.elements.length - 1">Move
                    Down</button>
            </div>
        </div>

        <button @click="saveQuiz">Save Quiz</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quiz: {
                name: '',
                description: '',
                elements: []
            }
        }
    },
    methods: {
        addSection() {
            this.quiz.elements.push({ type: 'section', name: '' });
        },
        addTrueFalseQuestion() {
            this.quiz.elements.push({ type: 'trueFalse', question: '', answer: false });
        },
        addMultipleChoiceQuestion() {
            this.quiz.elements.push({ type: 'multipleChoice', question: '', options: ['', ''], answer: null });
        },
        addSortingQuestion() {
            this.quiz.elements.push({ type: 'sorting', question: '', options: ['', '', ''], correctOrder: '' });
        },
        moveElementUp(index) {
            if (index > 0) {
                const element = this.quiz.elements[index];
                this.quiz.elements.splice(index, 1);
                this.quiz.elements.splice(index - 1, 0, element);
            }
        },
        moveElementDown(index) {
            if (index < this.quiz.elements.length - 1) {
                const element = this.quiz.elements[index];
                this.quiz.elements.splice(index, 1);
                this.quiz.elements.splice(index + 1, 0, element);
            }
        },
        addOption(element) {
            element.options.push('');
        },
        removeOption(element, index) {
            if (element.options.length > 2) {
                element.options.splice(index, 1);
            }
        },
        saveQuiz() {
            // Save the quiz to a server or local storage
            console.log(JSON.stringify(this.quiz));
        }
    }
}
</script>

<style scoped>
#app {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input,
textarea {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px 0;
}

button:disabled {
    background-color: #ccc;
}

.quiz-elements {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.quiz {
    border-top: 1px solid #ddd;
    padding-top: 20px;
}
</style>