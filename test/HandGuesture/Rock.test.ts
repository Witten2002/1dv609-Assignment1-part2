import { Rock } from '../../src/model/HandGesture/Rock.js'
import { Paper } from '../../src/model/HandGesture/Paper.js'
import { Scissor } from '../../src/model/HandGesture/Scissor.js'

describe('Rock Class Under Test', () => {
  const setUpTest = (param) => {
    const sut = new Rock()
    const actual = sut.beats(param)

    return actual
  }

  test('Rock Beats Paper', () => {
    const actual = setUpTest(new Paper())
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Rock Beats Scissor', () => {
    const expected = true
    const actual = setUpTest(new Scissor())

    expect(actual).toBe(expected)
  })

  test('Rock Beats Rock', () => {
    const expected = false
    const actual = setUpTest(new Rock())

    expect(actual).toBe(expected)
  })
})
