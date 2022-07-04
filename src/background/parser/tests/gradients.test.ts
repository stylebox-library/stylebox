import { parse } from '..'

describe('gradients', () => {
  describe('shorthands', () => {
    describe('edge cases', () => {
      describe('no params', () => {
        test('{ gradient: [] }', () => {
          const styles = {}

          parse(styles, { gradient: [] })
          expect(styles).toEqual({})
        })
      })

      describe('only a direction', () => {
        test(`{ gradient: ['90deg'] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['90deg'] })
          expect(styles).toEqual({})
        })

        test(`{ gradient: ['to right'] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['to right'] })
          expect(styles).toEqual({})
        })

        test(`{ gradient: ['to bottom left'] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['to bottom left'] })
          expect(styles).toEqual({})
        })
      })

      describe('only a color', () => {
        test(`{ gradient: [0x000000] }`, () => {
          const styles = {}

          parse(styles, { gradient: [0x000000] })
          expect(styles).toEqual({})
        })

        test(`{ gradient: ['red'] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['red'] })
          expect(styles).toEqual({})
        })
      })

      describe('only a direction and a color', () => {
        test(`{ gradient: ['-.25rad', 'red'] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['-.25rad', 'red'] })
          expect(styles).toEqual({})
        })

        test(`{ gradient: ['.5turn', 0x000000] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['.5turn', 0x000000] })
          expect(styles).toEqual({})
        })

        test(`{ gradient: ['11.25grad', '#ffffff'] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['11.25grad', '#ffffff'] })
          expect(styles).toEqual({})
        })
      })
    })

    describe('2 colors', () => {
      describe('opaque/non-transparent colors', () => {
        test(`{ gradient: ['black', '#ffffff'] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['black', '#ffffff'] })
          expect(styles).toEqual({ background: 'linear-gradient(#000000,#ffffff)' })
        })

        test(`{ gradient: [0xFF0000, 'yellow'] }`, () => {
          const styles = {}

          parse(styles, { gradient: [0xFF0000, 'yellow'] })
          expect(styles).toEqual({ background: 'linear-gradient(#ff0000,#ffff00)' })
        })

        test(`{ gradient: [[0xFF0000], ['yellow']] }`, () => {
          const styles = {}

          parse(styles, { gradient: [[0xFF0000], ['yellow']] })
          expect(styles).toEqual({ background: 'linear-gradient(#ff0000,#ffff00)' })
        })
      })

      describe('transparent colors', () => {
        test(`{ gradient: [[['black', .5]], [['#ffffff', .25]]] }`, () => {
          const styles = {}

          parse(styles, { gradient: [[['black', .5]], [['#ffffff', .25]]]})
          expect(styles).toEqual({ background: 'linear-gradient(rgba(0,0,0,0.5),rgba(255,255,255,0.25))' })
        })
      })
    })

    describe('1 direction, 2 colors', () => {
      test(`{ gradient: ['90deg', 'black', '#ffffff'] }`, () => {
        const styles = {}

        parse(styles, { gradient: ['90deg', 'black', '#ffffff'] })
        expect(styles).toEqual({ background: 'linear-gradient(90deg,#000000,#ffffff)' })
      })

      test(`{ gradient: ['-.5rad', 0xFF0000, 'yellow'] }`, () => {
        const styles = {}

        parse(styles, { gradient: ['-.5rad', 0xFF0000, 'yellow'] })
        expect(styles).toEqual({ background: 'linear-gradient(-.5rad,#ff0000,#ffff00)' })
      })
    })

    describe('color stops', () => {
      describe('with opaque/non-transparent colors', () => {
        test(`{ gradient: [['black', '.25'], ['white', '50%']] }`, () => {
          const styles = {}

          parse(styles, { gradient: [['black', '.25'], ['white', '50%']] })
          expect(styles).toEqual({ background: 'linear-gradient(#000000 25%,#ffffff 50%)' })
        })

        test(`{ gradient: [['#000000', '.3', '40%'], [0xFFFFFF, 6, '700px']] }`, () => {
          const styles = {}

          parse(styles, { gradient: [['#000000', '.3', '40%'], [0xFFFFFF, 6, '700px']] })
          expect(styles).toEqual({ background: 'linear-gradient(#000000 30% 40%,#ffffff 6rem 700px)' })
        })

        test(`{ gradient: ['black', '.65', ['white']] }`, () => {
          const styles = {}

          parse(styles, { gradient: ['black', '.65', ['white']] })
          expect(styles).toEqual({ background: 'linear-gradient(#000000,65%,#ffffff)' })
        })
      })

      describe('with transparent colors', () => {
        test(`{ gradient: [[['black', .5], '.25'], [['white', .75], '50%']] }`, () => {
          const styles = {}

          parse(styles, { gradient: [[['black', .5], '.25'], [['white', .75], '50%']] })
          expect(styles).toEqual({ background: 'linear-gradient(rgba(0,0,0,0.5) 25%,rgba(255,255,255,0.75) 50%)' })
        })

        test(`{ gradient: [[['#000000', .2], '.3', '40%'], [[0xFFFFFF, .5], 6, '700px']] }`, () => {
          const styles = {}

          parse(styles, { gradient: [[['#000000', .2], '.3', '40%'], [[0xFFFFFF, .5], 6, '700px']] })
          expect(styles).toEqual({
            background: 'linear-gradient(rgba(0,0,0,0.2) 30% 40%,rgba(255,255,255,0.5) 6rem 700px)'
          })
        })

        test(`{ gradient: [[['black', .45]], '.65', [['white', .85]]] }`, () => {
          const styles = {}

          parse(styles, { gradient: [[['black', .45]], '.65', [['white', .85]]] })
          expect(styles).toEqual({
            background: 'linear-gradient(rgba(0,0,0,0.45),65%,rgba(255,255,255,0.85))'
          })
        })

        test(`{ gradient: [[['black', .45]], '65%', [['white', .85]]] }`, () => {
          const styles = {}

          parse(styles, { gradient: [[['black', .45]], '65%', [['white', .85]]] })
          expect(styles).toEqual({
            background: 'linear-gradient(rgba(0,0,0,0.45),65%,rgba(255,255,255,0.85))'
          })
        })
      })
    })
  })

  describe('object', () => {
    test('angle + 2 colors', () => {
      const styles = {}

      parse(styles, {
        gradient: {
          angle:  90,
          colors: ['black', ['white']],
        }
      })
      expect(styles).toEqual({
        background: 'linear-gradient(90deg,#000000,#ffffff)'
      })
    })

    test('direction + colors + fallback', () => {
      const styles = {}

      parse(styles, {
        gradient: {
          direction: '.5rad',
          colors:    [['#000000', '.3', '40%'], [0xFFFFFF, 6, '700px']],
          fallback:  'red',
        }
      })
      expect(styles).toEqual({
        background:      'linear-gradient(.5rad,#000000 30% 40%,#ffffff 6rem 700px)',
        backgroundColor: '#ff0000',
      })
    })
  })
})
