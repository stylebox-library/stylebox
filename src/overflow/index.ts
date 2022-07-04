import {
  type TOverflowFunction,
  type TOverflowFunctionReturn,
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const overflow: TOverflowFunction = (param1?: any, param2?: any) => {
  const styles: TOverflowFunctionReturn = {}

  parse(styles, param1, param2)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default overflow
