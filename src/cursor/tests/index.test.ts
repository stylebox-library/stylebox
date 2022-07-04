import cursor from '..'

describe('cursor', () => {
  test('empty call', () => {
    expect(cursor()).toBeUndefined()
  })

  test('hide cursor', () => {
    expect(cursor(false)).toEqual({ cursor: 'none' })
  })

  test('default cursor', () => {
    expect(cursor('default')).toEqual({ cursor: 'default' })
  })

  test('alias', () => {
    expect(cursor('click')).toEqual({ cursor: 'pointer' })
  })
})
