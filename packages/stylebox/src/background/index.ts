import { hasKeys } from '../__internal'

import {
  type TBackgroundFunction,
  type TBackgroundFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const background: TBackgroundFunction = (param1?: any) => {
  const styles: TBackgroundFunctionReturn = {}

  parse(styles, param1)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default background
