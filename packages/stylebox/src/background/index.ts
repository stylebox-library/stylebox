import {
  type TBackgroundFunction,
  type TBackgroundFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const background: TBackgroundFunction = (param1?: any) => {
  const styles: TBackgroundFunctionReturn = {}

  parse(styles, param1)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default background
