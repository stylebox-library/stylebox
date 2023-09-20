import {
  type CursorCSSValueType,
  type CursorAliasCSSValueType,
  type CursorParserFunctionType
} from '../types'

const cursorMap: Record<CursorCSSValueType, 0> = {
  auto: 0,
  default: 0,
  none: 0,
  'context-menu': 0,
  help: 0,
  pointer: 0,
  progress: 0,
  wait: 0,
  cell: 0,
  crosshair: 0,
  text: 0,
  'vertical-text': 0,
  alias: 0,
  copy: 0,
  move: 0,
  'no-drop': 0,
  'not-allowed': 0,
  grab: 0,
  grabbing: 0,
  'all-scroll': 0,
  'col-resize': 0,
  'row-resize': 0,
  'n-resize': 0,
  'e-resize': 0,
  's-resize': 0,
  'w-resize': 0,
  'ne-resize': 0,
  'nw-resize': 0,
  'se-resize': 0,
  'sw-resize': 0,
  'ew-resize': 0,
  'ns-resize': 0,
  'nesw-resize': 0,
  'nwse-resize': 0,
  'zoom-in': 0,
  'zoom-out': 0
}

// TODO: add more aliases (loading, hide/hidden, touch, waiting, forbidden, no, resize-horizontal)
const cursorAliasMap: Record<CursorAliasCSSValueType, CursorCSSValueType> = {
  menu: 'context-menu',
  click: 'pointer',
  link: 'pointer',
  disabled: 'not-allowed',
  busy: 'wait'
}

export const key = 'cursor'

export const parse: CursorParserFunctionType = (styles: any, param1?: any) => {
  let isChanged = false

  if (typeof param1 === 'string') {
    if (param1 in cursorMap) {
      styles[key] = param1
      isChanged = true
    } else if (param1 in cursorAliasMap) {
      styles[key] = cursorAliasMap[param1 as CursorAliasCSSValueType]
      isChanged = true
    }
  } else if (param1 === false) {
    styles[key] = 'none'
    isChanged = true
  }

  return isChanged
}
