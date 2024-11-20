import { Paper } from '../../src/model/HandGesture/Paper'
import { Scissor } from '../../src/model/HandGesture/Scissor'

describe('Paper class under test', () => {
  const getSUT = () => {
    return new Paper()
  }

  const getScissor = () => {
    return new Scissor()
  }

  test('Paper Beats Scissors', () => {
    const sut = getSUT()
    const actual = sut.beats(getScissor())
    const expected = false

    expect(actual).toBe(expected)
  })
})