import { parse } from '..'

describe('basics', () => {
  describe('shorthands', () => {
    test('parse(false)', () => {
      const styles = {}

      parse(styles, false)
      expect(styles).toEqual({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      })
    })

    describe('parse(value, ?)', () => {
      test('parse(0)', () => {
        const styles = {}

        parse(styles, 0)
        expect(styles).toEqual({
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        })
      })

      test('parse(1)', () => {
        const styles = {}

        parse(styles, 1)
        expect(styles).toEqual({
          top: '1rem',
          right: '1rem',
          bottom: '1rem',
          left: '1rem'
        })
      })

      describe('additional options', () => {
        test('parse(3, { ... })', () => {
          const styles = {}

          parse(styles, 2, { horizontal: 3 })
          expect(styles).toEqual({
            top: '2rem',
            bottom: '2rem',
            left: '3rem',
            right: '3rem'
          })
        })

        test('parse(\'2px\', { ... })', () => {
          const styles = {}

          parse(styles, '4px', { vertical: 5 })
          expect(styles).toEqual({
            top: '5rem',
            bottom: '5rem',
            left: '4px',
            right: '4px'
          })
        })
      })
    })

    describe('parse(value, value, ?)', () => {
      test('parse(2, 3)', () => {
        const styles = {}

        parse(styles, 2, 3)
        expect(styles).toEqual({
          top: '2rem',
          bottom: '2rem',
          left: '3rem',
          right: '3rem'
        })
      })

      test('parse(4, \'5px\')', () => {
        const styles = {}

        parse(styles, 4, '5px')
        expect(styles).toEqual({
          top: '4rem',
          bottom: '4rem',
          left: '5px',
          right: '5px'
        })
      })

      test('parse(\'6px\', 7)', () => {
        const styles = {}

        parse(styles, '6px', 7)
        expect(styles).toEqual({
          top: '6px',
          bottom: '6px',
          left: '7rem',
          right: '7rem'
        })
      })

      describe('additional options', () => {
        test('parse(8, 9, { ... })', () => {
          const styles = {}

          parse(styles, 8, 9, { relative: 1 })
          expect(styles).toEqual({
            position: 'relative',
            zIndex: 1,
            top: '8rem',
            bottom: '8rem',
            left: '9rem',
            right: '9rem'
          })
        })

        test('parse(\'10px\', 11, { ... })', () => {
          const styles = {}

          parse(styles, '10px', 11, { absolute: 2 })
          expect(styles).toEqual({
            position: 'absolute',
            zIndex: 2,
            top: '10px',
            bottom: '10px',
            left: '11rem',
            right: '11rem'
          })
        })
      })
    })
  })

  describe('position values', () => {
    test('parse(\'relative\')', () => {
      const styles = {}

      parse(styles, 'relative')
      expect(styles).toEqual({ position: 'relative' })
    })

    test('parse(\'absolute\')', () => {
      const styles = {}

      parse(styles, 'absolute')
      expect(styles).toEqual({ position: 'absolute' })
    })

    describe('additional options', () => {
      test('parse(\'absolute\', { ... })', () => {
        const styles = {}

        parse(styles, 'absolute', { horizontal: 1 })
        expect(styles).toEqual({
          position: 'absolute',
          left: '1rem',
          right: '1rem'
        })
      })
    })
  })

  describe('object', () => {
    describe('position values', () => {
      describe('{ of: \'<position values>\' }', () => {
        test('parse({ of: \'relative\' })', () => {
          const styles = {}

          parse(styles, { of: 'relative' })
          expect(styles).toEqual({ position: 'relative' })
        })

        test('parse({ of: \'absolute\' })', () => {
          const styles = {}

          parse(styles, { of: 'absolute' })
          expect(styles).toEqual({ position: 'absolute' })
        })
      })

      describe('parse({ <position values>: z-index })', () => {
        test('parse({ relative: 1 })', () => {
          const styles = {}

          parse(styles, { relative: 1 })
          expect(styles).toEqual({
            position: 'relative',
            zIndex: 1
          })
        })

        test('parse({ absolute: 2 })', () => {
          const styles = {}

          parse(styles, { absolute: 2 })
          expect(styles).toEqual({
            position: 'absolute',
            zIndex: 2
          })
        })
      })

      describe('parse({ <position values>: { ... }})', () => {
        test('parse({ relative: { ... }})', () => {
          const styles = {}

          parse(styles, {
            relative: {
              zIndex: 1,
              top: 2,
              horizontal: 3
            }
          })

          expect(styles).toEqual({
            position: 'relative',
            zIndex: 1,
            top: '2rem',
            left: '3rem',
            right: '3rem'
          })
        })
      })
    })

    describe('directional positions', () => {
      test('parse({ top: ... })', () => {
        const styles = {}

        parse(styles, { top: 1 })
        expect(styles).toEqual({ top: '1rem' })
      })

      test('parse({ left: ... })', () => {
        const styles = {}

        parse(styles, { left: 2 })
        expect(styles).toEqual({ left: '2rem' })
      })

      test('parse({ vertical: ... })', () => {
        const styles = {}

        parse(styles, { vertical: 3 })
        expect(styles).toEqual({
          top: '3rem',
          bottom: '3rem'
        })
      })

      test('parse({ horizontal: ... })', () => {
        const styles = {}

        parse(styles, { horizontal: 4 })
        expect(styles).toEqual({
          left: '4rem',
          right: '4rem'
        })
      })
    })
  })
})
