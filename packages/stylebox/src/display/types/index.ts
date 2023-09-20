// TODO: implement { flex: { layout: 'center' }}
// TODO: implement { flex: { layout: ['center', 'center'] }}
// TODO: implement { flex: { layout: ['center', 'center', 'horizontal'] }}

// TODO: implement flex-flow, order
// TODO: implement align-content, align-self
// TODO: implement gap, row-gap, column-gap

// TODO: implement grid-specifics display({ grid: { ... }})
// TODO: display('flex', { of: 1 }) // flex: 1 1 0 shorthand

// TODO: implement a separate flex() stylebox function
// TODO: intellisense for 'auto', 'inherit' and other CSS keywords

type TDisplayValue =
    'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'

type TPositionValue =
    'static'
    | 'relative'
    | 'absolute'
    | 'fixed'
    | 'sticky'

interface TSecondaryOptions {
  position?:
  TPositionValue
  | {
    relative?: number
    absolute?: number
  }

  relative?: number
  absolute?: number
  zIndex?: number

  opacity?: boolean | number

  overflow?:
  boolean
  | 'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto'

  visibility?:
  boolean
  | 'visible'
  | 'hidden'
}

type TDisplayOptions =
    TPositionValue
    | TSecondaryOptions

type TFlexShorthand =
    number
    | string
    | [number | string]
    | [number | string, number | string]
    | [number | string, number | string, number | string]

type TFlexOptions =
    TPositionValue
    | TFlexShorthand
    | TSecondaryOptions &
    {
      of?: TFlexShorthand

      grow?: number | string
      shrink?: number | string
      basis?: number | string

      align?:
      'start'
      | 'center'
      | 'end'
      | 'flex-start'
      | 'flex-end'
      | 'baseline'
      | 'stretch'

      justify?:
      'start'
      | 'center'
      | 'end'
      | 'flex-start'
      | 'flex-end'
      | 'left'
      | 'right'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | 'stretch'

      direction?:
      'row'
      | 'row-reverse'
      | 'column'
      | 'column-reverse'
      | 'horizontal' // row
      | 'vertical' // column
    }

interface TDisplayObject {
  of?: TDisplayValue

  inline?: TDisplayOptions
  block?: TDisplayOptions
  inlineBlock?: TDisplayOptions

  flex?: TFlexOptions
  inlineFlex?: TFlexOptions

  position?: TSecondaryOptions['position']
  relative?: TSecondaryOptions['relative']
  absolute?: TSecondaryOptions['absolute']
  zIndex?: TSecondaryOptions['zIndex']

  opacity?: TSecondaryOptions['opacity']
  overflow?: TSecondaryOptions['overflow']
  visibility?: TSecondaryOptions['visibility']
}

// -----------------------------------------------------------------------------

export interface TDisplayParserFunction {
  (styles: any): void

  (styles: any, display: boolean): void
  (styles: any, display: TDisplayValue): void
  (styles: any, display: TDisplayObject): void

  (
    styles: any,
    display: TDisplayValue,
    position: TPositionValue,
  ): void

  (
    styles: any,
    display: TDisplayValue,
    position: TPositionValue,
    zIndex: number,
  ): void
}

// -----------------------------------------------------------------------------

export interface TDisplayFunction {
  (): TDisplayFunctionReturn

  (display: boolean): TDisplayFunctionReturn
  (display: TDisplayValue): TDisplayFunctionReturn
  (display: TDisplayObject): TDisplayFunctionReturn

  (
    display: TDisplayValue,
    position: TPositionValue
  ): TDisplayFunctionReturn

  (
    display: TDisplayValue,
    position: TPositionValue,
    zIndex: number,
  ): TDisplayFunctionReturn
}

export type TDisplayFunctionReturn =
    undefined
    | {
      display?: string
      position?: string
      zIndex?: number
      alignItems?: string
      justifyContent?: string
      flex?: string
      flexGrow?: string
      flexShrink?: string
      flexBasis?: string
      flexDirection?: string
      opacity?: string
      overflow?: string
      visibility?: string
    }
