// TODO: finish for every cursor types

import { parse } from '..'

/*

'context-menu'
'help'
'pointer'
'progress'
'wait'
'cell'
'crosshair'
'text'
'vertical-text'
'alias'
'copy'
'move'
'no-drop'
'not-allowed'
'grab'
'grabbing'
'all-scroll'
'col-resize'
'row-resize'
'n-resize'
'e-resize'
's-resize'
'w-resize'
'ne-resize'
'nw-resize'
'se-resize'
'sw-resize'
'ew-resize'
'ns-resize'
'nesw-resize'
'nwse-resize'
'zoom-in'
'zoom-out'

*/

describe('CSS cursor values', () => {
  test('parse(\'auto\')', () => {
    const styles = {}

    parse(styles, 'auto')
    expect(styles).toEqual({ cursor: 'auto' })
  })

  test('parse(\'default\')', () => {
    const styles = {}

    parse(styles, 'default')
    expect(styles).toEqual({ cursor: 'default' })
  })

  test('parse(\'none\')', () => {
    const styles = {}

    parse(styles, 'none')
    expect(styles).toEqual({ cursor: 'none' })
  })
})
