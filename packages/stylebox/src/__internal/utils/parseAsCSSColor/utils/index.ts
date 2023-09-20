import { clamp } from '../../../../__internal'

export type TColorTuple = [number, number, number]

const RED = 0
const GREEN = 1
const BLUE = 2

const HUE = 0
const SATURATION = 1
const LIGHTNESS = 2

export const convertToHSL = (tuple: TColorTuple, hex: number): void => {
  const red = (hex >> 16) / 255
  const green = (hex >> 8 & 0xFF) / 255
  const blue = (hex & 0xFF) / 255

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)

  let hue = 0
  let saturation = 0

  const lightness = (max + min) / 2

  if (max !== min) {
    const delta = max - min

    saturation = lightness > 0.5
      ? delta / (2 - max - min)
      : delta / (max + min)

    switch (max) {
      case red:
        hue = (green - blue) / delta + (green < blue ? 6 : 0)
        break

      case green:
        hue = (blue - red) / delta + 2
        break

      default: // blue
        hue = (red - green) / delta + 4
        break
    }

    hue *= 60
  }

  tuple[HUE] = hue
  tuple[SATURATION] = saturation
  tuple[LIGHTNESS] = lightness
}

export const numberToHex = (value: number): string => {
  const hex = value.toString(16)

  return hex.length < 2
    ? '0' + hex
    : hex
}

export const darken = (tuple: TColorTuple, amount: number): void => {
  tuple[LIGHTNESS] = clamp(tuple[LIGHTNESS] - amount, 0, 1)
}

export const lighten = (tuple: TColorTuple, amount: number): void => {
  tuple[LIGHTNESS] = clamp(tuple[LIGHTNESS] + amount, 0, 1)
}

export const saturate = (tuple: TColorTuple, amount: number): void => {
  tuple[SATURATION] = clamp(tuple[SATURATION] + amount, 0, 1)
}

export const desaturate = (tuple: TColorTuple, amount: number): void => {
  tuple[SATURATION] = clamp(tuple[SATURATION] - amount, 0, 1)
}

export const convertToRGB = (tuple: TColorTuple): void => {
  const saturation = tuple[SATURATION]
  const lightness = tuple[LIGHTNESS]

  if (saturation !== 0) {
    // https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB

    const huePrime = (((tuple[HUE] % 360) + 360) % 360) / 60
    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
    const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))

    let red = 0
    let green = 0
    let blue = 0

    if (huePrime >= 0 && huePrime < 1) {
      red = chroma
      green = secondComponent
    } else if (huePrime >= 1 && huePrime < 2) {
      red = secondComponent
      green = chroma
    } else if (huePrime >= 2 && huePrime < 3) {
      green = chroma
      blue = secondComponent
    } else if (huePrime >= 3 && huePrime < 4) {
      green = secondComponent
      blue = chroma
    } else if (huePrime >= 4 && huePrime < 5) {
      red = secondComponent
      blue = chroma
    } else if (huePrime >= 5 && huePrime < 6) {
      red = chroma
      blue = secondComponent
    }

    const modification = lightness - chroma / 2

    tuple[RED] = Math.round((red + modification) * 255)
    tuple[GREEN] = Math.round((green + modification) * 255)
    tuple[BLUE] = Math.round((blue + modification) * 255)
  } else {
    // achromatic
    const value = Math.round(lightness * 255)

    tuple[RED] = value
    tuple[GREEN] = value
    tuple[BLUE] = value
  }
}

export const parseAlpha = (value: number): number => {
  if (value < 0) {
    return 0
  }

  if (value > 1) {
    return 1
  }

  return value
}

export const getRGBHexFromTuple = (tuple: TColorTuple): string => {
  return '#' +
    (
      (tuple[RED] << 16) +
      (tuple[GREEN] << 8) +
      tuple[BLUE]
    )
      .toString(16)
      .padStart(6, '0')
}
