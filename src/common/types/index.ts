// Color type ------------------------------------------------------------------
import type { CSSColorValueType } from '../CSSColorValueType'

export type SimpleColorType =
    CSSColorValueType
  
export type ColorTupleType =
    [SimpleColorType]
  | [CSSColorValueType, number]

export type ColorObjectType = {
  rgba?: CSSColorValueType
}

type CompositeColorType =
    SimpleColorType
  | ColorTupleType
  | [number | string]
  | [number | string, number]
  | ColorObjectType

export type ColorType = 
    CompositeColorType
  | (number | string)

// Size type -------------------------------------------------------------------
export type SizeType =
    number
  | string
  | [number | string]
  | [number | string, number | string]
  | {
    width?:  number | string
    height?: number | string
  }
