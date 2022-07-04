import {
  isColor,
  parseAsCSSColor,
} from '@internal'

import {
  isDirection,
  parseGradientDirection,
  parseGradientAngle,
  parseGradientColors,
} from './utils'

import {
  type TBackgroundParserFunction,
  type TBackgroundObject,
} from '../types'

export const parse: TBackgroundParserFunction = (
  styles:  any,
  param1?: any
) => {
  if (typeof param1 === 'object' && param1 !== null) {
    // it's an array
    if (param1.length > 0) {
      const color = parseAsCSSColor(param1)

      if (color !== null) {
        styles.background = color
      }

    // it's an object
    } else {
      if (typeof param1.gradient === 'object') {
        const gradient = param1.gradient

        if (gradient !== null) {
          const gradientParams: string[] = []

          // it's an array with at least 2 colors
          if (gradient.length >= 2) {
            let hasDirection = false
            let direction

            if (isDirection(gradient[0])) {
              hasDirection = true
              direction    = gradient[0]
            }

            const colors = parseGradientColors(gradient, hasDirection ? 1 : 0)

            if (colors !== null) {
              if (hasDirection) {
                gradientParams.push(direction)
              }

              gradientParams.push(colors)
            }

          // it's an object
          } else {
            if ('direction' in gradient) {
              const direction = parseGradientDirection(gradient.direction)

              if (direction !== null) {
                gradientParams.push(direction)
              }
            }

            if ('angle' in gradient) {
              const angle = parseGradientAngle(gradient.angle)

              if (angle !== null) {
                gradientParams.push(angle)
              }
            }

            if ('colors' in gradient) {
              const colors = parseGradientColors(gradient.colors)

              if (colors !== null) {
                gradientParams.push(colors)
              }
            }

            if ('fallback' in gradient) {
              const color = parseAsCSSColor(gradient.fallback)

              if (color !== null) {
                styles.backgroundColor = color
              }
            }
          }

          if (gradientParams.length > 0) {
            styles.background = 'linear-gradient(' + gradientParams.join(',') + ')'
          }
        }
      }
    }

  } else {
    if (typeof param1 === 'number' || typeof param1 === 'string') {
      const color = parseAsCSSColor(param1)

      if (color !== null) {
        styles.background = color
      }

    } else if (param1 === false) {
      styles.background = 'none'
    }
  }
}
