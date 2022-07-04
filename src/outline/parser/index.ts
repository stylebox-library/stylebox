// TODO: config: set defaults (e.g.: default width, style, and color)

import { parseAsCSSColor } from '@internal'
import { parseValue } from '@internal'

import {
  type TOutlineParserFunction,
} from '../types'

export const parse: TOutlineParserFunction = (
  styles: any,
  param1?: any,
  param2?: any,
  param3?: any,
  param4?: any
) => {
  // parse({ ... })
  if (typeof param1 === 'object' && param1 !== null) {
    // defaults
    let width = '1px'
    let style = 'solid'
    let color = '#ff0000'

    if ('width' in param1) {
      width = param1.width
    }

    if ('style' in param1) {
      style = param1.style
    }

    if ('color' in param1) {
      const parsedColor = parseAsCSSColor(param1.color)

      if (parsedColor !== null) {
        color = parsedColor
      }
    }

    styles.outline = width + ' ' + style + ' ' + color

    if ('offset' in param1) {
      styles.outlineOffset = param1.offset
    }

  } else {
    // parse(value)
    if (typeof param2 === 'undefined') {
      if (param1 === false) {
        styles.outline = 'none'
      }

    } else {
      // parse(value, value)
      if (typeof param3 === 'undefined') {

      // parse(value, value, value, ?)
      } else {
        let width: number | string = '1px'
        let style = 'solid'
        let color = '#ff0000'

        const parsedWidth = parseValue(param1)

        if (parsedWidth !== null) {
          width = parsedWidth
        }

        if (typeof param2 === 'string') {
          style = param2
        }

        const parsedColor = parseAsCSSColor(param3)

        if (parsedColor !== null) {
          color = parsedColor
        }

        styles.outline = width + ' ' + style + ' ' + color

        // parse(value, value, value, value)
        if (typeof param4 !== 'undefined') {
          const parsedOffset = parseValue(param4)

          if (parsedOffset !== null) {
            styles.outlineOffset = parsedOffset
          }
        }
      }
    }
  }
}
