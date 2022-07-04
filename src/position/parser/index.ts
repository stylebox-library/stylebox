import { parseValue } from '../../__internal'

import {
  type TPositionParserFunction,
  type TPositionValue,
  type TPositionObject,
} from '../types'

const positionValueMap: Record<TPositionValue, 0> = {
  static:   0,
  relative: 0,
  absolute: 0,
  fixed:    0,
  sticky:   0,
}

const positionValueKeys: Array<TPositionValue> = [
  'absolute',
  'relative',
]

const directionalPositionKeys: Array<keyof TPositionObject> = [
  'top',
  'right',
  'bottom',
  'left',
  'vertical',
  'horizontal'
]

export const parse: TPositionParserFunction = (
  styles:  any,
  param1?: any,
  param2?: any,
  param3?: any,
  param4?: any
) => {
  if (typeof param1 === 'object' && param1 !== null) {
    if ('of' in param1) {
      // it's a position value
      if (param1.of in positionValueMap) {
        styles.position = param1.of
      }
    }

    // position values
    for (const key of positionValueKeys) {
      if (key in param1) {
        const value = param1[key]

        // if it's z-index
        if (typeof value === 'number') {
          styles.position = key
          styles.zIndex   = value

        // if it's an object
        } else if (typeof value === 'object' && value !== null) {
          styles.position = key

          parse(styles, value)
        }
      }
    }

    if ('zIndex' in param1) {
      if (typeof param1.zIndex === 'number' || typeof param1.zIndex === 'string') {
        styles.zIndex = param1.zIndex
      }
    }

    // directional positions
    for (const key of directionalPositionKeys) {
      if (key in param1) {
        const value = parseValue(param1[key])

        if (value !== null) {
          switch (key) {
            case 'left':
              styles.left = value
              break

            case 'right':
              styles.right = value
              break

            case 'top':
              styles.top = value
              break

            case 'bottom':
              styles.bottom = value
              break

            case 'horizontal':
              styles.left  = value
              styles.right = value
              break

            case 'vertical':
              styles.top    = value
              styles.bottom = value
              break
          }
        }
      }
    }
  } else {
    // parse(string, ...)
    if (typeof param1 === 'string') {
      // it's a position value
      if (param1 in positionValueMap) {
        styles.position = param1

      // it can be a directional position
      } else {
        const value = parseValue(param1)

        if (value !== null) {
          styles.top    = value
          styles.right  = value
          styles.bottom = value
          styles.left   = value
        }
      }

    // parse(number, ...)
    } else if (typeof param1 === 'number') {
      const value = parseValue(param1)

      if (value !== null) {
        styles.top    = value
        styles.right  = value
        styles.bottom = value
        styles.left   = value
      }

    // parse(false, ...)
    } else if (param1 === false) {
      styles.top    = 0
      styles.right  = 0
      styles.bottom = 0
      styles.left   = 0
    }

    if (typeof param2 !== 'undefined') {
      // parse(value, options)
      if (typeof param2 === 'object' && param2 !== null) {
        parse(styles, param2)

      // parse(value, value, ...)
      } else {
        const value = parseValue(param2)

        if (value !== null) {
          styles.left  = value
          styles.right = value
        }
      }

      if (typeof param3 !== 'undefined') {
        // parse(value, options)
        if (typeof param3 === 'object' && param3 !== null) {
          parse(styles, param3)
        }
      }
    }
  }
}
