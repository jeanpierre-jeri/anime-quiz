import { Decorations, Quiz } from '@/components'
import { SelectDifficulty } from '@/components/SelectDifficulty'
import { StoreInitializer } from '@/components/StoreItinializer'
import { getQuestions } from '@/services/questions.service'
import { useQuestionsStore } from '@/store/questions.store'

export default async function Home () {
  const questions = await getQuestions()
  useQuestionsStore.setState({ questions })
  return (
    <main className='flex justify-center items-center min-h-screen bg-primary/70 relative overflow-hidden'>
      <StoreInitializer questions={questions} />
      <Decorations />
      <section className='relative px-4 md:px-0 w-full max-w-lg'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start mb-4 gap-2'>
          <h1 className='uppercase font-bold text-zinc-100 text-center text-4xl'>Anime Quiz</h1>
          <SelectDifficulty initialDifficulty='easy' />
        </div>
        <Quiz />
      </section>
    </main>
  )
}
