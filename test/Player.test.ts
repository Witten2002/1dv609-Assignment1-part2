import { Player } from '../src/model/Player'
import { Rock } from '../src/model/HandGesture/Rock'

describe('Player Under Test', () => {
  test('Set HandGuesture Rock', () => {
    const sut = new Player()
    const rock = new Rock()
    sut.setHandGuesture(rock)

    const actual = sut.getHandGuesture()
    const expected = rock

    expect(actual).toEqual(expected)
  })
})