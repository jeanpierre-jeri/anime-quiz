import { useQuestionsStore } from '@/store/questions.store'
import { WinnerDraw } from './WinnerDraw'
import { ButtonOutline } from './ButtonOutline'

export function Result ({ setShowResult }: { setShowResult: (value: boolean) => void }) {
  const [questions, loading, reset] = useQuestionsStore(state => [state.questions, state.loading, state.reset])
  const correctAnswers = questions.filter(question => question.answer === question.userAnswer).length

  const handleClick = async () => {
    const { ready } = await reset()
    if (ready && !loading) {
      setShowResult(false)
    }
  }

  return (
    <div className='bg-white flex flex-col justify-center px-4 p-12 md:px-28 md:py-12 rounded-3xl'>
      <WinnerDraw />

      <h2 className='font-bold text-5xl text-[#1D355D] text-center mt-16'>Results</h2>
      <p className='font-normal text-lg text-[#1D355D] text-center mt-4'>You got <strong className='font-bold text-4xl text-[#6FCF97]'>{correctAnswers}</strong> correct answer(s)</p>

      <ButtonOutline disabled={loading} onClick={handleClick}>Try Again</ButtonOutline>
    </div>
  )
};
