import { parse } from '..'

describe('flexbox', () => {
  describe('.flex: / .inlineFlex:', () => {
    test(`parse(_, { flex: ... })`, () => {
      const styles = {}

      parse(styles, {
        flex: {
          absolute:  1,
          align:     'flex-start',
          justify:   'center',
          direction: 'horizontal',
        }
      })
      expect(styles).toEqual({
        display:        'flex',
        position:       'absolute',
        zIndex:         1,
        alignItems:     'flex-start',
        justifyContent: 'center',
        flexDirection:  'row',
      })
    })

    test(`parse(_, { inlineFlex: ... })`, () => {
      const styles = {}

      parse(styles, {
        inlineFlex: {
          relative:  2,
          align:     'center',
          justify:   'space-between',
          direction: 'vertical',
        }
      })
      expect(styles).toEqual({
        display:        'inline-flex',
        position:       'relative',
        zIndex:         2,
        alignItems:     'center',
        justifyContent: 'space-between',
        flexDirection:  'column',
      })
    })
  })

  describe('shorthands', () => {
    test(`parse(_, { flex: 'absolute' })`, () => {
      const styles = {}

      parse(styles, { flex: 'absolute' })
      expect(styles).toEqual({
        display:  'flex',
        position: 'absolute',
      })
    })

    test(`parse(_, { flex: 1 })`, () => {
      const styles = {}

      parse(styles, { flex: 1 })
      expect(styles).toEqual({
        display: 'flex',
        flex:    '1',
      })
    })

    test(`parse(_, { flex: '1' })`, () => {
      const styles = {}

      parse(styles, { flex: '1' })
      expect(styles).toEqual({
        display: 'flex',
        flex:    '1',
      })
    })

    test(`parse(_, { flex: [1, '2'] })`, () => {
      const styles = {}

      parse(styles, { flex: [1, '2'] })
      expect(styles).toEqual({
        display: 'flex',
        flex:    '1 2',
      })
    })

    test(`parse(_, { flex: ['1', 2, '30%'] })`, () => {
      const styles = {}

      parse(styles, { flex: ['1', 2, '30%'] })
      expect(styles).toEqual({
        display: 'flex',
        flex:    '1 2 30%',
      })
    })
  })

  describe('flex-grow', () => {
    test(`parse(_, { flex: { grow: 1 })`, () => {
      const styles = {}

      parse(styles, { flex: { grow: 1 }})
      expect(styles).toEqual({
        display:  'flex',
        flexGrow: '1',
      })
    })

    test(`parse(_, { inlineFlex: { grow: '2' })`, () => {
      const styles = {}

      parse(styles, { inlineFlex: { grow: '2' }})
      expect(styles).toEqual({
        display:  'inline-flex',
        flexGrow: '2',
      })
    })
  })

  describe('flex-shrink', () => {
    test(`parse(_, { flex: { shrink: 1 })`, () => {
      const styles = {}

      parse(styles, { flex: { shrink: 1 }})
      expect(styles).toEqual({
        display:    'flex',
        flexShrink: '1',
      })
    })

    test(`parse(_, { inlineFlex: { shrink: '2' })`, () => {
      const styles = {}

      parse(styles, { inlineFlex: { shrink: '2' }})
      expect(styles).toEqual({
        display:    'inline-flex',
        flexShrink: '2',
      })
    })
  })

  describe('flex-basis', () => {
    test(`parse(_, { flex: { basis: 1 })`, () => {
      const styles = {}

      parse(styles, { flex: { basis: 1 }})
      expect(styles).toEqual({
        display:   'flex',
        flexBasis: '1',
      })
    })

    test(`parse(_, { inlineFlex: { basis: '2' })`, () => {
      const styles = {}

      parse(styles, { inlineFlex: { basis: '2' }})
      expect(styles).toEqual({
        display:   'inline-flex',
        flexBasis: '2',
      })
    })
  })
})
