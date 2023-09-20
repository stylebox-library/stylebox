// -----------------------------------------------------------------------------

import {
  parseValue,
  isColor,
  parseAsCSSColor
} from '../../../__internal'

// -----------------------------------------------------------------------------

const anglePattern = /^[-\.\d]+(?:deg|grad|rad|turn)$/
const sidePattern = /^to (?:left|right|top|bottom)$/
const cornerPattern = /^to (?:top left|top right|bottom left|bottom right)$/

export const isDirection = (value: any) => {
  if (typeof value === 'string' && value.length > 0) {
    return anglePattern.test(value) ||
        sidePattern.test(value) ||
        cornerPattern.test(value)
  }

  return false
}

// -----------------------------------------------------------------------------

export const parseGradientDirection = (direction: any): null | string => {
  if (isDirection(direction)) {
    return direction
  }

  return null
}

// -----------------------------------------------------------------------------

export const parseGradientAngle = (angle: any): null | string => {
  if (typeof angle === 'number') {
    if (isFinite(angle)) {
      return angle + 'deg'
    }
  } else if (isDirection(angle)) {
    return angle
  }

  return null
}

const colorStopFractionPattern = /^\d*?\.?\d+$/

export const parseColorStop = (value: any): null | string => {
  if (typeof value === 'undefined' || value === null) {
    return null
  }

  if (typeof value === 'string') {
    // if it's a fraction within a string (e.g.: '.5')
    if (colorStopFractionPattern.test(value)) {
      const parsedFraction = parseFloat(value)

      if (!isFinite(parsedFraction)) {
        return null
      }

      return (parsedFraction * 100) + '%'
    }
  }

  return parseValue(value) as any
}

export const parseGradientColors = (colors: any, startIndex = 0): null | string => {
  // at least 2 colors needed
  if (typeof colors === 'object' && colors.length >= 2) {
    const colorParams: any[] = []

    const length = colors.length

    // at least 2 colors needed, even if start is adjusted
    if (length - startIndex < 2) {
      return null
    }

    for (let i = startIndex, len = colors.length; i < len; i++) {
      const entry = colors[i]

      if (Array.isArray(entry)) {
        let color

        if (entry.length >= 1) {
          color = entry[0]
        }

        let colorStart = null
        let colorStop = null

        if (entry.length === 2) {
          colorStop = entry[1]
        } else if (entry.length === 3) {
          colorStart = entry[1]
          colorStop = entry[2]
        }

        color = parseAsCSSColor(color)

        if (color !== null) {
          const colorHint: string[] = []

          colorHint.push(color)

          colorStart = parseColorStop(colorStart)

          if (colorStart !== null) {
            colorHint.push(colorStart)
          }

          colorStop = parseColorStop(colorStop)

          if (colorStop !== null) {
            colorHint.push(colorStop)
          }

          colorParams.push(colorHint.join(' '))
        }
      } else {
        // parse color
        if (isColor(entry)) {
          const color = parseAsCSSColor(entry)

          if (color !== null) {
            colorParams.push(color)
          }

        // parse color stop
        } else {
          const colorStop = parseColorStop(entry)

          if (colorStop !== null) {
            colorParams.push(colorStop)
          }
        }
      }
    }

    return colorParams.join(',')
  }

  return null
}
