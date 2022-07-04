import text from '..'

test('text', () => {
  expect(
    text({
      font:      'Arial',
      color:     0xFFFFFF,
      size:      1,
      weight:    'bold',
      underline: true,
      shadow: {
        x:     '1px',
        y:     '1px',
        blur:  '5px',
        color: [0x000000, .25]
      }
    })
  ).toEqual({
    font:           'Arial',
    color:          '#ffffff',
    fontSize:       '1rem',
    fontWeight:     700,
    textDecoration: 'underline',
    textShadow:     '1px 1px 5px rgba(0,0,0,0.25)',
  })
})
