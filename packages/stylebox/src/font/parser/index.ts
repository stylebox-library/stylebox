import { parseAsCSSColor, parseValue } from '../../__internal'

import {
  type TFontParserFunction,
  type TFontWeightKeyword,
  type TFontWeightValue
} from '../types'

const weightMap: Record<TFontWeightKeyword, TFontWeightValue> = {
  thin: 100,
  'extra-light': 200,
  light: 300,
  regular: 400,
  normal: 400,
  medium: 500,
  'semi-bold': 600,
  bold: 700,
  'extra-bold': 800,
  black: 900
}

export const parse: TFontParserFunction = (
  styles: any,
  param1?: any
) => {
  if (typeof param1 === 'object' && param1 !== null) {
    // family
    if (typeof param1.family === 'string') {
      styles.fontFamily = param1.family
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

    // spacing
    if ('spacing' in param1) {
      const spacing = parseValue(param1.spacing)

      if (spacing !== null) {
        styles.letterSpacing = spacing
      }
    }

    if ('lineHeight' in param1) {
      styles.lineHeight = param1.lineHeight
    }
  } else if (typeof param1 === 'string') {
    styles.font = param1
  }
}
