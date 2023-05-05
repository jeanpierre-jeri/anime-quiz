import { letters } from '@/lib/letters'
import { useQuestionsStore } from '@/store/questions.store'
import confetti from 'canvas-confetti'
import { decode } from 'html-entities'

interface Props {
  option: string
  index: number
  answer: string
  userAnswer: string
}

const getColors = (answer: string, userAnswer: string, option: string) => {
  if (userAnswer === '') return 'bg-white hover:bg-primary/70 hover:text-white hover:border-transparent'
  if (userAnswer !== option && option === answer) return 'bg-green text-white border-transparent'
  if (userAnswer === option && userAnswer !== answer) return 'bg-red text-white border-transparent'
  if (userAnswer === option && userAnswer === answer) return 'bg-green text-white border-transparent'

  return ''
}

export function Option ({ option, index, answer, userAnswer }: Props) {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const handleClick = () => {
    if (userAnswer !== '') return
    selectAnswer(option)
    if (option === answer) void confetti()
  }

  return (
    <li onClick={handleClick} className={`rounded-xl border-2 text-primary border-primary/70 transition-colors flex items-center gap-12 px-5 py-3 cursor-pointer font-medium ${getColors(answer, userAnswer, option)}`}>
      <span className='text-2xl'>{letters[index]}</span>
      <p className='text-lg'>{decode(option)}</p>
    </li>
  )
};
