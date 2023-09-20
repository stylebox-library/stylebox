export const simpleDisplayMap = [
  'block',
  'inline',
  'inlineBlock'
] as const

export const parseSimpleDisplayOptions = (styles: any, key: string, options: any): void => {
  if (typeof options === 'object' && options !== null) {
    // convert 'inlineBlock' to 'inline-block', otherwise let it through
    styles.display = key === 'inlineBlock'
      ? 'inline-block'
      : key

    parseSecondaryOptions(styles, options)
  } else if (typeof options === 'string') {
    styles.display = key
    styles.position = options
  }
}

// -------------------------------------------------------------------------------------------------

export const flexDisplayMap = [
  'flex',
  'inlineFlex'
] as const

const positionValueMap = {
  static: 0,
  relative: 0,
  absolute: 0,
  fixed: 0,
  sticky: 0
} as const

export const parseFlexDisplayOptions = (styles: any, key: string, options: any): void => {
  if (typeof options === 'object' && options !== null) {
    // convert 'inlineFlex' to 'inline-flex', otherwise let it through
    styles.display = key === 'inlineFlex'
      ? 'inline-flex'
      : key

    // it's an array
    if (options.length > 0) {
      styles.flex = options.join(' ')

    // it's an object
    } else {
      // flex-grow
      if (typeof options.grow === 'string' || typeof options.grow === 'number') {
        styles.flexGrow = options.grow.toString()
      }

      // flex-shrink
      if (typeof options.shrink === 'string' || typeof options.shrink === 'number') {
        styles.flexShrink = options.shrink.toString()
      }

      // flex-basis
      if (typeof options.basis === 'string' || typeof options.basis === 'number') {
        styles.flexBasis = options.basis.toString()
      }

      // align-items
      if (typeof options.align === 'string') {
        styles.alignItems = options.align
      }

      // justify-content
      if (typeof options.justify === 'string') {
        styles.justifyContent = options.justify
      }

      // flex-direction
      if (typeof options.direction === 'string') {
        let direction = options.direction

        // transform custom values
        switch (direction) {
          case 'horizontal':
            direction = 'row'
            break

          case 'vertical':
            direction = 'column'
            break
        }

        styles.flexDirection = direction
      }

      parseSecondaryOptions(styles, options)
    }
  } else if (typeof options === 'string') {
    if (options in positionValueMap) {
      styles.display = key
      styles.position = options
    } else {
      styles.display = key
      styles.flex = options
    }
  } else if (typeof options === 'number') {
    styles.display = key
    styles.flex = options.toString()
  }
}

// -------------------------------------------------------------------------------------------------

export const parseSecondaryOptions = (styles: any, options: any): void => {
  if ('position' in options) {
    const position = options.position

    if (typeof position === 'string') {
      styles.position = position
    } else if (typeof position === 'object') {
      if (typeof position.absolute === 'number') {
        styles.position = 'absolute'
        styles.zIndex = position.absolute
      }

      if (typeof position.relative === 'number') {
        styles.position = 'relative'
        styles.zIndex = position.relative
      }
    }
  }

  if (typeof options.absolute === 'number') {
    styles.position = 'absolute'
    styles.zIndex = options.absolute
  }

  if (typeof options.relative === 'number') {
    styles.position = 'relative'
    styles.zIndex = options.relative
  }

  if (typeof options.zIndex === 'number') {
    styles.zIndex = options.zIndex
  }

  if ('opacity' in options) {
    let opacity = options.opacity

    if (typeof opacity === 'number') {
      if (opacity < 0) {
        opacity = 0
      } else if (opacity > 1) {
        opacity = 1
      }

      styles.opacity = opacity
    } else if (typeof opacity === 'boolean') {
      styles.opacity = opacity
        ? 1
        : 0
    }
  }

  if ('overflow' in options) {
    const overflow = options.overflow

    if (typeof overflow === 'string') {
      styles.overflow = overflow
    } else if (typeof overflow === 'boolean') {
      styles.overflow = overflow
        ? 'visible'
        : 'hidden'
    }
  }

  if ('visibility' in options) {
    const visibility = options.visibility

    if (typeof visibility === 'string') {
      styles.visibility = visibility
    } else if (typeof visibility === 'boolean') {
      styles.visibility = visibility
        ? 'visible'
        : 'hidden'
    }
  }
}
