import { parse } from '..'

describe('cursor aliases', () => {
  test('parse(\'menu\') - alias of \'context-menu\'', () => {
    const styles = {}

    parse(styles, 'menu')
    expect(styles).toEqual({ cursor: 'context-menu' })
  })

  test('parse(\'click\') - alias of \'pointer\'', () => {
    const styles = {}

    parse(styles, 'click')
    expect(styles).toEqual({ cursor: 'pointer' })
  })

  test('parse(\'link\') - alias of \'pointer\'', () => {
    const styles = {}

    parse(styles, 'link')
    expect(styles).toEqual({ cursor: 'pointer' })
  })

  test('parse(\'disabled\') - alias of \'not-allowed\'', () => {
    const styles = {}

    parse(styles, 'disabled')
    expect(styles).toEqual({ cursor: 'not-allowed' })
  })

  test('parse(\'busy\') - alias of \'wait\'', () => {
    const styles = {}

    parse(styles, 'busy')
    expect(styles).toEqual({ cursor: 'wait' })
  })
})
