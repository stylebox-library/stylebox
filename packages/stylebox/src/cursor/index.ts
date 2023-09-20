import {
  type CursorFunctionType,
  type CursorFunctionReturnType
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const cursor: CursorFunctionType = (param1?: any) => {
  const styles: CursorFunctionReturnType = {}

  if (parse(styles, param1)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default cursor
export type { CursorType } from './types'
