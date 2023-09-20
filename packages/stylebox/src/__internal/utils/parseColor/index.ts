import type { CSSColorValueType } from '../../types'

import parseCSSColor from '../parseCSSColor'

type ColorValueType =
    number // 0xFFFFFF
    | string // '0xFFF'
    | CSSColorValueType // 'red'

type ColorModificationType =
    number // .5
    | string // '50%'

type ColorType =
    ColorValueType
// | [ColorValueType]   // [0xFFFFFF]
// | [[ColorValueType]] // [[0xFFFFFF]]
// | [ColorValueType, ColorModificationType] // [0xFFFFFF, .5]

interface ParseColorFunctionType {
  (): null | string
  (color: ColorType): null | string
}

const parseColor: ParseColorFunctionType = (param1?: any) => {
  if (typeof param1 === 'number' && param1 >= 0 && param1 <= 0xFFFFFF) {
    // const red   = param1 >> 16
    // const green = param1 >> 8 & 0xFF
    // const blue  = param1 & 0xFF

    return '#' + param1.toString(16).padStart(6, '0')
  }

  if (typeof param1 === 'string' && param1.length > 0) {

  }

  return null
}

export default parseColor
