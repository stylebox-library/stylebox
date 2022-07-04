import { parseArray } from '..'

describe('arrays', () => {
  describe('stylebox-only properties', () => {
    describe('single stylebox property', () => {
      describe('array with single entry', () => {
        test('parse([{ cursor: ... }])', () => {
          const styles: any[] = []

          parseArray(styles, [{ cursor: 'click' }])
          expect(styles).toEqual([{ cursor: 'pointer' }])
        })

        test('parse([{ interaction: ... }])', () => {
          const styles: any[] = []

          parseArray(styles, [{ interaction: false }])
          expect(styles).toEqual([{
            pointerEvents: 'none',
            userSelect:    'none',
          }])
        })
      })

      describe('array with multiple entries', () => {
        test('parse([ ..., ... ])', () => {
          const styles: any[] = []

          parseArray(styles, [
            { cursor: 'click' },
            { interaction: false },
          ])

          expect(styles).toEqual([
            { cursor: 'pointer' },
            {
              pointerEvents: 'none',
              userSelect:    'none',
            }
          ])
        })

        test('parse([ ..., ..., ... ])', () => {
          const styles: any[] = []

          parseArray(styles, [
            { cursor: 'click' },
            { cursor: false },
            { interaction: false },
          ])

          expect(styles).toEqual([
            { cursor: 'pointer' },
            { cursor: 'none' },
            {
              pointerEvents: 'none',
              userSelect:    'none',
            }
          ])
        })
      })
    })

    describe('multiple stylebox properties', () => {
      describe('array with single entry', () => {
        test('parse([{ cursor: ..., interaction: ... }])', () => {
          const styles: any[] = []

          parseArray(styles, [{
            cursor:      'click',
            interaction: false,
          }])

          expect(styles).toEqual([{
            cursor:        'pointer',
            pointerEvents: 'none',
            userSelect:    'none',
          }])
        })
      })

      describe('array with multiple entries', () => {
        test('parse([ ..., ... ])', () => {
          const styles: any[] = []

          parseArray(styles, [
            {
              cursor:      'click',
              interaction: false,
            },
            {
              cursor:      false,
              interaction: false,
            }
          ])

          expect(styles).toEqual([
            {
              cursor:        'pointer',
              pointerEvents: 'none',
              userSelect:    'none',
            },
            {
              cursor:        'none',
              pointerEvents: 'none',
              userSelect:    'none',
            },
          ])
        })
      })
    })
  })

  // TODO: create tests below
  xdescribe('css-only properties', () => {})
  xdescribe('mixed properties (stylebox + css)', () => {})
})
