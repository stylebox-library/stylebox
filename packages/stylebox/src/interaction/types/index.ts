interface InteractionObjectType {
  selectable?: boolean | string
  interactive?: boolean | string
}

// -----------------------------------------------------------------------------

export interface InteractionFunctionType {
  (): InteractionFunctionReturnType
  (interaction: boolean): InteractionFunctionReturnType
  (interaction: InteractionObjectType): InteractionFunctionReturnType
}

export type InteractionFunctionReturnType =
    undefined
    | {
      userSelect?: string
      pointerEvents?: string
    }

// -----------------------------------------------------------------------------

export interface InteractionParserFunctionType {
  (styles: any): boolean
  (styles: any, interaction: boolean): boolean
  (styles: any, interaction: InteractionObjectType): boolean
}

// -----------------------------------------------------------------------------

export interface InteractionTypeMapType {
  Type: InteractionType
  ReturnType: InteractionFunctionReturnType
}

// -----------------------------------------------------------------------------

export type InteractionType =
    null
    | boolean
    | InteractionObjectType
