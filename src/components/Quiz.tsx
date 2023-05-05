'use client'
import { Option, Button } from '@/components'
import { useQuestionsStore } from '@/store/questions.store'
import { Result } from './Result'
import { useState } from 'react'

export function Quiz () {
  const [questions, currentQuestionIndex, loading] = useQuestionsStore(state => [state.questions, state.currentQuestionIndex, state.loading])
  const goNext = useQuestionsStore(state => state.goNext)
  const [showResult, setShowResult] = useState(false)
  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleClick = () => {
    if (isLastQuestion) {
      setShowResult(true)
      return
    }

    goNext()
  }

  if (showResult) return <Result setShowResult={setShowResult} />
  return (
    <div className='bg-white px-8 py-16 rounded-3xl'>
      <h2 className='font-bold text-secondary text-2xl'>{currentQuestion.question}</h2>
      <ul className='mt-8 flex flex-col gap-6'>
        {currentQuestion.options.map((option, i) => {
          return (
            <Option key={i} option={option} index={i} answer={currentQuestion.answer} userAnswer={currentQuestion.userAnswer} />
          )
        })}
      </ul>
      <div className='md:pl-5 mt-4 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-primary font-bold'>
        <div className='flex justify-between gap-4'>

          <p>{currentQuestionIndex + 1}/{questions.length}</p>
        </div>
        <Button disabled={currentQuestion.userAnswer === '' || loading} onClick={handleClick}>Next</Button>
      </div>
    </div>
  )
};
