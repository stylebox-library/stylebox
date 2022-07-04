type InteractionObjectType = {
  selectable?:  boolean | string
  interactive?: boolean | string
}

// -----------------------------------------------------------------------------

export type InteractionFunctionType = {
  ()                                   : InteractionFunctionReturnType
  (interaction: boolean)               : InteractionFunctionReturnType
  (interaction: InteractionObjectType) : InteractionFunctionReturnType
}

export type InteractionFunctionReturnType =
    undefined
  | {
    userSelect?:    string
    pointerEvents?: string
  }

// -----------------------------------------------------------------------------

export type InteractionParserFunctionType = {
  (styles: any)                                     : boolean
  (styles: any, interaction: boolean)               : boolean
  (styles: any, interaction: InteractionObjectType) : boolean
}

// -----------------------------------------------------------------------------

export type InteractionTypeMapType = {
  Type       : InteractionType
  ReturnType : InteractionFunctionReturnType
}

// -----------------------------------------------------------------------------

export type InteractionType =
    null
  | boolean
  | InteractionObjectType
