import type { TCSSMetaColor } from '../../__internal'

// TODO: separate, implement ColorType (including CSSColorValueType) separately as a guide ts type, write a tutorial / article about it

interface TColorObject {
  of?: TCSSMetaColor
  text?: TCSSMetaColor
  background?: TCSSMetaColor
  fill?: TCSSMetaColor
  stroke?: TCSSMetaColor
}

// -------------------------------------------------------------------------------------------------

export interface TColorFunction {
  (): TColorFunctionReturn
  (color: TCSSMetaColor): TColorFunctionReturn
  (color: TColorObject): TColorFunctionReturn
  (text: TCSSMetaColor, background: TCSSMetaColor): TColorFunctionReturn
  (text: TCSSMetaColor, background: TCSSMetaColor, additional: TColorObject): TColorFunctionReturn
}

export type TColorFunctionReturn =
    undefined
    | {
      color?: string
      backgroundColor?: string
      fill?: string
      stroke?: string
    }

// -------------------------------------------------------------------------------------------------

export interface TColorParserFunction {
  (styles: any): boolean
  (styles: any, color: TCSSMetaColor): boolean
  (styles: any, color: TColorObject): boolean
  (styles: any, text: TCSSMetaColor, background: TCSSMetaColor): boolean
  (styles: any, text: TCSSMetaColor, background: TCSSMetaColor, additional: TColorObject): boolean
}

// -------------------------------------------------------------------------------------------------

export interface TColorTypeMap {
  Type: TColor
  ReturnType: TColorFunctionReturn
}

// -------------------------------------------------------------------------------------------------

export type TColor =
    null
    | boolean
    | TColorObject
