import {
  type TPositionFunction,
  type TPositionFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const position: TPositionFunction = (param1?: any, param2?: any, param3?: any) => {
  const styles: TPositionFunctionReturn = {}

  parse(styles, param1, param2, param3)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default position
