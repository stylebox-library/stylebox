import {
  type TParseAsCSSColorFunction,
  type TCSSColorKeyword
} from './types'

import {
  type TColorTuple,

  convertToHSL,
  convertToRGB,

  darken,
  lighten,
  parseAlpha,
  numberToHex
} from './utils'

import { cssColorNameValueMap } from '../color-maps'

export type { TCSSMetaColor } from './types'

// TODO: add all options below
// type Color =
//     number   // 0xFFFFFF
//   | string   // '0xFFF'
//   | CSSColor // 'red'

//   | [number]   // [0xFFFFFF]
//   | [string]   // ['0xFFF']
//   | [CSSColor] // ['red']

//   | [[number]]   // [[0xFFFFFF]]
//   | [[string]]   // [['0xFFF']]
//   | [[CSSColor]] // [['red']]

//   | [[number,   number | string]] // [[0xFFFFFF, .5]]
//   | [[string,   number | string]] // [['0xFFF',  .5]]
//   | [[CSSColor, number | string]] // [['red',    .5]]

//   | [number,   number | string] // [0xFFFFFF, .5 | '50%']
//   | [string,   number | string] // ['0xFFF',  .5 | '50%']
//   | [CSSColor, number | string] // ['red',    .5 | '50%']

//   | [[number],   number | string] // [[0xFFFFFF],   .5 | '50%']
//   | [[string],   number | string] // [['0xFFF'],    .5 | '50%']
//   | [[CSSColor], number | string] // [['red'],      .5 | '50%']

//   | [[number,   number | string], number | string] // [[0xFFFFFF, .5], .5 | '50%']
//   | [[string,   number | string], number | string] // [['0xFFF',  .5], .5 | '50%']
//   | [[CSSColor, number | string], number | string] // [['red',    .5], .5 | '50%']

// type BackgroundGradientObjectType = {
//   gradient:
//       [...Color[]]
//     | [...CSSColor[]]
//     | [number | string, ...number[] | string[]]
//     | {
//       angle?: number | string
//       colors?:
//           [...Color[]]
//         | [...CSSColor[]]
//     }
// }

export const parseAsCSSColor: TParseAsCSSColorFunction = (param1?: any, param2?: any, param3?: any) => {
  if (typeof param1 === 'number') {
    if (param1 >= 0 && param1 <= 0xFFFFFF) {
      if (typeof param2 === 'number') {
        const red = param1 >> 16
        const green = param1 >> 8 & 0xFF
        const blue = param1 & 0xFF

        return 'rgba(' +
          red + ',' +
          green + ',' +
          blue + ',' +
          parseAlpha(param2) + ')'
      }

      if (typeof param2 === 'object') {
        const tuple: TColorTuple = [0, 0, 0]

        convertToHSL(tuple, param1)

        if ('darken' in param2) {
          darken(tuple, param2.darken)
        }

        if ('lighten' in param2) {
          lighten(tuple, param2.lighten)
        }

        convertToRGB(tuple)

        return '#' +
          (
            numberToHex(tuple[0]) +
            numberToHex(tuple[1]) +
            numberToHex(tuple[2])
          )
      }

      return '#' + param1.toString(16).padStart(6, '0')
    }
  } else if (typeof param1 === 'string' && param1.length > 0) {
    let color = param1

    if (color in cssColorNameValueMap) {
      color = cssColorNameValueMap[color as TCSSColorKeyword]
    }

    if (color.startsWith('0x')) {
      color = '#' + color.substring(2)
    }

    if (typeof param2 === 'number') {
      const red = parseInt(color.substring(1, 3), 16)
      const green = parseInt(color.substring(3, 5), 16)
      const blue = parseInt(color.substring(5, 7), 16)

      return 'rgba(' +
        red + ',' +
        green + ',' +
        blue + ',' +
        parseAlpha(param2) + ')'
    }

    return color
  }

  if (typeof param1 === 'object' && param1.length > 0) {
    return parseAsCSSColor(param1[0], param1[1], param1[2])
  }

  return null
}
