import {
  type TBorderFunction,
  type TBorderFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const border: TBorderFunction = (
  param1?: any,
  param2?: any,
  param3?: any,
  param4?: any
) => {
  const styles: TBorderFunctionReturn = {}

  parse(styles, param1, param2, param3, param4)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default border
