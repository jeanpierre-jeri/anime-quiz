export interface Question {
  id: string
  options: string[]
  answer: string
  question: string
  userAnswer: string
}

export interface QuestionsApi {
  response_code: number
  results: Result[]
}

interface Result {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
