import {
  type TColorFunction,
  type TColorFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const color: TColorFunction = (param1?: any, param2?: any, param3?: any) => {
  const styles: TColorFunctionReturn = {}

  if (parse(styles, param1, param2, param3)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default color
export type { TColor as ColorType } from './types'
