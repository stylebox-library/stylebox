import position from '..'

describe('position', () => {
  test('position(\'absolute\', { zIndex: 1 })', () => {
    expect(
      position('absolute', { zIndex: 1 })
    ).toEqual({
      position: 'absolute',
      zIndex: 1
    })
  })

  test('position({ absolute: ... })', () => {
    expect(
      position({
        absolute: 1,
        vertical: 2
      })
    ).toEqual({
      position: 'absolute',
      zIndex: 1,
      top: '2rem',
      bottom: '2rem'
    })
  })
})
