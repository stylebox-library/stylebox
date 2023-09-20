// TODO: implement more param combinations
// TODO: color, style, width
// TODO: style, color, width
// TODO: default outline -> outline() / outline.default === '1px solid red'

import type { TCSSMetaColor } from '@internal'

type TOutlineStyleKeyword =
    'auto'
    | 'none'
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'

interface TOutlineObject {
  color?: TCSSMetaColor
  style?: TOutlineStyleKeyword
  width?: number | string
  offset?: number | string
}

// -----------------------------------------------------------------------------

export interface TOutlineFunction {
  (): TOutlineFunctionReturn

  (outline: boolean): TOutlineFunctionReturn
  (outline: TOutlineObject): TOutlineFunctionReturn

  // (color: TCSSMetaColor)        : TOutlineFunctionReturn
  // (style: TOutlineStyleKeyword) : TOutlineFunctionReturn
  // (width: number | string)      : TOutlineFunctionReturn

  // (
  //   color: TCSSMetaColor,
  //   style: TOutlineStyleKeyword
  // ): TOutlineFunctionReturn

  // (
  //   style: TOutlineStyleKeyword,
  //   color: TCSSMetaColor
  // ): TOutlineFunctionReturn

  // (
  //   style: TOutlineStyleKeyword,
  //   width: number | string
  // ): TOutlineFunctionReturn

  // (
  //   width: number | string,
  //   style: TOutlineStyleKeyword
  // ): TOutlineFunctionReturn

  (
    width: number | string,
    style: TOutlineStyleKeyword,
    color: TCSSMetaColor
  ): TOutlineFunctionReturn

  (
    width: number | string,
    style: TOutlineStyleKeyword,
    color: TCSSMetaColor,
    offset: number | string
  ): TOutlineFunctionReturn
}

export type TOutlineFunctionReturn =
    undefined
    | {
      outline?: string
      outlineColor?: string
      outlineStyle?: string
      outlineWidth?: string
      outlineOffset?: string
    }

// -----------------------------------------------------------------------------

export interface TOutlineParserFunction {
  (styles: any): void

  (styles: any, outline: boolean): void
  (styles: any, outline: TOutlineObject): void

  // (styles: any, color: TCSSMetaColor)        : void
  // (styles: any, style: TOutlineStyleKeyword) : void
  // (styles: any, width: number | string)      : void

  // (
  //   styles: any,
  //   color:  TCSSMetaColor,
  //   style:  TOutlineStyleKeyword
  // ): void

  // (
  //   styles: any,
  //   style:  TOutlineStyleKeyword,
  //   color:  TCSSMetaColor
  // ): void

  // (
  //   styles: any,
  //   style:  TOutlineStyleKeyword,
  //   width:  number | string
  // ): void

  // (
  //   styles: any,
  //   width:  number | string,
  //   style:  TOutlineStyleKeyword
  // ): void

  (
    styles: any,
    width: number | string,
    style: TOutlineStyleKeyword,
    color: TCSSMetaColor
  ): void

  (
    styles: any,
    width: number | string,
    style: TOutlineStyleKeyword,
    color: TCSSMetaColor,
    offset: number | string
  ): void
}
