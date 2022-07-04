import {
  type SizeFunctionType,
  type SizeFunctionReturnType,
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const size: SizeFunctionType = (param1?: any, param2?: any, param3?: any) => {
  const styles: SizeFunctionReturnType = {}

  if (parse(styles, param1, param2, param3)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default size
export type { SizeType } from './types'
