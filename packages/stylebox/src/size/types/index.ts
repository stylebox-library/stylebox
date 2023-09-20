// TODO: implement global (per-@stylebox) and per-function default number/unitless value (e.g.: width(1) === { width: '1rem' })
// TODO: separate, implement SizeType separately as a guide ts type, write a tutorial / article about it

// TODO: size(0, { ... })

interface SizeObjectType {
  of?: number | string
  width?: number | string
  height?: number | string
  minWidth?: number | string
  minHeight?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
}

// -----------------------------------------------------------------------------

export interface SizeFunctionType {
  (): SizeFunctionReturnType

  (
    size: boolean | number | string
  ): SizeFunctionReturnType

  (
    size: boolean | number | string,
    additional: SizeObjectType
  ): SizeFunctionReturnType

  (
    width: boolean | number | string,
    height: boolean | number | string
  ): SizeFunctionReturnType

  (
    width: boolean | number | string,
    height: boolean | number | string,
    additional: SizeObjectType
  ): SizeFunctionReturnType

  (
    size: SizeObjectType
  ): SizeFunctionReturnType

  (
    size: []
  ): SizeFunctionReturnType

  (
    size: [boolean | number | string]
  ): SizeFunctionReturnType

  (
    size: [
      boolean | number | string,
      SizeObjectType
    ]
  ): SizeFunctionReturnType

  (
    size: [
      boolean | number | string,
      boolean | number | string
    ]
  ): SizeFunctionReturnType

  (
    size: [
      boolean | number | string,
      boolean | number | string,
      SizeObjectType
    ]
  ): SizeFunctionReturnType
}

export type SizeFunctionReturnType =
    undefined
    | {
      width?: number | string
      height?: number | string
      minWidth?: number | string
      minHeight?: number | string
      maxWidth?: number | string
      maxHeight?: number | string
    }

// -----------------------------------------------------------------------------

export interface SizeParserFunctionType {
  (
    styles: any
  ): boolean

  (
    styles: any,
    size: boolean | number | string
  ): boolean

  (
    styles: any,
    size: boolean | number | string,
    additional: SizeObjectType
  ): boolean

  (
    styles: any,
    width: boolean | number | string,
    height: boolean | number | string
  ): boolean

  (
    styles: any,
    width: boolean | number | string,
    height: boolean | number | string,
    additional: SizeObjectType
  ): boolean

  (
    styles: any,
    size: SizeObjectType
  ): boolean

  (
    styles: any,
    size: []
  ): boolean

  (
    styles: any,
    size: [boolean | number | string]
  ): boolean

  (
    styles: any,
    size: [
      boolean | number | string,
      SizeObjectType
    ]
  ): boolean

  (
    styles: any,
    size: [
      boolean | number | string,
      boolean | number | string
    ]
  ): boolean

  (
    styles: any,
    size: [
      boolean | number | string,
      boolean | number | string,
      SizeObjectType
    ]
  ): boolean
}

// -----------------------------------------------------------------------------

export interface SizeTypeMapType {
  Type: SizeType
  ReturnType: SizeFunctionReturnType
}

// -----------------------------------------------------------------------------

export type SizeType =
    null
    | boolean
    | SizeObjectType
