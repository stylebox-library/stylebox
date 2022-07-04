// TODO: use @polycolor/rgba
import { rgba } from 'polished'

import type { CSSColorValueType } from '../common/CSSColorValueType'
import type { ColorType } from '../common/types'

type FillReturnType =
    undefined
  | { fill?: string }

type FillFunctionType = {
  (color: CSSColorValueType): FillReturnType
  (color: number | string): FillReturnType
  (color: CSSColorValueType, alpha: number): FillReturnType
  (color: number | string, alpha: number): FillReturnType
  (color: ColorType): FillReturnType
}

const fill: FillFunctionType = (param1: any, param2?: any) => {
  const style: FillReturnType = {}

  if (typeof param1 === 'number' || typeof param1 === 'string') {
    style.fill = typeof param2 === 'number'
      ? rgba(param1, param2)
      : param1 as any

    return style

  } else if (typeof param1 === 'object' && param1) {
    if (param1.length > 0) {
      style.fill = typeof param1[1] === 'number'
        ? rgba(param1[0], param1[1])
        : param1[0]

      return style
    }
  }
}

export default fill
