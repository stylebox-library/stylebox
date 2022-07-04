import {
  type ParseFunctionType,
  type ParseFunctionReturnType,
} from './types'

import { parseObject as parser } from './parser'

const parse: ParseFunctionType = (param1?: any) => {
  const styles: ParseFunctionReturnType = {}

  if (typeof param1 === 'object' && param1) {
    parser(styles, param1)
  }

  // parser(styles, param1)

  return {}
}

// -----------------------------------------------------------------------------

export default parse
export type { StylesType } from './types'
