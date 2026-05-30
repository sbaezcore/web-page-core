import { en } from './en'
import { es } from './es'

const dictionaries = {
  en,
  es,
}

export type Locale = keyof typeof dictionaries

export const getDictionary = (locale: string) => {
  return dictionaries[locale as Locale] ?? dictionaries.en
}
