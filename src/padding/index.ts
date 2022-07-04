// TODO: padding('none') => padding: 0

import {
  type TPaddingFunction,
  type TPaddingFunctionReturn,
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const padding: TPaddingFunction = (param1?: any, param2?: any, param3?: any, param4?: any) => {
  const styles: TPaddingFunctionReturn = {}

  parse(styles, param1, param2, param3, param4)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default padding
export type { TPadding } from './types'
