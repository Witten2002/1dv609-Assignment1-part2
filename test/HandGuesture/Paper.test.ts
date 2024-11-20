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

  test('Paper Beats Scissors', () => {
    const sut = getSUT()
    const actual = sut.beats(getScissor())
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Paper Beats Rock', () => {
    const sut = getSUT()
    const actual = sut.beats(getRock())
    const expected = true

    expect(actual).toBe(expected)
  })
})