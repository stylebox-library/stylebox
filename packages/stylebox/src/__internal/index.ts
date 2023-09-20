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
