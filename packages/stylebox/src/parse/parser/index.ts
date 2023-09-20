// cursor ----------------------------------------------------------------------
import {
  key as cursorKey,
  parse as parseCursor
} from '../../cursor/parser'

// interaction -----------------------------------------------------------------
import {
  key as interactionKey,
  parse as parseInteraction
} from '../../interaction/parser'

// size ------------------------------------------------------------------------
import {
  key as sizeKey,
  parse as parseSize
} from '../../size/parser'

// -----------------------------------------------------------------------------
import {
  type ParseParserFunctionType
} from '../types'

// -----------------------------------------------------------------------------
const keyMap = {
  [cursorKey]: 0,
  [interactionKey]: 0,
  [sizeKey]: 0
} as const

export const parseObject: ParseParserFunctionType = (styles: any, param1?: any) => {
  // TODO: benchmark: whether to in-place-delete param1 or merge processed styles
  const processedStyles: any = {}

  if (typeof param1 === 'object' && param1) {
    // cursor ------------------------------------------------------------------
    if (cursorKey in param1) {
      parseCursor(processedStyles, param1[cursorKey])
    }

    // interaction -------------------------------------------------------------
    if (interactionKey in param1) {
      parseInteraction(processedStyles, param1[interactionKey])
    }

    // size --------------------------------------------------------------------
    if (sizeKey in param1) {
      parseSize(processedStyles, param1[sizeKey])
    }

    // add non-stylebox properties
    for (const key in param1) {
      // TODO: benchmark: wether .hasOwnProperty() is needed
      if (param1.hasOwnProperty(key) && !(key in keyMap)) {
        styles[key] = param1[key]
      }
    }
  }

  // merge stylebox and (overwrite) css properties
  Object.assign(styles, processedStyles)
}

export const parseArray: ParseParserFunctionType = (styles: any, param1?: any) => {
  // TODO: benchmark: .isArray() vs 'length' in param1
  if (Array.isArray(param1)) {
    if (!Array.isArray(styles)) {
      throw new Error(`Styles must be an array too, got: ${styles} (typeof: ${typeof styles}).`)
    }

    for (let i = 0, len = param1.length; i < len; i++) {
      styles[i] = {}
      parseObject(styles[i], param1[i])
    }
  }
}
