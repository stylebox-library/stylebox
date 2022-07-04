import { parseAsCSSColor } from '@internal'

import { parseValue } from '@internal'

import {
  type TFontWeightKeyword,
  type TFontWeightValue,
} from '../../font/types'

import {
  type TTextParserFunction,
} from '../types'

const weightMap: Record<TFontWeightKeyword, TFontWeightValue> = {
  thin:          100,
  'extra-light': 200,
  light:         300,
  regular:       400,
  normal:        400,
  medium:        500,
  'semi-bold':   600,
  bold:          700,
  'extra-bold':  800,
  black:         900,
}

const parseShadow = (object: any): null | string => {
  let x     = null
  let y     = null
  let blur  = null
  let color = null

  if ('x' in object) {
    x = parseValue(object.x)
  }

  if ('y' in object) {
    y = parseValue(object.y)
  }

  if ('blur' in object) {
    blur = parseValue(object.blur)
  }

  if ('color' in object) {
    color = parseAsCSSColor(object.color)
  }

  // it's a useless result
  if (x === null
    && y === null
    && blur === null
    && color === null
  ) {
    return null
  }

  // 0 works for x and y default values
  if (x === null) {
    x = 0
  }

  if (y === null) {
    y = 0
  }

  // has color
  if (color !== null) {
    // x, y, blur, and color
    if (blur !== null) {
      return x + ' ' + y + ' ' + blur + ' ' + color
    }

    // only x, y, and color
    return x + ' ' + y + ' ' + color

  // no color
  } else {
    // x, y, and blur
    if (blur !== null) {
      return x + ' ' + y + ' ' + blur
    }

    // only x and y
    return x + ' ' + y
  }
}

export const parse: TTextParserFunction = (
  styles:  any,
  param1?: any
) => {
  if (typeof param1 === 'object' && param1 !== null) {

    if (typeof param1.font === 'string') {
      styles.font = param1.font
    }

    // color
    if ('color' in param1) {
      const color = parseAsCSSColor(param1.color)

      if (color !== null) {
        styles.color = color
      }
    }

    // size
    if ('size' in param1) {
      const size = parseValue(param1.size)

      if (size !== null) {
        styles.fontSize = size
      }
    }

    // weight
    if ('weight' in param1) {
      const weight = param1.weight

      if (typeof weight === 'number') {
        styles.fontWeight = weight

      } else if (typeof weight === 'string') {
        if (weight in weightMap) {
          styles.fontWeight = (weightMap as any)[weight]
        } else {
          styles.fontWeight = weight
        }
      }
    }

    // italic
    if (param1.italic === true) {
      styles.fontStyle = 'italic'
    }

    // underline
    if (param1.underline === true) {
      styles.textDecoration = 'underline'
    }

    // spacing
    if ('spacing' in param1) {
      const spacing = parseValue(param1.spacing)

      if (spacing !== null) {
        styles.letterSpacing = spacing
      }
    }

    // decoration
    if ('decoration' in param1) {
      const decoration = param1.decoration

      if (typeof decoration === 'string') {
        styles.textDecoration = decoration
      } else if (decoration === false) {
        styles.textDecoration = 'none'
      }
    }

    // transform
    if ('transform' in param1) {
      const transform = param1.transform

      if (typeof transform === 'string') {
        styles.textTransform = transform
      } else if (transform === false) {
        styles.textTransform = 'none'
      }
    }

    if ('shadow' in param1) {
      if (typeof param1.shadow === 'object' && param1.shadow !== null) {
        // it's an array
        if (param1.shadow.length > 0) {
          const shadows: string[] = []

          for (const rawShadow of param1.shadow) {
            if (typeof rawShadow === 'object' && rawShadow !== null) {
              const shadow = parseShadow(rawShadow)

              if (shadow !== null) {
                shadows.push(shadow)
              }
            }
          }

          if (shadows.length > 0) {
            styles.textShadow = shadows.join(', ')
          }

        // it's an object
        } else {
          const shadow = parseShadow(param1.shadow)

          if (shadow !== null) {
            styles.textShadow = shadow
          }
        }
      }
    }

    // line height
    if ('lineHeight' in param1) {
      styles.lineHeight = param1.lineHeight
    }
  }
}
