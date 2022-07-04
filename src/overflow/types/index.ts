type TOverflowKeyword =
    'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto'

type TOverflowValue =
    boolean
  | TOverflowKeyword

type TOverflowObject = {
  x?: TOverflowValue
  y?: TOverflowValue
}

// -----------------------------------------------------------------------------

export type TOverflowFunction = {
  (): TOverflowFunctionReturn

  (overflow: boolean)          : TOverflowFunctionReturn
  (overflow: TOverflowKeyword) : TOverflowFunctionReturn
  (overflow: TOverflowObject)  : TOverflowFunctionReturn

  (
    overflowX: TOverflowValue,
    overflowY: TOverflowValue
  ): TOverflowFunctionReturn
}

export type TOverflowFunctionReturn =
    undefined
  | {
    overflow?:  string
    overflowX?: string
    overflowY?: string
  }

// -----------------------------------------------------------------------------

export type OverflowType =
    null
  | boolean
  | TOverflowObject

// -----------------------------------------------------------------------------

export type TOverflowParserFunction = {
  (styles: any): void

  (styles: any, overflow: boolean)          : void
  (styles: any, overflow: TOverflowKeyword) : void
  (styles: any, overflow: TOverflowObject)  : void

  (
    styles:    any,
    overflowX: TOverflowValue,
    overflowY: TOverflowValue
  ): void
}

// -----------------------------------------------------------------------------

// export type OverflowTypeMapType = {
//   Type: {
//     overflow?:  string
//     overflowX?: string
//     overflowY?: string
//   }
//   ReturnType: TOverflowFunctionReturn
// }
