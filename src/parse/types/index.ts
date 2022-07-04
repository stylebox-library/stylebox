import type { Properties as CSS } from 'csstype'

import type { CursorTypeMapType      as Cursor }      from '../../cursor/types'
import type { InteractionTypeMapType as Interaction } from '../../interaction/types'
import type { SizeTypeMapType        as Size }        from '../../size/types'

export type ParseParserFunctionType = {
  (styles: any)                              : void
  (styles: any, stylesToParse: StylesType)   : void
  (styles: any, stylesToParse: StylesType[]) : void
}

export type ParseFunctionType = {
  ()                     : ParseFunctionReturnType
  (styles: StylesType)   : ParseFunctionReturnType
  (styles: StylesType[]) : ParseFunctionReturnType
}

export type ParseFunctionReturnType =
  {}
  & Cursor['ReturnType']
  & Interaction['ReturnType']
  & Size['ReturnType']
  & CSS
  | [ParseFunctionReturnType]

export type StylesType =
  // Object
  { [index: string]: any }
  // & { [index: string]: any }

  & { cursor?:      Cursor['Type'] | CSS['cursor'] }
  & { interaction?: Interaction['Type'] }
  & { size?:        Size['Type'] }

  & Omit<CSS,
      'cursor'
    | 'cursor'
  >
