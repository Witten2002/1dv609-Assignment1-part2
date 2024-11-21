import { Scissor } from '../../src/model/HandGesture/Scissor'
import { Rock } from '../../src/model/HandGesture/Rock'

describe('Scissors Under Test', () => {
  const getSUT = () => {
    return new Scissor()
  }

  const getRock = () => {
    return new Rock()
  }

  test('Scissors Beat Rock', () => {
    const sut = getSUT()
    const actual = sut.beats(getRock())
    const expected = false

    expect(actual).toBe(expected)
  })
})