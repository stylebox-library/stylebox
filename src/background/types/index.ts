// TODO: gradient: [{ color: '...' start: ..., stop: ... }, ...]
// TODO: background({ of: ... })

// TODO: gradient: [ {['#ffffff .5']: '50%'}, ... ]

// TODO: gradient color-color-stops pairs: ['red 50%', 'red 65% 75%']
// TODO: multiple gradients / array of gradients
// TODO: multiple gradient types (linear, radial, etc)
// TODO: implement 'url...' and { url: '...' }

// TODO: ??? background('color', alpha)

import type { TCSSMetaColor } from '__internal'

type TURLImage = {
  url: string
}

type TLinearGradient =
  | {
      direction?: number | string
      angle?:     number | string

      colors?:
          [...TCSSMetaColor[]]
        | [...TCSSMetaColor[][]]
        | (string | number | (string | number)[][])[]

      fallback?: TCSSMetaColor
    }

type TGradientObject = {
  gradient?:
      [...TCSSMetaColor[]]
    | [...TCSSMetaColor[][]]
    | (string | number | (string | number)[][])[]
    | TLinearGradient
}

export type TBackgroundObject = {
  color?:
      TCSSMetaColor
    | TCSSMetaColor[]

  image?:
      string
    | TURLImage
    | TLinearGradient

    | string[]
    | TURLImage[]
    | TLinearGradient[]
}

// -----------------------------------------------------------------------------

export type TBackgroundParserFunction = {
  (styles: any): void

  (styles: any, background: boolean)       : void
  (styles: any, color: TCSSMetaColor)      : void
  (styles: any, gradient: TGradientObject) : void
}

// -----------------------------------------------------------------------------

export type TBackgroundFunction = {
  (): TBackgroundFunctionReturn

  (background: boolean)       : TBackgroundFunctionReturn
  (color: TCSSMetaColor)      : TBackgroundFunctionReturn
  (gradient: TGradientObject) : TBackgroundFunctionReturn
}

export type TBackgroundFunctionReturn =
    undefined
  | {
      background?:      string
      backgroundColor?: string
    }
