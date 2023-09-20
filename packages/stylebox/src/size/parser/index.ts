import { parseValue } from '../../__internal'

import { type SizeParserFunctionType } from '../types'

const _parseObject = (styles: any, param1: any): boolean => {
  let isChanged = false

  if (param1) {
    if ('of' in param1) {
      const value = parseValue(param1.of)

      if (value !== null) {
        styles.width = value
        styles.height = value
        isChanged = true
      }
    }

    if ('width' in param1) {
      const value = parseValue(param1.width)

      if (value !== null) {
        styles.width = value
        isChanged = true
      }
    }

    if ('height' in param1) {
      const value = parseValue(param1.height)

      if (value !== null) {
        styles.height = value
        isChanged = true
      }
    }

    if ('minWidth' in param1) {
      const value = parseValue(param1.minWidth)

      if (value !== null) {
        styles.minWidth = value
        isChanged = true
      }
    }

    if ('minHeight' in param1) {
      const value = parseValue(param1.minHeight)

      if (value !== null) {
        styles.minHeight = value
        isChanged = true
      }
    }

    if ('maxWidth' in param1) {
      const value = parseValue(param1.maxWidth)

      if (value !== null) {
        styles.maxWidth = value
        isChanged = true
      }
    }

    if ('maxHeight' in param1) {
      const value = parseValue(param1.maxHeight)

      if (value !== null) {
        styles.maxHeight = value
        isChanged = true
      }
    }
  }

  return isChanged
}

export const key = 'size'

export const parse: SizeParserFunctionType = (styles: any, param1?: any, param2?: any, param3?: any) => {
  let isChanged = false

  // object or array
  if (typeof param1 === 'object') {
    // array
    if ('length' in param1) {
      isChanged = parse(styles, param1[0], param1[1], param1[2])

    // object
    } else {
      isChanged = _parseObject(styles, param1)
    }
  } else if (typeof param1 !== 'undefined') {
    // 1 param was passed
    if (typeof param2 === 'undefined') {
      const value = parseValue(param1)

      if (value !== null) {
        styles.width = value
        styles.height = value
        isChanged = true
      }

    // 2 params were passed
    } else if (typeof param3 === 'undefined') {
      // parse(0, { ... })
      if (typeof param2 === 'object') {
        const value = parseValue(param1)

        if (value !== null) {
          styles.width = value
          styles.height = value
          isChanged = true
        }

        if (_parseObject(styles, param2)) {
          isChanged = true
        }

      // parse(0, 0)
      } else {
        const value1 = parseValue(param1)

        if (value1 !== null) {
          styles.width = value1
          isChanged = true
        }

        const value2 = parseValue(param2)

        if (value2 !== null) {
          styles.height = value2
          isChanged = true
        }
      }

    // 3 params were passed
    } else {
      const value1 = parseValue(param1)

      if (value1 !== null) {
        styles.width = value1
        isChanged = true
      }

      const value2 = parseValue(param2)

      if (value2 !== null) {
        styles.height = value2
        isChanged = true
      }

      if (typeof param3 === 'object') {
        if (_parseObject(styles, param3)) {
          isChanged = true
        }
      }
    }
  }

  return isChanged
}
