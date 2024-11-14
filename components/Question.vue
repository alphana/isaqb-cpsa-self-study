<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value: string) => ['A', 'P', 'K'].includes(value)
  },
  options: {
    type: Array as () => string[],
    required: true
  },
  correctAnswers: {
    type: Array as () => number[],
    required: true
  },
  explanation: String,
  requiredSelections: {
    type: Number,
    default: 1
  },
  kOptions: {
    type: Array as () => string[],
    default: () => ['true', 'false']
  }
})

const showAnswer = ref(false)
const userAnswers = ref(
    props.type === 'K'
        ? props.options.map(() => ({ left: false, right: false }))
        : new Array(props.options.length).fill(false)
)

const remainingSelections = computed(() => {
  if (props.type !== 'P') return 0
  const selected = userAnswers.value.filter(v => v).length
  return props.requiredSelections - selected
})

const checkAnswer = () => {
  showAnswer.value = true
}

const resetQuestion = () => {
  showAnswer.value = false
  userAnswers.value = props.type === 'K'
      ? props.options.map(() => ({ left: false, right: false }))
      : new Array(props.options.length).fill(false)
}

const isCorrect = (index: number, side?: 'left' | 'right') => {
  if (props.type === 'K') {
    const correctChoice = props.correctAnswers[index]
    return side === 'left' ? correctChoice === 0 : correctChoice === 1
  }
  return props.correctAnswers.includes(index)
}

const updateAnswer = (index: number, side?: 'left' | 'right') => {
  if (showAnswer.value) return

  if (props.type === 'K') {
    if (side === 'left') {
      userAnswers.value[index].left = true
      userAnswers.value[index].right = false
    } else {
      userAnswers.value[index].left = false
      userAnswers.value[index].right = true
    }
    return
  }

  if (props.type === 'A') {
    userAnswers.value = userAnswers.value.map((_, i) => i === index)
  } else if (props.type === 'P') {
    const currentSelections = userAnswers.value.filter(v => v).length
    if (!userAnswers.value[index] && currentSelections >= props.requiredSelections) {
      return
    }
    userAnswers.value[index] = !userAnswers.value[index]
  }
}

const getQuestionTypeLabel = () => {
  switch (props.type) {
    case 'A': return 'A-Question'
    case 'P': return `P-Question`
    case 'K': return 'K-Question'
    default: return ''
  }
}
</script>

<template>
  <div class="slidev-question p-2 bg-white/90 rounded shadow-sm text-xs">
    <div class="question-header mb-1">
      <span class="text-[10px] font-semibold text-gray-500">{{ getQuestionTypeLabel() }}</span>
      <h3 class="text-sm font-bold mt-0.5">{{ question }}</h3>
    </div>

    <!-- Single Choice (A) and Pick Many (P) Questions -->
    <div v-if="['A', 'P'].includes(type)" class="options-grid mb-2">
      <div
          v-for="(option, index) in options"
          :key="index"
          class="option-item flex items-center py-0.5 px-1 rounded hover:bg-gray-50/50"
      >
        <input
            :type="type === 'A' ? 'radio' : 'checkbox'"
            :name="'question-' + question"
            :id="'option-' + index"
            :checked="userAnswers[index]"
            @change="updateAnswer(index)"
            :disabled="showAnswer"
            class="mr-1"
        >
        <label :for="'option-' + index" class="cursor-pointer flex-grow text-[11px]">
          {{ option }}
        </label>
      </div>
    </div>

    <!-- Allocation (K) Questions -->
    <div v-else-if="type === 'K'" class="k-question-grid mb-2">
      <div class="grid grid-cols-3 gap-1">
        <div class="col-span-1"></div>
        <div v-for="(kOption, kIndex) in kOptions" :key="kIndex" class="text-center font-semibold text-[11px]">
          {{ kOption }}
        </div>

        <template v-for="(option, index) in options" :key="index">
          <div class="option-label text-[11px]">{{ option }}</div>
          <div class="text-center">
            <input
                type="radio"
                :name="'k-option-' + index"
                :checked="userAnswers[index].left"
                @change="() => updateAnswer(index, 'left')"
                :disabled="showAnswer"
            >
          </div>
          <div class="text-center">
            <input
                type="radio"
                :name="'k-option-' + index"
                :checked="userAnswers[index].right"
                @change="() => updateAnswer(index, 'right')"
                :disabled="showAnswer"
            >
          </div>
        </template>
      </div>
    </div>

    <div class="button-container">
      <button
          v-if="!showAnswer"
          @click="checkAnswer"
          class="px-2 py-0.5 text-[11px] bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Check Answer
      </button>

      <div v-else class="answer-feedback">
        <div v-if="['A', 'P'].includes(type)" class="result-container mb-1.5">
          <div
              v-for="(option, index) in options"
              :key="index"
              class="flex items-center py-0.5 text-[11px]"
              :class="{
              'bg-green-50/50': isCorrect(index) && userAnswers[index],
              'bg-red-50/50': !isCorrect(index) && userAnswers[index],
            }"
          >
            <span
                :class="{
                'text-green-600': isCorrect(index) && userAnswers[index],
                'text-red-600': !isCorrect(index) && userAnswers[index],
                'text-gray-500': !userAnswers[index]
              }"
            >
              {{ option }}
              <span v-if="isCorrect(index) && userAnswers[index]" class="ml-0.5">✓</span>
              <span v-if="!isCorrect(index) && userAnswers[index]" class="ml-0.5">✗</span>
            </span>
          </div>
        </div>

        <div v-else-if="type === 'K'" class="result-container mb-1.5">
          <div class="grid grid-cols-3 gap-1">
            <div class="col-span-1"></div>
            <div v-for="(kOption, kIndex) in kOptions" :key="kIndex" class="text-center font-semibold text-[11px]">
              {{ kOption }}
            </div>

            <template v-for="(option, index) in options" :key="index">
              <div class="option-label text-[11px]">{{ option }}</div>
              <div
                  v-for="(side, sideIndex) in ['left', 'right']"
                  :key="sideIndex"
                  class="text-center"
                  :class="{
                  'bg-green-50/50': isCorrect(index, side) && userAnswers[index][side],
                  'bg-red-50/50': !isCorrect(index, side) && userAnswers[index][side]
                }"
              >
                <span v-if="userAnswers[index][side]" class="text-[11px]">
                  {{ isCorrect(index, side) ? '✓' : '✗' }}
                </span>
              </div>
            </template>
          </div>
        </div>

        <div v-if="explanation" class="explanation mt-1.5 p-1.5 bg-gray-50/50 rounded">
          <h4 class="font-bold text-gray-700 text-[10px] mb-0.5">Explanation:</h4>
          <p class="text-gray-600 text-[10px]">{{ explanation }}</p>
        </div>

        <button
            @click="resetQuestion"
            class="mt-1.5 px-2 py-0.5 text-[11px] bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-question {
  width: 100%;
  font-size: 0.75em;
  line-height: 1.2;
  max-height: 90vh;
  overflow-y: auto;
}

.options-grid, .k-question-grid {
  display: grid;
  gap: 0.125rem;
}

.option-item {
  transition: background-color 0.2s;
}

.answer-feedback {
  animation: fadeIn 0.2s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.option-label {
  display: flex;
  align-items: center;
}

:deep(input[type="radio"]),
:deep(input[type="checkbox"]) {
  width: 12px;
  height: 12px;
}
</style>