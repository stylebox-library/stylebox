import color from '..'

describe('color - general usage', () => {
  test('color({ ... })', () => {
    expect(
      color({
        text: 0x000000,
        background: 'white',
        fill: ['blue', 0.5],
        stroke: ['0x123456', 0.5]
      })
    ).toEqual({
      color: '#000000',
      backgroundColor: '#ffffff',
      fill: 'rgba(0,0,255,0.5)',
      stroke: 'rgba(18,52,86,0.5)'
    })
  })

  test('color(text, background)', () => {
    expect(color(0x000000, 'white'))
      .toEqual({
        color: '#000000',
        backgroundColor: '#ffffff'
      })
  })

  test('color(text, background, { ... })', () => {
    expect(
      color(
        0x000000,
        'white',
        {
          fill: ['blue', 0.5],
          stroke: ['0x123456', 0.5]
        }
      )
    )
      .toEqual({
        color: '#000000',
        backgroundColor: '#ffffff',
        fill: 'rgba(0,0,255,0.5)',
        stroke: 'rgba(18,52,86,0.5)'
      })
  })
})
