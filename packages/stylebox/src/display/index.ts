import { hasKeys } from '../__internal'

import {
  type TDisplayFunction,
  type TDisplayFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const display: TDisplayFunction = (param1?: any, param2?: any, param3?: any) => {
  const styles: TDisplayFunctionReturn = {}

  parse(styles, param1, param2, param3)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default display
