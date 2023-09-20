import { hasKeys } from '../__internal'

import {
  type TTextFunction,
  type TTextFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const text: TTextFunction = (param1?: any) => {
  const styles: TTextFunctionReturn = {}

  parse(styles, param1)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default text
