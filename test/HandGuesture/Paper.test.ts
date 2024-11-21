import { Paper } from '../../src/model/HandGesture/Paper'
import { Scissor } from '../../src/model/HandGesture/Scissor'
import { Rock } from '../../src/model/HandGesture/Rock'

describe('Paper class under test', () => {
  const setUpTest = (param) => {
    const sut = new Paper()
    const actual = sut.beats(param)

    return actual
  }

  test('Paper Beats Scissors', () => {
    const expected = false
    const actual = setUpTest(new Scissor())

    expect(actual).toBe(expected)
  })

  test('Paper Beats Rock', () => {
    const expected = true
    const actual = setUpTest(new Rock())

    expect(actual).toBe(expected)
  })

  test('Paper Beats Paper', () => {
    const expected = false
    const actual = setUpTest(new Paper())

    expect(actual).toBe(expected)
  })
})