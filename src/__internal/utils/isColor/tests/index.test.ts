// TODO: test 3,4 and 8 lengths: ('#RGB' / '#RGBA' / '#RRGGBBAA')

import { isColor } from '..'

describe('edge cases', () => {
  test('<empty parameter>', () => {
    expect(isColor()).toBe(false)
  })

  test('null', () => {
    expect(isColor(null)).toBe(false)
  })

  test('-1', () => {
    expect(isColor(-1)).toBe(false)
  })

  test('Infinity', () => {
    expect(isColor(Infinity)).toBe(false)
  })

  test('NaN', () => {
    expect(isColor(NaN)).toBe(false)
  })

  test(`''`, () => {
    expect(isColor('')).toBe(false)
  })
})

describe('hex as numbers', () => {
  test('0x000000', () => {
    expect(isColor(0x000000)).toBe(true)
  })

  test('0xFFFFFF', () => {
    expect(isColor(0xFFFFFF)).toBe(true)
  })

  test('0x123456', () => {
    expect(isColor(0x123456)).toBe(true)
  })
})

describe('hex as strings', () => {
  describe('valid colors', () => {
    describe('#RRGGBB', () => {
      test(`'0x000000'`, () => {
        expect(isColor('0x000000')).toBe(true)
      })

      test(`'#000000'`, () => {
        expect(isColor('#000000')).toBe(true)
      })

      test(`'0xFFFFFF'`, () => {
        expect(isColor('0xFFFFFF')).toBe(true)
      })

      test(`'#FFFFFF'`, () => {
        expect(isColor('#FFFFFF')).toBe(true)
      })

      test(`'0xffffff'`, () => {
        expect(isColor('0xffffff')).toBe(true)
      })

      test(`'#ffffff'`, () => {
        expect(isColor('#ffffff')).toBe(true)
      })
    })

    describe('#RGB', () => {
      test(`'0xfff'`, () => {
        expect(isColor('0xfff')).toBe(true)
      })

      test(`'#fff'`, () => {
        expect(isColor('#fff')).toBe(true)
      })
    })

    describe('#RGBA', () => {
      test(`'0xffff'`, () => {
        expect(isColor('0xffff')).toBe(true)
      })

      test(`'#ffff'`, () => {
        expect(isColor('#ffff')).toBe(true)
      })
    })

    describe('#RRGGBBAA', () => {
      test(`'0xffffffff'`, () => {
        expect(isColor('0xffffffff')).toBe(true)
      })

      test(`'#ffffffff'`, () => {
        expect(isColor('#ffffffff')).toBe(true)
      })
    })
  })

  describe('invalid colors', () => {
    test(`' 0x000000'`, () => {
      expect(isColor(' 0x000000')).toBe(false)
    })

    test(`'0x000000 '`, () => {
      expect(isColor('0x000000 ')).toBe(false)
    })

    test(`'0x00000'`, () => {
      expect(isColor('0x00000')).toBe(false)
    })
  })
})

describe('named colors', () => {
  describe('valid names', () => {
    test(`'black'`, () => {
      expect(isColor('black')).toBe(true)
    })

    test(`'white'`, () => {
      expect(isColor('white')).toBe(true)
    })
  })

  describe('invalid names', () => {
    test(`'dark'`, () => {
      expect(isColor('dark')).toBe(false)
    })

    test(`'bright'`, () => {
      expect(isColor('bright')).toBe(false)
    })
  })
})

describe('special color values', () => {
  test(`'transparent'`, () => {
    expect(isColor('transparent')).toBe(true)
  })

  test(`'currentcolor'`, () => {
    expect(isColor('currentcolor')).toBe(true)
  })

  test(`'currentColor'`, () => {
    expect(isColor('currentColor')).toBe(true)
  })
})
