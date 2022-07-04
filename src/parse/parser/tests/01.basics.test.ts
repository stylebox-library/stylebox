import {
  parseObject,
  parseArray,
} from '..'

describe('basics', () => {
  describe('edge cases', () => {
    test('parseObject: empty call -> parse()', () => {
      const styles = {}

      parseObject(styles)
      expect(styles).toEqual({})
    })

    test('parseArray: empty call -> parse()', () => {
      const styles: any[] = []

      parseArray(styles)
      expect(styles).toEqual([])
    })
  })
})
