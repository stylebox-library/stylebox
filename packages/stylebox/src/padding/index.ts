// TODO: padding('none') => padding: 0

import { hasKeys } from '../__internal'

import {
  type TPaddingFunction,
  type TPaddingFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const padding: TPaddingFunction = (param1?: any, param2?: any, param3?: any, param4?: any) => {
  const styles: TPaddingFunctionReturn = {}

  parse(styles, param1, param2, param3, param4)

  if (hasKeys(styles)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default padding
export type { TPadding } from './types'
