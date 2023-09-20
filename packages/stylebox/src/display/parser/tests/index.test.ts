import { parse } from '..'

describe('shorthands', () => {
  describe('for display: none', () => {
    test('parse(_, false)', () => {
      const styles = {}

      parse(styles, false)
      expect(styles).toEqual({ display: 'none' })
    })
  })

  describe('1 param', () => {
    test('parse(_, \'block\')', () => {
      const styles = {}

      parse(styles, 'block')
      expect(styles).toEqual({ display: 'block' })
    })

    test('parse(_, \'flex\')', () => {
      const styles = {}

      parse(styles, 'flex')
      expect(styles).toEqual({ display: 'flex' })
    })
  })

  describe('2 params', () => {
    test('parse(_, \'block\', \'absolute\')', () => {
      const styles = {}

      parse(styles, 'block', 'absolute')
      expect(styles).toEqual({
        display: 'block',
        position: 'absolute'
      })
    })

    test('parse(_, \'grid\', \'relative\')', () => {
      const styles = {}

      parse(styles, 'grid', 'relative')
      expect(styles).toEqual({
        display: 'grid',
        position: 'relative'
      })
    })
  })

  describe('3 params', () => {
    test('parse(_, \'block\', \'absolute\', 1)', () => {
      const styles = {}

      parse(styles, 'block', 'absolute', 1)
      expect(styles).toEqual({
        display: 'block',
        position: 'absolute',
        zIndex: 1
      })
    })

    test('parse(_, \'grid\', \'relative\', -1)', () => {
      const styles = {}

      parse(styles, 'grid', 'relative', -1)
      expect(styles).toEqual({
        display: 'grid',
        position: 'relative',
        zIndex: -1
      })
    })
  })
})

describe('object', () => {
  describe('.of:', () => {
    test('parse(_, { of: \'block\' })', () => {
      const styles = {}

      parse(styles, { of: 'block' })
      expect(styles).toEqual({ display: 'block' })
    })

    test('parse(_, { of: \'flex\' })', () => {
      const styles = {}

      parse(styles, { of: 'flex' })
      expect(styles).toEqual({ display: 'flex' })
    })
  })

  describe('.block: / .inline: / .inlineBlock:', () => {
    test('parse(_, { block: \'absolute\' })', () => {
      const styles = {}

      parse(styles, { block: 'absolute' })
      expect(styles).toEqual({
        display: 'block',
        position: 'absolute'
      })
    })

    test('parse(_, { inline: { absolute: 1 } })', () => {
      const styles = {}

      parse(styles, { inline: { absolute: 1 } })
      expect(styles).toEqual({
        display: 'inline',
        position: 'absolute',
        zIndex: 1
      })
    })

    test('parse(_, { inlineBlock: { position: \'relative\', zIndex: 2 } })', () => {
      const styles = {}

      parse(styles, { inlineBlock: { position: 'relative', zIndex: 2 } })
      expect(styles).toEqual({
        display: 'inline-block',
        position: 'relative',
        zIndex: 2
      })
    })
  })

  describe('position', () => {
    test('parse(_, { position: \'absolute\' })', () => {
      const styles = {}

      parse(styles, { position: 'absolute' })
      expect(styles).toEqual({ position: 'absolute' })
    })

    test('parse(_, { position: \'relative\' })', () => {
      const styles = {}

      parse(styles, { position: 'relative' })
      expect(styles).toEqual({ position: 'relative' })
    })

    test('parse(_, { position: { absolute: 1 } )', () => {
      const styles = {}

      parse(styles, { position: { absolute: 1 } })
      expect(styles).toEqual({
        position: 'absolute',
        zIndex: 1
      })
    })

    test('parse(_, { position: { relative: 2 } })', () => {
      const styles = {}

      parse(styles, { position: { relative: 2 } })
      expect(styles).toEqual({
        position: 'relative',
        zIndex: 2
      })
    })

    test('parse(_, { absolute: 1 })', () => {
      const styles = {}

      parse(styles, { absolute: 1 })
      expect(styles).toEqual({
        position: 'absolute',
        zIndex: 1
      })
    })

    test('parse(_, { relative: 2 })', () => {
      const styles = {}

      parse(styles, { relative: 2 })
      expect(styles).toEqual({
        position: 'relative',
        zIndex: 2
      })
    })
  })

  describe('z-index', () => {
    test('parse(_, { zIndex: 1 })', () => {
      const styles = {}

      parse(styles, { zIndex: 1 })
      expect(styles).toEqual({ zIndex: 1 })
    })
  })

  describe('opacity', () => {
    test('parse(_, { opacity: true })', () => {
      const styles = {}

      parse(styles, { opacity: true })
      expect(styles).toEqual({ opacity: 1 })
    })

    test('parse(_, { opacity: false })', () => {
      const styles = {}

      parse(styles, { opacity: false })
      expect(styles).toEqual({ opacity: 0 })
    })

    test('parse(_, { opacity: 0 })', () => {
      const styles = {}

      parse(styles, { opacity: 0 })
      expect(styles).toEqual({ opacity: 0 })
    })

    test('parse(_, { opacity: 1 })', () => {
      const styles = {}

      parse(styles, { opacity: 1 })
      expect(styles).toEqual({ opacity: 1 })
    })
  })

  describe('visibility', () => {
    test('parse(_, { visibility: true })', () => {
      const styles = {}

      parse(styles, { visibility: true })
      expect(styles).toEqual({ visibility: 'visible' })
    })

    test('parse(_, { visibility: false })', () => {
      const styles = {}

      parse(styles, { visibility: false })
      expect(styles).toEqual({ visibility: 'hidden' })
    })

    test('parse(_, { visibility: \'visible\' })', () => {
      const styles = {}

      parse(styles, { visibility: 'visible' })
      expect(styles).toEqual({ visibility: 'visible' })
    })

    test('parse(_, { visibility: \'hidden\' })', () => {
      const styles = {}

      parse(styles, { visibility: 'hidden' })
      expect(styles).toEqual({ visibility: 'hidden' })
    })
  })

  describe('overflow', () => {
    test('parse(_, { overflow: true })', () => {
      const styles = {}

      parse(styles, { overflow: true })
      expect(styles).toEqual({ overflow: 'visible' })
    })

    test('parse(_, { overflow: false })', () => {
      const styles = {}

      parse(styles, { overflow: false })
      expect(styles).toEqual({ overflow: 'hidden' })
    })

    test('parse(_, { overflow: \'hidden\' })', () => {
      const styles = {}

      parse(styles, { overflow: 'hidden' })
      expect(styles).toEqual({ overflow: 'hidden' })
    })

    test('parse(_, { overflow: \'scroll\' })', () => {
      const styles = {}

      parse(styles, { overflow: 'scroll' })
      expect(styles).toEqual({ overflow: 'scroll' })
    })
  })
})
