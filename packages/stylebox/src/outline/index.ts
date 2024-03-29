import { hasKeys } from '../__internal'

import {
  type TOutlineFunction,
  type TOutlineFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const outline: TOutlineFunction = (param1?: any, param2?: any, param3?: any, param4?: any) => {
  const styles: TOutlineFunctionReturn = {}

  parse(styles, param1, param2, param3, param4)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default outline
