import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'o',
  'oo',
  'e',
  'ee',
  'i',
  'ii',
  'h',
  'k',
  'm',
  'n',
  'p',
  's',
  't',
  'w',
  'y',
  'ch',
  'th',
  
  
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
