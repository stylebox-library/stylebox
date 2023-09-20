import interaction from '..'

describe('interaction', () => {
  test('empty call', () => {
    expect(interaction()).toBeUndefined()
  })

  test('disable interaction', () => {
    expect(
      interaction(false)
    ).toEqual({
      userSelect: 'none',
      pointerEvents: 'none'
    })
  })

  test('disable selection', () => {
    expect(
      interaction({ selectable: false })
    ).toEqual({
      userSelect: 'none'
    })
  })

  test('disable clicking', () => {
    expect(
      interaction({ interactive: false })
    ).toEqual({
      pointerEvents: 'none'
    })
  })
})
