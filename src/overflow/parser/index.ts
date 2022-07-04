import {
  type TOverflowParserFunction,
} from '../types'

export const parse: TOverflowParserFunction = (styles: any, param1?: any, param2?: any) => {
  // parse(object)
  if (typeof param1 === 'object' && param1 !== null) {
    if ('x' in param1) {
      if (typeof param1.x === 'string') {
        styles.overflowX = param1.x
      } else if (param1.x === false) {
        styles.overflowX = 'hidden'
      }
    }

    if ('y' in param1) {
      if (typeof param1.y === 'string') {
        styles.overflowY = param1.y
      } else if (param1.y === false) {
        styles.overflowY = 'hidden'
      }
    }
  } else {
    // parse(value)
    if (typeof param2 === 'undefined') {
      if (typeof param1 === 'string') {
        styles.overflow = param1
      } else if (param1 === false) {
        styles.overflow = 'hidden'
      }

    // parse(value, value)
    } else {
      if (typeof param1 === 'string') {
        styles.overflowX = param1
      } else if (param1 === false) {
        styles.overflowX = 'hidden'
      }

      if (typeof param2 === 'string') {
        styles.overflowY = param2
      } else if (param2 === false) {
        styles.overflowY = 'hidden'
      }
    }
  }
}
