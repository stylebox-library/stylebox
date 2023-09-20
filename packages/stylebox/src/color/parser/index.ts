import { parseAsCSSColor } from '../../__internal'

import type { TColorParserFunction } from '../types'

const _parseKey = (styles: any, styleKey: string, param: any, paramKey: string): boolean => {
  if (paramKey in param) {
    const color = parseAsCSSColor(param[paramKey])

    if (color !== null) {
      styles[styleKey] = color

      return true
    }
  }

  return false
}

const _parseColorObject = (styles: any, param: any): boolean => {
  let isChanged = false

  if (_parseKey(styles, 'color', param, 'of')) {
    isChanged = true
  }

  if (_parseKey(styles, 'color', param, 'text')) {
    isChanged = true
  }

  if (_parseKey(styles, 'backgroundColor', param, 'background')) {
    isChanged = true
  }

  if (_parseKey(styles, 'fill', param, 'fill')) {
    isChanged = true
  }

  if (_parseKey(styles, 'stroke', param, 'stroke')) {
    isChanged = true
  }

  return isChanged
}

export const key = 'color'

export const parse: TColorParserFunction = (styles: any, param1?: any, param2?: any, param3?: any) => {
  let isChanged = false

  if (typeof param1 !== 'object') {
    // parse(color)
    if (typeof param2 === 'undefined') {
      const color = parseAsCSSColor(param1)

      if (color !== null) {
        styles.color = color
        isChanged = true
      }

    // parse(text, background)
    } else {
      const text = parseAsCSSColor(param1)

      if (text !== null) {
        styles.color = text
        isChanged = true
      }

      const background = parseAsCSSColor(param2)

      if (background !== null) {
        styles.backgroundColor = background
        isChanged = true
      }

      // parse(text, background, { ... })
      if (typeof param3 !== 'undefined') {
        if (_parseColorObject(styles, param3)) {
          isChanged = true
        }
      }
    }

  // it's an object
  } else {
    // it's an array
    if (param1.length > 0) {
      const color = parseAsCSSColor(param1)

      if (color !== null) {
        styles.color = color
        isChanged = true
      }
    } else {
      if (_parseColorObject(styles, param1)) {
        isChanged = true
      }
    }
  }

  return isChanged
}
