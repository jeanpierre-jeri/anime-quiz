'use client'
import { useRef } from 'react'
import { useQuestionsStore } from '@/store/questions.store'
import type { Question } from '@/types'

export function StoreInitializer ({ questions }: { questions: Question[] }) {
  const initialized = useRef(false)
  if (!initialized.current) {
    useQuestionsStore.setState({ questions })
    initialized.current = true
  }
  return null
}
