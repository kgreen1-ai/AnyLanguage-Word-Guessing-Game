import { CONFIG } from './config'

export const WORDS = [
  'manetowa',
  'atowa',
  'ositowa',
  'ahai',
  'kaski',
  'kwinothiwa',
  'inoweea',
  'nenotamwa',
  'tekai',
  'neechi',
  'weeneha',
  'weenehi',
  'kasoochi',
  'taanahi',
  'eiki',
  'seeski',
  'nesii',
  'othaami',
  'meekwe',
  'potwe',
  'inoki',
  "taa'ni",
  "taan'na",
  'taaniisi',
  'keethwi',
  'neekaki',
  'tepekoki',
  'waapake',
  'eepekoteeki',
  'owiiyai',
  'owiisi',
  'opwi',
  'okiyani',
  
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
