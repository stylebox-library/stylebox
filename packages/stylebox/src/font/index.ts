import { hasKeys } from '../__internal'

import {
  type TFontFunction,
  type TFontFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const font: TFontFunction = (param1?: any) => {
  const styles: TFontFunctionReturn = {}

  parse(styles, param1)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default font
