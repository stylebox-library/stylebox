import {
  type TFontFunction,
  type TFontFunctionReturn,
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const font: TFontFunction = (param1?: any) => {
  const styles: TFontFunctionReturn = {}

  parse(styles, param1)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default font
