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

  test('Rock Beats Paper', () => {
    const sut = getSUT()
    const actual = sut.beats(getPaper())
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Rock Beats Scissor', () => {
    const sut = getSUT()
    const actual = sut.beats(getScissor())
    const expected = true

    expect(actual).toBe(expected)
  })

  test('Rock Beats Rock', () => {
    const sut = getSUT()
    const actual = sut.beats(sut)
    const expected = false

    expect(actual).toBe(expected)
  })
})
