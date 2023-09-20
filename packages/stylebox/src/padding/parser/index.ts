import { parseValue } from '../../__internal'

import {
  type TPaddingParserFunction,
  type TPaddingObject
} from '../types'

// TODO: optimize based on usage statistics
const paddingKeys: Array<keyof TPaddingObject> = [
  'top',
  'right',
  'bottom',
  'left',
  'horizontal',
  'vertical',
  'of'
]

export const parse: TPaddingParserFunction = (
  styles: any,
  param1?: any,
  param2?: any,
  param3?: any,
  param4?: any
) => {
  // parse({ ... })
  if (typeof param1 === 'object' && param1 !== null) {
    for (const key of paddingKeys) {
      if (key in param1) {
        const value = parseValue(param1[key])

        if (value !== null) {
          switch (key) {
            case 'left':
              styles.paddingLeft = value
              break

            case 'right':
              styles.paddingRight = value
              break

            case 'top':
              styles.paddingTop = value
              break

            case 'bottom':
              styles.paddingBottom = value
              break

            case 'horizontal':
              styles.paddingLeft = value
              styles.paddingRight = value
              break

            case 'vertical':
              styles.paddingTop = value
              styles.paddingBottom = value
              break

            case 'of':
              styles.padding = value
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
        styles.padding = value
      }
    } else {
      // parse(number, number | { ... })
      if (typeof param3 === 'undefined') {
        // parse(number, { ... })
        if (typeof param2 === 'object') {
          const value = parseValue(param1)

          if (value !== null) {
            styles.padding = value
          }

          if (param2 !== null) {
            parse(styles, param2)
          }

        // parse(number, number)
        } else {
          const verticalValue = parseValue(param1)

          if (verticalValue !== null) {
            styles.paddingTop = verticalValue
            styles.paddingBottom = verticalValue
          }

          const horizontalValue = parseValue(param2)

          if (horizontalValue !== null) {
            styles.paddingLeft = horizontalValue
            styles.paddingRight = horizontalValue
          }
        }
      } else {
        // param(number, number, number | { ... })
        if (typeof param4 === 'undefined') {
          // param(number, number, { ... })
          if (typeof param3 === 'object') {
            const verticalValue = parseValue(param1)

            if (verticalValue !== null) {
              styles.paddingTop = verticalValue
              styles.paddingBottom = verticalValue
            }

            const horizontalValue = parseValue(param2)

            if (horizontalValue !== null) {
              styles.paddingLeft = horizontalValue
              styles.paddingRight = horizontalValue
            }

            if (param3 !== null) {
              parse(styles, param3)
            }

          // parse(number, number, number)
          } else {
            const topValue = parseValue(param1)

            if (topValue !== null) {
              styles.paddingTop = topValue
            }

            const horizontalValue = parseValue(param2)

            if (horizontalValue !== null) {
              styles.paddingLeft = horizontalValue
              styles.paddingRight = horizontalValue
            }

            const bottomValue = parseValue(param3)

            if (bottomValue !== null) {
              styles.paddingBottom = bottomValue
            }
          }

        // param(number, number, number, number)
        } else {
          const topValue = parseValue(param1)

          if (topValue !== null) {
            styles.paddingTop = topValue
          }

          const rightValue = parseValue(param2)

          if (rightValue !== null) {
            styles.paddingRight = rightValue
          }

          const bottomValue = parseValue(param3)

          if (bottomValue !== null) {
            styles.paddingBottom = bottomValue
          }

          const leftValue = parseValue(param4)

          if (leftValue !== null) {
            styles.paddingLeft = leftValue
          }
        }
      }
    }
  }
}
