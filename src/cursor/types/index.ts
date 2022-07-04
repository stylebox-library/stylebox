export type CursorCSSValueType =
    'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'all-scroll'
  | 'col-resize'
  | 'row-resize'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'zoom-in'
  | 'zoom-out'

export type CursorAliasCSSValueType =
  // context-menu alias
    'menu'

  // pointer aliases
  | 'click'
  | 'link'

  // not-allowed alias
  | 'disabled'

  // wait alias
  | 'busy'

// -----------------------------------------------------------------------------

export type CursorFunctionType = {
  ()                                : CursorFunctionReturnType
  (cursor: boolean)                 : CursorFunctionReturnType
  (cursor: CursorCSSValueType)      : CursorFunctionReturnType
  (cursor: CursorAliasCSSValueType) : CursorFunctionReturnType
  (cursor: string)                  : CursorFunctionReturnType
}

export type CursorFunctionReturnType =
    undefined
  | { cursor?: string }

// -----------------------------------------------------------------------------

export type CursorParserFunctionType = {
  (styles: any)                                  : boolean
  (styles: any, cursor: boolean)                 : boolean
  (styles: any, cursor: CursorCSSValueType)      : boolean
  (styles: any, cursor: CursorAliasCSSValueType) : boolean
  (styles: any, cursor: string)                  : boolean
}

// -----------------------------------------------------------------------------

export type CursorTypeMapType = {
  Type       : CursorType
  ReturnType : CursorFunctionReturnType
}

// -----------------------------------------------------------------------------

export type CursorType =
    null
  | boolean
  | CursorCSSValueType
  | CursorAliasCSSValueType
