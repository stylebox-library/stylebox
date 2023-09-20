// TODO: implement line-height

import type { TCSSMetaColor } from '../../__internal'

export type TFontWeightKeyword =
    'thin' // 100
    | 'extra-light' // 200
    | 'light' // 300
    | 'regular' | 'normal' // 400
    | 'medium' // 500
    | 'semi-bold' // 600
    | 'bold' // 700
    | 'extra-bold' // 800
    | 'black' // 900

export type TFontWeightValue =
    100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900

// -----------------------------------------------------------------------------

interface TFontObject {
  family?: string
  color?: TCSSMetaColor
  size?: number | string
  weight?: TFontWeightKeyword | TFontWeightValue
  italic?: boolean
  spacing?: number | string
  lineHeight?: number | string
}

// -----------------------------------------------------------------------------

export interface TFontParserFunction {
  (styles: any): void
  (styles: any, font: TFontObject): void
}

// -----------------------------------------------------------------------------

export interface TFontFunction {
  (): TFontFunctionReturn
  (fonts: TFontObject): TFontFunctionReturn
}

export type TFontFunctionReturn =
    undefined
    | {
      color?: string
      fontSize?: string
      fontWeight?: number | string
      fontStyle?: string
      fontFamily?: string
      letterSpacing?: number | string
      lineHeight?: number | string
    }

// -----------------------------------------------------------------------------

// export type TFontTypeMap = {
//   Type       : TFont
//   ReturnType : TFontFunctionReturn
// }

// -----------------------------------------------------------------------------

export type TFont = TFontObject
