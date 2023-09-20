import { parseAsCSSColor, parseValue } from '../../__internal'

import { type TBorderParserFunction } from '../types'

const borderKeys = [
  'top',
  'bottom',
  'left',
  'right',
  'vertical',
  'horizontal'
] as const

export const parse: TBorderParserFunction = (
  styles: any,
  param1?: any,
  param2?: any,
  param3?: any,
  param4?: any
) => {
  // parse(_, object)
  if (typeof param1 === 'object' && param1 !== null) {
    if ('of' in param1) {
      const _of = param1.of

      if (typeof _of === 'object' && _of.length > 0) {
        parse(styles, _of[0], _of[1], _of[2], _of[3])
      } else if (_of === false) {
        styles.border = 'none'
      }
    }

    if ('radius' in param1) {
      const radius = parseValue(param1.radius)

      if (radius !== null) {
        styles.borderRadius = radius
      }
    }

    for (const key of borderKeys) {
      if (key in param1) {
        const borderPart = param1[key]

        let borderValue = null

        if (typeof borderPart === 'object' && borderPart.length > 0) {
          const width = parseValue(borderPart[0])
          const style = borderPart[1]
          const color = parseAsCSSColor(borderPart[2])

          borderValue = width + ' ' + style + ' ' + color
        } else if (borderPart === false) {
          borderValue = 'none'
        }

        if (borderValue !== null) {
          switch (key) {
            case 'top':
              styles.borderTop = borderValue
              break

            case 'bottom':
              styles.borderBottom = borderValue
              break

            case 'left':
              styles.borderLeft = borderValue
              break

            case 'right':
              styles.borderRight = borderValue
              break

            case 'vertical':
              styles.borderTop = borderValue
              styles.borderBottom = borderValue
              break

            case 'horizontal':
              styles.borderLeft = borderValue
              styles.borderRight = borderValue
              break
          }
        }
      }
    }
  } else {
    // parse(_, boolean)
    if (typeof param1 === 'boolean') {
      if (!param1) {
        styles.border = 'none'
      }
    } else {
      // param(_, value, value, value)
      if (typeof param3 !== 'undefined') {
        const width = parseValue(param1)
        const style = param2
        const color = parseAsCSSColor(param3)

        styles.border = width + ' ' + style + ' ' + color

        // param(_, value, value, value, value)
        if (typeof param4 !== 'undefined') {
          const borderRadius = parseValue(param4)

          if (borderRadius !== null) {
            styles.borderRadius = borderRadius
          }
        }
      }
    }
  }
}
