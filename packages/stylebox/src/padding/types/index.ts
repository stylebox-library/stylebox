type TPaddingPart =
    boolean
    | number
    | string

export interface TPaddingObject {
  of?: TPaddingPart

  top?: TPaddingPart
  right?: TPaddingPart
  bottom?: TPaddingPart
  left?: TPaddingPart

  horizontal?: TPaddingPart
  vertical?: TPaddingPart
}

// -----------------------------------------------------------------------------

export interface TPaddingParserFunction {
  (styles: any): void

  (styles: any, padding: TPaddingPart): void
  (styles: any, padding: TPaddingObject): void
  (styles: any, padding: TPaddingPart, additional: TPaddingObject): void
  (styles: any, vertical: TPaddingPart, horizontal: TPaddingPart): void

  (
    styles: any,
    top: TPaddingPart,
    horizontal: TPaddingPart,
    bottom: TPaddingPart
  ): void

  (
    styles: any,
    vertical: TPaddingPart,
    horizontal: TPaddingPart,
    additional: TPaddingObject
  ): void

  (
    styles: any,
    top: TPaddingPart,
    right: TPaddingPart,
    bottom: TPaddingPart,
    left: TPaddingPart
  ): void
}

// -----------------------------------------------------------------------------

export interface TPaddingFunction {
  (): TPaddingFunctionReturn

  (padding: TPaddingPart): TPaddingFunctionReturn
  (padding: TPaddingPart, additional: TPaddingObject): TPaddingFunctionReturn
  (vertical: TPaddingPart, horizontal: TPaddingPart): TPaddingFunctionReturn

  (
    top: TPaddingPart,
    horizontal: TPaddingPart,
    bottom: TPaddingPart
  ): TPaddingFunctionReturn

  (
    vertical: TPaddingPart,
    horizontal: TPaddingPart,
    additional: TPaddingObject
  ): TPaddingFunctionReturn

  (
    top: TPaddingPart,
    right: TPaddingPart,
    bottom: TPaddingPart,
    left: TPaddingPart
  ): TPaddingFunctionReturn
}

export type TPaddingFunctionReturn =
    undefined
    | {
      padding?: number | string
      paddingTop?: number | string
      paddingRight?: number | string
      paddingBottom?: number | string
      paddingLeft?: number | string
    }

// -----------------------------------------------------------------------------

export interface TPaddingTypeMap {
  Type: TPadding
  ReturnType: TPaddingFunctionReturn
}

// -----------------------------------------------------------------------------

export type TPadding =
    TPaddingPart
    | TPaddingObject
