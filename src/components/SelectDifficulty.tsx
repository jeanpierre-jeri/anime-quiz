'use client'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { useQuestionsStore } from '@/store/questions.store'

export function SelectDifficulty () {
  const setDifficulty = useQuestionsStore(state => state.setDifficulty)

  return (
    <div className='flex items-center gap-2 text-white font-bold'>
      <h3 className='font-bold'>Dificulty:</h3>
      <Select defaultValue='easy' onValueChange={setDifficulty}>
        <SelectTrigger className='w-28'>
          <SelectValue placeholder='Select difficulty' />
        </SelectTrigger>
        <SelectContent className='text-white font-bold bg-primary'>
          <SelectGroup>
            <SelectItem className='cursor-pointer' value='easy'>Easy</SelectItem>
            <SelectItem className='cursor-pointer' value='medium'>Medium</SelectItem>
            <SelectItem className='cursor-pointer' value='hard'>Hard</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
};
