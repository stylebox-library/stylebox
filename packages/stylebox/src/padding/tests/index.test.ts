import padding from '..'

describe('padding', () => {
  test('padding(false)', () => {
    expect(padding(false)).toEqual({ padding: 0 })
  })

  test('padding(1)', () => {
    expect(padding(1)).toEqual({ padding: '1rem' })
  })

  test('padding(1, 2)', () => {
    expect(padding(1, 2)).toEqual({
      paddingTop: '1rem',
      paddingBottom: '1rem',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    })
  })

  test('padding(1, 2, 3)', () => {
    expect(padding(1, 2, 3)).toEqual({
      paddingTop: '1rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      paddingBottom: '3rem'
    })
  })

  test('padding(1, 2, 3, 4)', () => {
    expect(padding(1, 2, 3, 4)).toEqual({
      paddingTop: '1rem',
      paddingRight: '2rem',
      paddingBottom: '3rem',
      paddingLeft: '4rem'
    })
  })

  test('padding(1, { ... })', () => {
    expect(padding(1, { top: 2, bottom: 3, horizontal: 4 })).toEqual({
      padding: '1rem',
      paddingTop: '2rem',
      paddingLeft: '4rem',
      paddingRight: '4rem',
      paddingBottom: '3rem'
    })
  })
})
