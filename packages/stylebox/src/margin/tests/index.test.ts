import margin from '..'

describe('margin', () => {
  test('margin(false)', () => {
    expect(margin(false)).toEqual({ margin: 0 })
  })

  test('margin(1)', () => {
    expect(margin(1)).toEqual({ margin: '1rem' })
  })

  test('margin(1, 2)', () => {
    expect(margin(1, 2)).toEqual({
      marginTop: '1rem',
      marginBottom: '1rem',
      marginLeft: '2rem',
      marginRight: '2rem'
    })
  })

  test('margin(1, 2, 3)', () => {
    expect(margin(1, 2, 3)).toEqual({
      marginTop: '1rem',
      marginLeft: '2rem',
      marginRight: '2rem',
      marginBottom: '3rem'
    })
  })

  test('margin(1, 2, 3, 4)', () => {
    expect(margin(1, 2, 3, 4)).toEqual({
      marginTop: '1rem',
      marginRight: '2rem',
      marginBottom: '3rem',
      marginLeft: '4rem'
    })
  })

  test('margin(1, { ... })', () => {
    expect(margin(1, { top: 2, bottom: 3, horizontal: 4 })).toEqual({
      margin: '1rem',
      marginTop: '2rem',
      marginLeft: '4rem',
      marginRight: '4rem',
      marginBottom: '3rem'
    })
  })
})
