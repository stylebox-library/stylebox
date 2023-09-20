export { isColor } from './utils/isColor'

export { parseAsCSSColor } from './utils/parseAsCSSColor'
export type { TCSSMetaColor } from './utils/parseAsCSSColor'

export const parseValue = (value: any): null | number | string => {
  if (typeof value === 'number') {
    if (!isFinite(value)) {
      return null
    } else if (value !== 0) {
      return value + 'rem'
    }
  } else if (typeof value === 'string') {
    if (value === '') {
      return null
    }
  } else if (typeof value === 'boolean') {
    return !value
      ? 0
      : null
  }

  return value
}

const _hasOwnProperty = Object.prototype.hasOwnProperty

export const hasKeys = (object: any): boolean => {
  if (typeof object === 'object' && object !== null) {
    for (const key in object) {
      if (_hasOwnProperty.call(object, key)) {
        return true
      }
    }
  }

  return false
}

export const clamp = (value: number, min: number, max: number): number => {
  if (value < min) {
    return min
  }

  if (value > max) {
    return max
  }

  return value
}
