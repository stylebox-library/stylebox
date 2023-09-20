import type { TCSSMetaColor } from '../../__internal'

// TODO: border({ width / style / color })
// TODO: border({ top: { width / style / color }})

// TODO: border({ radius: { topLeft, topRight, ... } })
// TODO: border({ radius: { top, left, ... } })

// TODO: reset border: border.reset() => border: 'none' ... border-radius: 0, etc...

export type TBorderStyle =
    'none'
    | 'hidden'
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'

type TBorderPart =
    boolean
    // | {
    //   color?:  number | string
    //   style?:  TBorderStyle
    //   width?:  number | string
    // }

    // width, style, color
    | [number | string, TBorderStyle, TCSSMetaColor]

// interface TBorderRadiusObject {}

export interface TBorderObject {
  of?:
  boolean
  // | {
  //   color?:  number | string
  //   style?:  TBorderStyle
  //   width?:  number | string
  //   radius?: number | string
  // }

  // width, style, color
  | [number | string, TBorderStyle, TCSSMetaColor]

  // width, style, color, radius
  | [number | string, TBorderStyle, TCSSMetaColor, number | string]

  // color?:  number | string
  // style?:  TBorderStyle
  // width?:  number | string

  radius?: number | string

  top?: TBorderPart
  right?: TBorderPart
  bottom?: TBorderPart
  left?: TBorderPart
  vertical?: TBorderPart
  horizontal?: TBorderPart
}

// -----------------------------------------------------------------------------

export interface TBorderParserFunction {
  (
    styles: any
  ): void

  (
    styles: any,
    border: boolean
  ): void

  (
    styles: any,
    border: TBorderObject
  ): void

  (
    styles: any,
    width: number | string,
    style: TBorderStyle,
    color: TCSSMetaColor
  ): void

  (
    styles: any,
    width: number | string,
    style: TBorderStyle,
    color: TCSSMetaColor,
    radius: number | string
  ): void
}

// -----------------------------------------------------------------------------

export interface TBorderFunction {
  (): TBorderFunctionReturn

  (border: boolean): void
  (border: TBorderObject): void

  (
    width: number | string,
    style: TBorderStyle,
    color: TCSSMetaColor
  ): void

  (
    width: number | string,
    style: TBorderStyle,
    color: TCSSMetaColor,
    radius: number | string
  ): void
}

export type TBorderFunctionReturn =
    undefined
    | {
      border?: string

      borderColor?: string
      borderStyle?: string
      borderWidth?: string
      borderRadius?: string

      borderTop?: string
      borderRight?: string
      borderBottom?: string
      borderLeft?: string
    }
