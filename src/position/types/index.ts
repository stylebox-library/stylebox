// TODO: position('absolute', 0)
// TODO: position('absolute', { of: 0 })
// TODO: position(0, { absolute: 1 })

// TODO: position('absolute', 1)
// TODO: position('absolute', 1, 2)
// TODO: position('absolute', 1, 2, 3)
// TODO: position('absolute', 1, 2, 3, 4)

// TODO: position({ of: 'absolute' })
// TODO: position({ of: 0 })
// TODO: position({ of: '1px' })

// TODO: position({ of: 0, absolute: 1 })
// TODO: position({ of: 0, absolute: true })

// TODO: position({ absolute: { of: 0, zIndex: 1 } })
// TODO: position(['absolute', 1], 1, 2, 3, 4)
// TODO: fix position(['absolute', 0]) - only position({ of: ['absolute', 0 ]}) works

// TODO: position(['absolute', 1], { ends: 0, sides: 0 })
// TODO: position({ position: absolute, { ends: 0, sides: 0 }})

export type TPositionValue =
    'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'

type TZIndex =
    number
  | 'auto'

type TPositionPart =
    null
  | boolean
  | number
  | string

// -----------------------------------------------------------------------------

type TDirectionalPositionObject = {
  zIndex?: TZIndex

  top?:      TPositionPart
  right?:    TPositionPart
  bottom?:   TPositionPart
  left?:     TPositionPart

  vertical?:   TPositionPart
  horizontal?: TPositionPart
}

export type TPositionObject = {
  of?: TPositionValue

  relative?: number | TDirectionalPositionObject
  absolute?: number | TDirectionalPositionObject

  zIndex?: TZIndex

  top?:      TPositionPart
  right?:    TPositionPart
  bottom?:   TPositionPart
  left?:     TPositionPart

  vertical?:   TPositionPart
  horizontal?: TPositionPart
}

// -----------------------------------------------------------------------------

export type TPositionParserFunction = {
  (
    styles: any
  ): void

  (
    styles:   any,
    position: TPositionPart
  ): void

  (
    styles:   any,
    position: TPositionValue
  ): void

  (
    styles:   any,
    position: TPositionObject
  ): void

  (
    styles:     any,
    vertical:   TPositionPart,
    horizontal: TPositionPart
  ): void

  (
    styles:   any,
    position: TPositionPart,
    options:  TPositionObject
  ): void

  (
    styles:   any,
    position: TPositionValue,
    options:  TPositionObject
  ): void

  (
    styles:     any,
    vertical:   TPositionPart,
    horizontal: TPositionPart,
    options:    TPositionObject
  ): void
}

// -----------------------------------------------------------------------------

export type TPositionFunction = {
  (): TPositionFunctionReturn

  (position: TPositionPart):   TPositionFunctionReturn
  (position: TPositionValue):  TPositionFunctionReturn
  (position: TPositionObject): TPositionFunctionReturn

  (
    vertical: TPositionPart,
    horizontal: TPositionPart
  ): TPositionFunctionReturn

  (
    position: TPositionPart,
    options: TPositionObject
  ): TPositionFunctionReturn

  (
    position: TPositionValue,
    options:  TPositionObject
  ): TPositionFunctionReturn

  (
    vertical:   TPositionPart,
    horizontal: TPositionPart,
    options:    TPositionObject
  ): TPositionFunctionReturn
}

export type TPositionFunctionReturn =
    undefined
  | {
    position?: TPositionValue
    zIndex?:   number | string
    top?:      number | string
    right?:    number | string
    bottom?:   number | string
    left?:     number | string
  }

// -----------------------------------------------------------------------------
