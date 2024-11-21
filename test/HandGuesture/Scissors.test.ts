import { Scissor } from '../../src/model/HandGesture/Scissor'
import { Rock } from '../../src/model/HandGesture/Rock'
import { Paper } from '../../src/model/HandGesture/Paper'

describe('Scissors Under Test', () => {
  const getSUT = () => {
    return new Scissor()
  }

  const getRock = () => {
    return new Rock()
  }

  test('Scissor Beat Rock', () => {
    const sut = getSUT()
    const actual = sut.beats(getRock())
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Scissor Beats Paper', () => {
    const sut = getSUT()
    const actual = sut.beats(new Paper())
    const expected = true

    expect(actual).toBe(expected)
  })

  test('Scissor Beats Scissor', () => {
    const sut = getSUT()
    const actual = sut.beats(getSUT())
    const expected = false

    expect(actual).toBe(expected)
  })
})