import parseColor from '..'

describe('parseColor', () => {
  describe('basics', () => {
    test('empty call -> parseColor()', () => {
      expect(
        parseColor()
      ).toBeNull()
    })

    describe('parseColor(number)', () => {
      describe('unusable numbers', () => {
        test('NaN', () => {
          expect(
            parseColor(NaN)
          ).toBeNull()
        })

        test('-Infinity', () => {
          expect(
            parseColor(-Infinity)
          ).toBeNull()
        })

        test('Infinity', () => {
          expect(
            parseColor(Infinity)
          ).toBeNull()
        })

        test('-1', () => {
          expect(
            parseColor(-1)
          ).toBeNull()
        })
      })

      describe('usable numbers', () => {
        test('0x000000', () => {
          expect(
            parseColor(0x000000)
          ).toBe('#000000')
        })

        test('0xFF0000', () => {
          expect(
            parseColor(0xFF0000)
          ).toBe('#ff0000')
        })

        test('0x00FF00', () => {
          expect(
            parseColor(0x00FF00)
          ).toBe('#00ff00')
        })

        test('0x0000FF', () => {
          expect(
            parseColor(0x0000FF)
          ).toBe('#0000ff')
        })

        test('0xFFFFFF', () => {
          expect(
            parseColor(0xFFFFFF)
          ).toBe('#ffffff')
        })

        test('0x123456', () => {
          expect(
            parseColor(0x123456)
          ).toBe('#123456')
        })

        test('0x100000', () => {
          expect(
            parseColor(0x100000)
          ).toBe('#100000')
        })

        test('0x010000', () => {
          expect(
            parseColor(0x010000)
          ).toBe('#010000')
        })

        test('0x001000', () => {
          expect(
            parseColor(0x001000)
          ).toBe('#001000')
        })

        test('0x000100', () => {
          expect(
            parseColor(0x000100)
          ).toBe('#000100')
        })

        test('0x000010', () => {
          expect(
            parseColor(0x000010)
          ).toBe('#000010')
        })

        test('0x000001', () => {
          expect(
            parseColor(0x000001)
          ).toBe('#000001')
        })

        test('0', () => {
          expect(
            parseColor(0)
          ).toBe('#000000')
        })

        test('1', () => {
          expect(
            parseColor(1)
          ).toBe('#000001')
        })
      })
    })

    // describe('string', () => {
    //   test('#123456', () => {
    //     expect(
    //       parseColor('#123456')
    //     ).toBe('#123456')
    //   })
    // })
  })
})
