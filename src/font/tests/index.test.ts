import font from '..'

describe('font', () => {
  test('general usage', () => {
    expect(
      font({
        family: 'Arial',
        color:  0x000000,
        size:   1,
        weight: 'bold',
      })
    ).toEqual({
      fontFamily: 'Arial',
      color:      '#000000',
      fontSize:   '1rem',
      fontWeight: 700,
    })
  })
})
