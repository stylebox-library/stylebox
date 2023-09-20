import {
  type TDisplayParserFunction
} from '../types'

import {
  simpleDisplayMap,
  flexDisplayMap,
  parseSimpleDisplayOptions,
  parseFlexDisplayOptions,
  parseSecondaryOptions
} from './utils'

export const parse: TDisplayParserFunction = (
  styles: any,
  param1?: any,
  param2?: any,
  param3?: any
) => {
  if (typeof param1 === 'object' && param1 !== null) {
    if ('of' in param1) {
      if (typeof param1.of === 'string') {
        styles.display = param1.of
      }
    }

    for (const key of simpleDisplayMap) {
      if (key in param1) {
        parseSimpleDisplayOptions(styles, key, param1[key])

        // only parse 1st appearance
        break
      }
    }

    for (const key of flexDisplayMap) {
      if (key in param1) {
        parseFlexDisplayOptions(styles, key, param1[key])

        // only parse 1st appearance
        break
      }
    }

    parseSecondaryOptions(styles, param1)
  } else {
    // parse(_, value)
    if (typeof param1 === 'string') {
      styles.display = param1
    } else if (param1 === false) {
      styles.display = 'none'
    }

    if (typeof param2 !== 'undefined') {
      // parse(_, value, value)
      if (typeof param2 === 'string') {
        styles.position = param2
      }

      // parse(_, value, value, value)
      if (typeof param3 !== 'undefined') {
        if (typeof param3 === 'number') {
          styles.zIndex = param3
        }
      }
    }
  }
}
