// TODO: margin('none') => margin: 0

import {
  type TMarginFunction,
  type TMarginFunctionReturn
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const margin: TMarginFunction = (param1?: any, param2?: any, param3?: any, param4?: any) => {
  const styles: TMarginFunctionReturn = {}

  parse(styles, param1, param2, param3, param4)

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      return styles
    }
  }
}

// -----------------------------------------------------------------------------

export default margin
export type { TMargin } from './types'
