import { parseValue } from '../../__internal'

import {
  type TMarginParserFunction,
  type TMarginObject
} from '../types'

// TODO: optimize based on usage statistics
const marginKeys: Array<keyof TMarginObject> = [
  'top',
  'right',
  'bottom',
  'left',
  'horizontal',
  'vertical',
  'of'
]

export const parse: TMarginParserFunction = (
  styles: any,
  param1?: any,
  param2?: any,
  param3?: any,
  param4?: any
) => {
  // parse({ ... })
  if (typeof param1 === 'object' && param1 !== null) {
    for (const key of marginKeys) {
      if (key in param1) {
        const value = parseValue(param1[key])

        if (value !== null) {
          switch (key) {
            case 'left':
              styles.marginLeft = value
              break

            case 'right':
              styles.marginRight = value
              break

            case 'top':
              styles.marginTop = value
              break

            case 'bottom':
              styles.marginBottom = value
              break

            case 'horizontal':
              styles.marginLeft = value
              styles.marginRight = value
              break

            case 'vertical':
              styles.marginTop = value
              styles.marginBottom = value
              break

            case 'of':
              styles.margin = value
              break
          }
        }
      }
    }
  } else {
    // parse(number)
    if (typeof param2 === 'undefined') {
      const value = parseValue(param1)

      if (value !== null) {
        styles.margin = value
      }
    } else {
      // parse(number, number | { ... })
      if (typeof param3 === 'undefined') {
        // parse(number, { ... })
        if (typeof param2 === 'object') {
          const value = parseValue(param1)

          if (value !== null) {
            styles.margin = value
          }

          if (param2 !== null) {
            parse(styles, param2)
          }

        // parse(number, number)
        } else {
          const verticalValue = parseValue(param1)

          if (verticalValue !== null) {
            styles.marginTop = verticalValue
            styles.marginBottom = verticalValue
          }

          const horizontalValue = parseValue(param2)

          if (horizontalValue !== null) {
            styles.marginLeft = horizontalValue
            styles.marginRight = horizontalValue
          }
        }
      } else {
        // param(number, number, number | { ... })
        if (typeof param4 === 'undefined') {
          // param(number, number, { ... })
          if (typeof param3 === 'object') {
            const verticalValue = parseValue(param1)

            if (verticalValue !== null) {
              styles.marginTop = verticalValue
              styles.marginBottom = verticalValue
            }

            const horizontalValue = parseValue(param2)

            if (horizontalValue !== null) {
              styles.marginLeft = horizontalValue
              styles.marginRight = horizontalValue
            }

            if (param3 !== null) {
              parse(styles, param3)
            }

          // parse(number, number, number)
          } else {
            const topValue = parseValue(param1)

            if (topValue !== null) {
              styles.marginTop = topValue
            }

            const horizontalValue = parseValue(param2)

            if (horizontalValue !== null) {
              styles.marginLeft = horizontalValue
              styles.marginRight = horizontalValue
            }

            const bottomValue = parseValue(param3)

            if (bottomValue !== null) {
              styles.marginBottom = bottomValue
            }
          }

        // param(number, number, number, number)
        } else {
          const topValue = parseValue(param1)

          if (topValue !== null) {
            styles.marginTop = topValue
          }

          const rightValue = parseValue(param2)

          if (rightValue !== null) {
            styles.marginRight = rightValue
          }

          const bottomValue = parseValue(param3)

          if (bottomValue !== null) {
            styles.marginBottom = bottomValue
          }

          const leftValue = parseValue(param4)

          if (leftValue !== null) {
            styles.marginLeft = leftValue
          }
        }
      }
    }
  }
}
