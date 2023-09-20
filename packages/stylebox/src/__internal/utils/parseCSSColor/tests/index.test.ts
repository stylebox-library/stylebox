import parseCSSColor from '..'

describe('parseCSSColor', () => {
  test('empty call', () => {
    expect(
      parseCSSColor()
    ).toBeNull()
  })

  describe('existing colors', () => {
    test('black', () => {
      expect(
        parseCSSColor('black')
      ).toBe(0x000000)
    })

    test('white', () => {
      expect(
        parseCSSColor('white')
      ).toBe(0xFFFFFF)
    })

    test('cornflowerblue', () => {
      expect(
        parseCSSColor('cornflowerblue')
      ).toBe(0x6495ed)
    })
  })

  test('non-existing color', () => {
    expect(
      parseCSSColor('non-existing-color')
    ).toBeNull()
  })
})
