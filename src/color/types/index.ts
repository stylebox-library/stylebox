import type { TCSSMetaColor } from '@internal'

// TODO: separate, implement ColorType (including CSSColorValueType) separately as a guide ts type, write a tutorial / article about it

type TColorObject = {
  of?:         TCSSMetaColor,
  text?:       TCSSMetaColor,
  background?: TCSSMetaColor,
  fill?:       TCSSMetaColor,
  stroke?:     TCSSMetaColor,
}

// -------------------------------------------------------------------------------------------------

export type TColorFunction = {
  ()                                                                         : TColorFunctionReturn
  (color: TCSSMetaColor)                                                     : TColorFunctionReturn
  (color: TColorObject)                                                      : TColorFunctionReturn
  (text: TCSSMetaColor, background: TCSSMetaColor)                           : TColorFunctionReturn
  (text: TCSSMetaColor, background: TCSSMetaColor, additional: TColorObject) : TColorFunctionReturn
}

export type TColorFunctionReturn =
    undefined
  | {
      color?:           string,
      backgroundColor?: string,
      fill?:            string,
      stroke?:          string,
    }

// -------------------------------------------------------------------------------------------------

export type TColorParserFunction = {
  (styles: any)                                                                           : boolean
  (styles: any, color: TCSSMetaColor)                                                     : boolean
  (styles: any, color: TColorObject)                                                      : boolean
  (styles: any, text: TCSSMetaColor, background: TCSSMetaColor)                           : boolean
  (styles: any, text: TCSSMetaColor, background: TCSSMetaColor, additional: TColorObject) : boolean
}

// -------------------------------------------------------------------------------------------------

export type TColorTypeMap = {
  Type       : TColor
  ReturnType : TColorFunctionReturn
}

// -------------------------------------------------------------------------------------------------

export type TColor =
    null
  | boolean
  | TColorObject
