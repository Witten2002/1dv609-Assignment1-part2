import { Player } from '../src/model/Player'
import { Rock } from '../src/model/HandGesture/Rock'
import { Paper } from '../src/model/HandGesture/Paper'

describe('Player Under Test', () => {
  test('Set HandGuesture Rock', () => {
    const sut = new Player()
    const rock = new Rock()
    sut.setHandGuesture(rock)

    const actual = sut.getHandGuesture()
    const expected = rock

    expect(actual).toStrictEqual(expected)
  })

  test('Set HandGuesture Paper', () => {
    const sut = new Player()
    const paper = new Paper()
    sut.setHandGuesture(paper)

    const actual = sut.getHandGuesture()
    const expected = paper

    console.log(actual)
    console.log(expected)

    expect(actual).toStrictEqual(expected)
  })
})