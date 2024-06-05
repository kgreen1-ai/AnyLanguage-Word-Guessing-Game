import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
