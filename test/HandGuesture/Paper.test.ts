import { Paper } from '../../src/model/HandGesture/Paper'
import { Scissor } from '../../src/model/HandGesture/Scissor'
import { Rock } from '../../src/model/HandGesture/Rock'

describe('Paper class under test', () => {
  const getSUT = () => {
    return new Paper()
  }

  const getScissor = () => {
    return new Scissor()
  }

  const getRock = () => {
    return new Rock()
  }

  const setUpTest = (param) => {
    const sut = getSUT()
    const actual = sut.beats(param)

    return actual
  }

  test('Paper Beats Scissors', () => {
    const expected = false
    const actual = setUpTest(getScissor())

    expect(actual).toBe(expected)
  })

  test('Paper Beats Rock', () => {
    const expected = true
    const actual = setUpTest(getRock())

    expect(actual).toBe(expected)
  })

  test('Paper Beats Paper', () => {
    const expected = false
    const actual = setUpTest(getSUT())

    expect(actual).toBe(expected)
  })
})