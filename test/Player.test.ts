import { Player } from '../src/model/Player'
import { Rock } from '../src/model/HandGesture/Rock'
import { Paper } from '../src/model/HandGesture/Paper'
import { Scissor } from '../src/model/HandGesture/Scissor'
import { UserChoice } from '../src/model/enums/UserChoice'

describe('Player Under Test', () => {
  const setUpTest = (param) => {
    const sut = new Player('Player')
    sut.setHandGuesture(param)
    const actual = sut.getHandGuesture()

    return actual
  }

  test('Set HandGuesture Rock', () => {
    const actual = setUpTest(UserChoice.ROCK)
    const expected = new Rock()

    expect(actual).toStrictEqual(expected)
  })

  test('Set HandGuesture Paper', () => {
    const actual = setUpTest(UserChoice.PAPER)
    const expected = new Paper()

    expect(actual).toStrictEqual(expected)
  })

  test('Set HandGuesture Scissor', () => {
    const actual = setUpTest(UserChoice.SCISSOR)
    const expected = new Scissor()

    expect(actual).toStrictEqual(expected)
  })

  test('New Player Correct Name', () => {
    const player = new Player ('Player One')
    const actual = player.getName()
    const expected = 'Player One'

    expect(actual).toBe(expected)
  })

  test('New Player Not A Valid Name. To Throw', () => {
    expect(() => {
      new Player ('Player@1')
    }).toThrow()
  })

  test('New Player Valid Name. Not To Throw', () => {
    expect(() => {
      new Player ('Player 1')
    }).not.toThrow()
  })
})