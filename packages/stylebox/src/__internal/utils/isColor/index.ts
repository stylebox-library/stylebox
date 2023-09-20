import { cssColorNameValueMap } from '../color-maps'

const colorPattern = /^(?:0x|#)(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i

export const isColor = (value?: any): boolean => {
  if (typeof value === 'string' && value.length > 0) {
    if (value in cssColorNameValueMap) {
      return true
    }

    if (colorPattern.test(value)) {
      return true
    }

    switch (value) {
      case 'transparent':
      case 'currentcolor':
      case 'currentColor':
        return true
    }
  } else if (typeof value === 'number') {
    if (value >= 0 && value <= 0xFFFFFF) {
      return true
    }
  }

  return false
}
