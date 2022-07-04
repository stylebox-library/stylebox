import size from '..'

describe('size - general usage', () => {
  test('size(false)', () => {
    expect(size(false)).toEqual({
      width:  0,
      height: 0
    })
  })

  test('size(0)', () => {
    expect(size(0)).toEqual({
      width:  0,
      height: 0
    })
  })

  test('size(1)', () => {
    expect(size(1)).toEqual({
      width:  '1rem',
      height: '1rem'
    })
  })

  test('size(1, 2)', () => {
    expect(size(1, 2)).toEqual({
      width:  '1rem',
      height: '2rem'
    })
  })

  test('size(0, { ... })', () => {
    expect(size(0, { height: 1, maxHeight: 2 })).toEqual({
      width:     0,
      height:    '1rem',
      maxHeight: '2rem'
    })
  })

  describe('objects', () => {
    test('size({ of: 1 })', () => {
      expect(size({ of: 1 })).toEqual({
        width:  '1rem',
        height: '1rem'
      })
    })

    test('size({ width: 1, height: 2 })', () => {
      expect(size({ width: 1, height: 2 })).toEqual({
        width:  '1rem',
        height: '2rem'
      })
    })

    test('size({ of: 0, maxHeight: 1 })', () => {
      expect(size({ of: 0, maxHeight: 1 })).toEqual({
        width:     0,
        height:    0,
        maxHeight: '1rem'
      })
    })
  })

  describe('arrays', () => {
    test('size([false])', () => {
      expect(size([false])).toEqual({
        width:  0,
        height: 0
      })
    })

    test('size([0])', () => {
      expect(size([0])).toEqual({
        width:  0,
        height: 0
      })
    })

    test('size([1, 2])', () => {
      expect(size([1, 2])).toEqual({
        width:  '1rem',
        height: '2rem'
      })
    })

    test(`size(['1px', { ... }])`, () => {
      expect(size(['.5px', { minHeight: '101px' }])).toEqual({
        width:     '.5px',
        height:    '.5px',
        minHeight: '101px'
      })
    })

    test(`size(['1px', '2px', { ... }])`, () => {
      expect(size(['1px', '2px', { maxHeight: '100px' }])).toEqual({
        width:     '1px',
        height:    '2px',
        maxHeight: '100px'
      })
    })
  })
})
