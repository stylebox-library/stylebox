import {
  type InteractionParserFunctionType
} from '../types'

export const key = 'interaction'

export const parse: InteractionParserFunctionType = (styles: any, param1?: any) => {
  let isChanged = false

  if (typeof param1 === 'object' && param1) {
    // parse selectable --------------------------------------------------------
    if (typeof param1.selectable === 'string') {
      styles.userSelect = param1.selectable
      isChanged = true
    } else if (param1.selectable === false) {
      styles.userSelect = 'none'
      isChanged = true
    }

    // parse interactive -------------------------------------------------------
    if (typeof param1.interactive === 'string') {
      styles.pointerEvents = param1.interactive
      isChanged = true
    } else if (param1.interactive === false) {
      styles.pointerEvents = 'none'
      isChanged = true
    }
  } else if (param1 === false) {
    styles.userSelect = 'none'
    styles.pointerEvents = 'none'
    isChanged = true
  }

  return isChanged
}
