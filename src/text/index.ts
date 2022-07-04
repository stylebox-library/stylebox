import {
  type TTextFunction,
  type TTextFunctionReturn,
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const text: TTextFunction = (param1?: any) => {
  const styles: TTextFunctionReturn = {}

  parse(styles, param1)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default text
