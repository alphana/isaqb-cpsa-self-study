<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: String,
  options: Array,
  correctAnswers: Array,
  explanation: String,
  type: {
    type: String,
    default: 'multiple' // or 'single' for radio buttons, or 'true-false' for true/false statements
  }
})

const showAnswer = ref(false)
const userAnswers = ref(new Array(props.options.length).fill(false))

const checkAnswer = () => {
  showAnswer.value = true
}

const resetQuestion = () => {
  showAnswer.value = false
  userAnswers.value = new Array(props.options.length).fill(false)
}

const isCorrect = (index) => {
  if (props.type === 'single') {
    // Single choice: only one correct answer, check if selected index matches the correct answer
    return props.correctAnswers.includes(index)
  } else {
    // Multiple choice or True/False: check if each selected answer is in correctAnswers array
    return props.correctAnswers.includes(index)
  }
}

const updateAnswer = (index, value = null) => {
  if (props.type === 'single') {
    // For single choice questions, reset other selections
    userAnswers.value = userAnswers.value.map((_, i) => i === index)
  } else if (props.type === 'true-false') {
    userAnswers.value[index] = value
  } else {
    // Multiple choice questions: toggle the selected answer
    userAnswers.value[index] = !userAnswers.value[index]
  }
}
</script>

<template>
  <div class="question-container p-4">
    <h2 class="text-xl mb-4">{{ question }}</h2>

    <div class="options-container mb-4">
      <template v-if="type === 'multiple' || type === 'single'">
        <div
            v-for="(option, index) in options"
            :key="index"
            class="option-item flex items-center mb-2"
        >
          <input
              :type="type === 'single' ? 'radio' : 'checkbox'"
              :name="'question-' + question"
              :id="'option-' + index"
              :checked="userAnswers[index]"
              @change="updateAnswer(index)"
              :disabled="showAnswer"
              class="mr-2"
          >
          <label :for="'option-' + index" class="cursor-pointer">
            {{ option }}
          </label>
        </div>
      </template>

      <template v-else-if="type === 'true-false'">
        <div v-for="(statement, index) in options" :key="index" class="statement-item mb-4">
          <p class="statement mb-2">{{ statement }}</p>
          <div class="true-false-options flex gap-4">
            <label class="flex items-center">
              <input
                  type="radio"
                  :name="'true-false-' + index"
                  @change="updateAnswer(index, true)"
                  :checked="userAnswers[index] === true"
                  :disabled="showAnswer"
                  class="mr-1"
              >
              True
            </label>
            <label class="flex items-center">
              <input
                  type="radio"
                  :name="'true-false-' + index"
                  @change="updateAnswer(index, false)"
                  :checked="userAnswers[index] === false"
                  :disabled="showAnswer"
                  class="mr-1"
              >
              False
            </label>
          </div>
        </div>
      </template>
    </div>

    <div class="button-container">
      <button
          v-if="!showAnswer"
          @click="checkAnswer"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Check Answer
      </button>

      <div v-else class="answer-feedback">
        <div class="result-container mb-4">
          <div v-if="type === 'single' || type === 'multiple'">
            <div
                v-for="(option, index) in options"
                :key="index"
                class="flex items-center mb-2"
            >
              <div
                  :class="{
                  'text-green-500': isCorrect(index) && userAnswers[index],
                  'text-red-500': !isCorrect(index) && userAnswers[index],
                  'text-gray-500': !userAnswers[index]
                }"
              >
                {{ option }}
                <span v-if="isCorrect(index)" class="ml-2">✓</span>
                <span v-if="!isCorrect(index) && userAnswers[index]" class="ml-2">✗</span>
              </div>
            </div>
          </div>
        </div>

        <div class="explanation mt-4 p-4 bg-gray-100 rounded">
          <h3 class="font-bold mb-2">Explanation:</h3>
          <p style="font-size: large;">{{ explanation }}</p>
        </div>

        <button
            @click="resetQuestion"
            class="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: white;
  font-size: x-small;


}

.option-item:hover, .statement-item:hover {
  background-color: #f8fafc;
}

.answer-feedback {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
