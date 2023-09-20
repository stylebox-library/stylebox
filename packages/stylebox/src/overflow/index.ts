import { hasKeys } from '../__internal'

import {
  type TOverflowFunction,
  type TOverflowFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const overflow: TOverflowFunction = (param1?: any, param2?: any) => {
  const styles: TOverflowFunctionReturn = {}

  parse(styles, param1, param2)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default overflow
