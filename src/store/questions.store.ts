import { create } from 'zustand'
import { getQuestions } from '@/services/questions.service'
import { Question } from '@/types'

interface QuestionStore {
  questions: Question[]
  currentQuestionIndex: number
  loading: boolean
  difficulty: string
  setDifficulty: (difficulty: string) => void
  selectAnswer: (answer: string) => void
  goNext: () => void
  reset: () => Promise<{ ready: boolean }>
}

export const useQuestionsStore = create<QuestionStore>()((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  loading: false,
  difficulty: 'easy',
  setDifficulty: (difficulty: string) => {
    set({ difficulty })
    void get().reset()
  },
  selectAnswer: (answer: string) => {
    const questions = get().questions
    const currentQuestionIndex = get().currentQuestionIndex
    const currentQuestion = questions[currentQuestionIndex]
    currentQuestion.userAnswer = answer

    console.log('store', currentQuestion.userAnswer, currentQuestion.answer)

    set({ questions })
  },
  goNext: () => {
    set(state => ({ currentQuestionIndex: state.currentQuestionIndex + 1 }))
  },
  reset: async () => {
    set({ loading: true })
    const difficulty = get().difficulty
    const questions = await getQuestions(difficulty)
    set({ questions, currentQuestionIndex: 0, loading: false })

    return { ready: true }
  }
}))
