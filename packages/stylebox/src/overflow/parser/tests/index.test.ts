import { parse } from '..'

describe('shorthand for parse(\'hidden\')', () => {
  test('parse(false)', () => {
    const styles = {}

    parse(styles, false)
    expect(styles).toEqual({ overflow: 'hidden' })
  })
})

describe('keywords', () => {
  describe('one keyword for x and y', () => {
    test('parse(\'auto\')', () => {
      const styles = {}

      parse(styles, 'auto')
      expect(styles).toEqual({ overflow: 'auto' })
    })

    test('parse(\'hidden\')', () => {
      const styles = {}

      parse(styles, 'hidden')
      expect(styles).toEqual({ overflow: 'hidden' })
    })

    test('parse(\'visible\')', () => {
      const styles = {}

      parse(styles, 'visible')
      expect(styles).toEqual({ overflow: 'visible' })
    })
  })

  describe('2 keywords, different for x and y', () => {
    test('parse(\'auto\', \'clip\')', () => {
      const styles = {}

      parse(styles, 'auto', 'clip')
      expect(styles).toEqual({ overflowX: 'auto', overflowY: 'clip' })
    })

    test('parse(\'hidden\', \'scroll\')', () => {
      const styles = {}

      parse(styles, 'hidden', 'scroll')
      expect(styles).toEqual({ overflowX: 'hidden', overflowY: 'scroll' })
    })
  })
})

describe('keywords with shorthand', () => {
  test('parse(false, \'auto\')', () => {
    const styles = {}

    parse(styles, false, 'auto')
    expect(styles).toEqual({ overflowX: 'hidden', overflowY: 'auto' })
  })

  test('parse(\'clip\', false)', () => {
    const styles = {}

    parse(styles, 'clip', false)
    expect(styles).toEqual({ overflowX: 'clip', overflowY: 'hidden' })
  })
})

describe('object', () => {
  describe('x only: parse({ x: ... })', () => {
    test('parse({ x: false })', () => {
      const styles = {}

      parse(styles, { x: false })
      expect(styles).toEqual({ overflowX: 'hidden' })
    })

    test('parse({ x: \'auto\' })', () => {
      const styles = {}

      parse(styles, { x: 'auto' })
      expect(styles).toEqual({ overflowX: 'auto' })
    })

    test('parse({ x: \'visible\' })', () => {
      const styles = {}

      parse(styles, { x: 'visible' })
      expect(styles).toEqual({ overflowX: 'visible' })
    })
  })

  describe('y only: parse({ y: ... })', () => {
    test('parse({ y: false })', () => {
      const styles = {}

      parse(styles, { y: false })
      expect(styles).toEqual({ overflowY: 'hidden' })
    })

    test('parse({ y: \'auto\' })', () => {
      const styles = {}

      parse(styles, { y: 'auto' })
      expect(styles).toEqual({ overflowY: 'auto' })
    })

    test('parse({ y: \'visible\' })', () => {
      const styles = {}

      parse(styles, { y: 'visible' })
      expect(styles).toEqual({ overflowY: 'visible' })
    })
  })

  describe('x and y: parse({ x: ..., y: ... })', () => {
    test('parse({ x: false, y: false })', () => {
      const styles = {}

      parse(styles, { x: false, y: false })
      expect(styles).toEqual({ overflowX: 'hidden', overflowY: 'hidden' })
    })

    test('parse({ x: \'visible\', y: \'clip\' })', () => {
      const styles = {}

      parse(styles, { x: 'visible', y: 'clip' })
      expect(styles).toEqual({ overflowX: 'visible', overflowY: 'clip' })
    })
  })
})
