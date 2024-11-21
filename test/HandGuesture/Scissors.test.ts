import { Scissor } from '../../src/model/HandGesture/Scissor'
import { Rock } from '../../src/model/HandGesture/Rock'
import { Paper } from '../../src/model/HandGesture/Paper'

describe('Scissors Under Test', () => {
  const setUpTest = (param) => {
    const sut = new Scissor()
    const actual = sut.beats(param)

    return actual
  }

  test('Scissor Beat Rock', () => {
    const actual = setUpTest(new Rock())
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Scissor Beats Paper', () => {
    const actual = setUpTest(new Paper())
    const expected = true

    expect(actual).toBe(expected)
  })

  test('Scissor Beats Scissor', () => {
    const actual = setUpTest(new Scissor())
    const expected = false

    expect(actual).toBe(expected)
  })
})