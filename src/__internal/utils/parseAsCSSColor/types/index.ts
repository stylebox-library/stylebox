import type { CSSColorName as TCSSColorKeyword } from '../../../types'

export type { TCSSColorKeyword }

export type TColorTuple = [number, number, number]

type TCSSColorAdjustment = {
  red?:   number
  green?: number
  blue?:  number

  hue?:        number
  saturation?: number
  lightness?:  number
  brightness?: number

  alpha?: number

  darken?:     number
  lighten?:    number
  saturate?:   number
  desaturate?: number
}

export type TParseAsCSSColorFunction = {
  (): null | string

  (color: number | string)  : null | string
  (color: TCSSColorKeyword) : null | string

  (color: number | string,  alpha: number) : null | string
  (color: TCSSColorKeyword, alpha: number) : null | string

  (color: number | string,  adjustment: TCSSColorAdjustment) : null | string
  (color: TCSSColorKeyword, adjustment: TCSSColorAdjustment) : null | string

  (color: number | string,  alpha: number, adjustment: TCSSColorAdjustment) : null | string
  (color: TCSSColorKeyword, alpha: number, adjustment: TCSSColorAdjustment) : null | string

  ([]): null | string

  (color: [number | string])  : null | string
  (color: [TCSSColorKeyword]) : null | string

  (color: [number | string,  number]) : null | string
  (color: [TCSSColorKeyword, number]) : null | string

  (color: [number | string,  TCSSColorAdjustment]) : null | string
  (color: [TCSSColorKeyword, TCSSColorAdjustment]) : null | string

  (color: [number | string,  number, TCSSColorAdjustment]) : null | string
  (color: [TCSSColorKeyword, number, TCSSColorAdjustment]) : null | string
}

export type TCSSMetaColor =
    number
  | string
  | TCSSColorKeyword

  | []
  | [number | string]
  | [TCSSColorKeyword]

  | [number | string,  number]
  | [TCSSColorKeyword, number]

  | [number | string,  TCSSColorAdjustment]
  | [TCSSColorKeyword, TCSSColorAdjustment]

  | [number | string,  number, TCSSColorAdjustment]
  | [TCSSColorKeyword, number, TCSSColorAdjustment]
