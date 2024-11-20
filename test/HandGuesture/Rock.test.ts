import { Rock } from '../../src/model/HandGesture/Rock'
import { Paper } from '../../src/model/HandGesture/Paper'
import { Scissor } from '../../src/model/HandGesture/Scissor'

describe('Rock Class Under Test', () => {
  const getSUT = () => {
    return new Rock()
  }

  const getPaper = () => {
    return new Paper()
  }

  const getScissor = () => {
    return new Scissor()
  }

  const setUpTest = (param) => {
    const sut = getSUT()
    const actual = sut.beats(param)

    return actual
  }

  test('Rock Beats Paper', () => {
    const actual = setUpTest(getPaper())
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Rock Beats Scissor', () => {
    const expected = true
    const actual = setUpTest(getScissor())

    expect(actual).toBe(expected)
  })

  test('Rock Beats Rock', () => {
    const expected = false
    const actual = setUpTest(getSUT())

    expect(actual).toBe(expected)
  })
})
