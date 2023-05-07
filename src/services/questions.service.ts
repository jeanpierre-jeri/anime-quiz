import { Question, QuestionsApi } from '@/types'
import { decode } from 'html-entities'

export async function getQuestions (difficulty: string = 'easy'): Promise<Question[]> {
  const url = `https://opentdb.com/api.php?amount=5&category=31&difficulty=${difficulty}&type=multiple`
  try {
    const data = await fetch(url, { next: { revalidate: 60 } }).then(async res => await (res.json() as Promise<QuestionsApi>))

    const questions = data.results.map((result) => {
      const answers = [...result.incorrect_answers, result.correct_answer]
      const shuffledAnswers = answers.sort(() => Math.random() - 0.5)

      return {
        id: crypto.randomUUID(),
        options: shuffledAnswers,
        answer: result.correct_answer,
        question: decode(result.question, { level: 'html5' }),
        userAnswer: ''
      }
    })

    return questions
  } catch (error) {
    return []
  }
}
