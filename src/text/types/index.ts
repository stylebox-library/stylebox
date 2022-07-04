// TODO: text align (align: ..., left/center/right: true)

import type { TCSSMetaColor } from '@internal'

import {
  type TFontWeightKeyword,
  type TFontWeightValue,
} from '../../font/types'

export type TTextDecoration =
    'none'
  | 'underline'

export type TTextTransform =
    'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'

type TTextShadowObject = {
  x?:     number | string
  y?:     number | string
  blur?:  number | string
  color?: TCSSMetaColor
}

// TODO: implement array type parsing of shadow
type TTextShadow =
    TTextShadowObject
  | TTextShadowObject[]
  // | [TCSSMetaColor]
  // | [number | string, TCSSMetaColor]
  // | [number | string, number | string, TCSSMetaColor]
  // | [number | string, number | string, number | string, TCSSMetaColor]

// -----------------------------------------------------------------------------

type TTextObject = {
  font?:      string
  color?:     TCSSMetaColor
  size?:      number | string
  italic?:    boolean
  underline?: boolean
  spacing?:   number | string
  weight?:    TFontWeightKeyword | TFontWeightValue

  decoration?: boolean | TTextDecoration   // text-decoration
  transform?:  boolean | TTextTransform    // text-transform
  shadow?:     TTextShadow                 // text-shadow
  lineHeight?: number | string             // line-height
}

// -----------------------------------------------------------------------------

export type TTextParserFunction = {
  (styles: any)                    : void
  (styles: any, text: TTextObject) : void
}

// -----------------------------------------------------------------------------

export type TTextFunction = {
  ()                  : TTextFunctionReturn
  (text: TTextObject) : TTextFunctionReturn
}

export type TTextFunctionReturn =
    undefined
  | {
    color?:          string
    fontSize?:       string
    fontWeight?:     number | string
    fontStyle?:      string
    fontFamily?:     string
    textDecoration?: string
    textTransform?:  string
    textShadow?:     string
    letterSpacing?:  number | string
    lineHeight?:     number | string
  }

// -----------------------------------------------------------------------------

// export type TTextTypeMap = {
//   Type       : TText
//   ReturnType : TTextFunctionReturn
// }

// -----------------------------------------------------------------------------

export type TText = TTextObject
