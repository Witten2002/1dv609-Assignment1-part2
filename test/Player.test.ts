import { Player } from '../src/model/Player'
import { Rock } from '../src/model/HandGesture/Rock'
import { Paper } from '../src/model/HandGesture/Paper'
import { Scissor } from '../src/model/HandGesture/Scissor'

describe('Player Under Test', () => {
  const setUpTest = (param) => {
    const sut = new Player()
    sut.setHandGuesture(param)
    const actual = sut.getHandGuesture()

    return actual
  }
  test('Set HandGuesture Rock', () => {
    const rock = new Rock()

    const actual = setUpTest(rock)
    const expected = rock

    expect(actual).toStrictEqual(expected)
  })

  test('Set HandGuesture Paper', () => {
    const paper = new Paper()

    const actual = setUpTest(paper)
    const expected = paper

    expect(actual).toStrictEqual(expected)
  })

  test('Set HandGuesture Scissor', () => {
    const scissor = new Scissor()

    const actual = setUpTest(scissor)
    const expected = scissor

    expect(actual).toStrictEqual(expected)
  })
})