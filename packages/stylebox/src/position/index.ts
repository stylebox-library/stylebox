import { hasKeys } from '../__internal'

import {
  type TPositionFunction,
  type TPositionFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const position: TPositionFunction = (param1?: any, param2?: any, param3?: any) => {
  const styles: TPositionFunctionReturn = {}

  parse(styles, param1, param2, param3)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default position
