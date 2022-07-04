// TODO: intellisense for 'auto', 'inherit' and other CSS keywords

type TMarginPart =
    boolean
  | number
  | string

export type TMarginObject = {
  of?:         TMarginPart

  top?:        TMarginPart
  right?:      TMarginPart
  bottom?:     TMarginPart
  left?:       TMarginPart

  horizontal?: TMarginPart
  vertical?:   TMarginPart
}

// -----------------------------------------------------------------------------

export type TMarginParserFunction = {
  (styles: any): void

  (styles: any, margin: TMarginPart)                            : void
  (styles: any, margin: TMarginObject)                          : void
  (styles: any, margin: TMarginPart, additional: TMarginObject) : void
  (styles: any, vertical: TMarginPart, horizontal: TMarginPart) : void

  (
    styles:     any,
    top:        TMarginPart,
    horizontal: TMarginPart,
    bottom:     TMarginPart
  ): void

  (
    styles:     any,
    vertical:   TMarginPart,
    horizontal: TMarginPart,
    additional: TMarginObject
  ): void

  (
    styles: any,
    top:    TMarginPart,
    right:  TMarginPart,
    bottom: TMarginPart,
    left:   TMarginPart
  ): void
}

// -----------------------------------------------------------------------------

export type TMarginFunction = {
  (): TMarginFunctionReturn

  (margin: TMarginPart)                            : TMarginFunctionReturn
  (margin: TMarginPart, additional: TMarginObject) : TMarginFunctionReturn
  (vertical: TMarginPart, horizontal: TMarginPart) : TMarginFunctionReturn

  (
    top:        TMarginPart,
    horizontal: TMarginPart,
    bottom:     TMarginPart
  ): TMarginFunctionReturn

  (
    vertical:   TMarginPart,
    horizontal: TMarginPart,
    additional: TMarginObject
  ): TMarginFunctionReturn

  (
    top:    TMarginPart,
    right:  TMarginPart,
    bottom: TMarginPart,
    left:   TMarginPart
  ): TMarginFunctionReturn
}

export type TMarginFunctionReturn =
    undefined
  | {
      margin?:       number | string
      marginTop?:    number | string
      marginRight?:  number | string
      marginBottom?: number | string
      marginLeft?:   number | string
    }

// -----------------------------------------------------------------------------

export type TMarginTypeMap = {
  Type       : TMargin
  ReturnType : TMarginFunctionReturn
}

// -----------------------------------------------------------------------------

export type TMargin =
    TMarginPart
  | TMarginObject
