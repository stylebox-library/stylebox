// e.g.: interactivity(false)
// e.g.: interactivity(false, 'cursor')
// e.g.: interactivity({ selectable: ..., pointerEvents, cursor: ... })

import {
  type InteractionFunctionType,
  type InteractionFunctionReturnType,
} from './types'

import { parse } from './parser'

// -----------------------------------------------------------------------------

const interaction: InteractionFunctionType = (param1?: any) => {
  const styles: InteractionFunctionReturnType = {}

  if (parse(styles, param1)) {
    return styles
  }
}

// -----------------------------------------------------------------------------

export default interaction
export type { InteractionType } from './types'
