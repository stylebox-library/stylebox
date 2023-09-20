import { parseObject } from '..'

describe('objects', () => {
  describe('stylebox-only properties', () => {
    describe('single stylebox property', () => {
      test('parse({ cursor: ... })', () => {
        const styles = {}

        parseObject(styles, { cursor: 'click' })
        expect(styles).toEqual({ cursor: 'pointer' })
      })

      test('parse({ interaction: ... })', () => {
        const styles = {}

        parseObject(styles, { interaction: false })
        expect(styles).toEqual({
          pointerEvents: 'none',
          userSelect: 'none'
        })
      })
    })

    describe('multiple stylebox properties', () => {
      test('parse({ cursor: ..., interaction: ... })', () => {
        const styles = {}

        parseObject(styles, {
          cursor: 'click',
          interaction: false
        })

        expect(styles).toEqual({
          cursor: 'pointer',
          pointerEvents: 'none',
          userSelect: 'none'
        })
      })
    })
  })

  describe('css-only properties', () => {
    test('single css property', () => {
      const styles = {}

      parseObject(styles, { backgroundColor: 'red' })
      expect(styles).toEqual({ backgroundColor: 'red' })
    })

    test('multiple css properties', () => {
      const styles = {}

      parseObject(styles, {
        marginLeft: '1px',
        backgroundColor: 'red'
      })

      expect(styles).toEqual({
        marginLeft: '1px',
        backgroundColor: 'red'
      })
    })
  })

  describe('mixed properties (stylebox + css)', () => {
    test('single stylebox property + single css property', () => {
      const styles = {}

      parseObject(styles, {
        cursor: false,
        backgroundColor: 'red'
      })

      expect(styles).toEqual({
        cursor: 'none',
        backgroundColor: 'red'
      })
    })

    test('single stylebox property + multiple css properties', () => {
      const styles = {}

      parseObject(styles, {
        cursor: false,
        marginLeft: '1px',
        backgroundColor: 'red'
      })

      expect(styles).toEqual({
        cursor: 'none',
        marginLeft: '1px',
        backgroundColor: 'red'
      })
    })

    test('multiple stylebox properties + single css property', () => {
      const styles = {}

      parseObject(styles, {
        cursor: false,
        interaction: false,
        backgroundColor: 'red'
      })

      expect(styles).toEqual({
        cursor: 'none',
        pointerEvents: 'none',
        userSelect: 'none',
        backgroundColor: 'red'
      })
    })

    test('multiple stylebox properties + multiple css properties', () => {
      const styles = {}

      parseObject(styles, {
        cursor: false,
        interaction: false,
        marginLeft: '1px',
        backgroundColor: 'red'
      })

      expect(styles).toEqual({
        cursor: 'none',
        pointerEvents: 'none',
        userSelect: 'none',
        marginLeft: '1px',
        backgroundColor: 'red'
      })
    })

    test('stylebox property which overwrites a css property', () => {
      const styles = {}

      parseObject(styles, {
        interaction: false,
        pointerEvents: 'auto',
        userSelect: 'text'
      })

      expect(styles).toEqual({
        pointerEvents: 'none',
        userSelect: 'none'
      })
    })

    test('stylebox property which overwrites css properties', () => {
      const styles = {}

      parseObject(styles, {
        interaction: false,
        pointerEvents: 'auto',
        userSelect: 'text'
      })

      expect(styles).toEqual({
        pointerEvents: 'none',
        userSelect: 'none'
      })
    })
  })
})
