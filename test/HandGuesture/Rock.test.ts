import { Rock } from '../../src/model/HandGesture/Rock'
import { Paper } from '../../src/model/HandGesture/Paper'

describe('Rock Class Under Test', () => {
  const getSUT = () => {
    return new Rock()
  }

  const getPaper = () => {
    return new Paper()
  }

  test('Test Rock Beats Paper', () => {
    const sut = getSUT()
    const paper = getPaper()
    const actual = sut.beats(paper)
    const expected = false

    expect(actual).toBe(expected)
  })
})
