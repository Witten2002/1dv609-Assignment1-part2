import { Player } from '../src/model/Player.js'
import { Rock } from '../src/model/HandGesture/Rock.js'
import { Paper } from '../src/model/HandGesture/Paper.js'
import { Scissor } from '../src/model/HandGesture/Scissor.js'
import { UserChoice } from '../src/model/enums/UserChoice.js'
import { HandGestureFactory } from '../src/model/Factory/HandGuestureFactory.js'

jest.mock('../src/model/Factory/HandGuestureFactory', () => {
  return {
    HandGestureFactory: jest.fn().mockImplementation(function () {
      this.createHandGuesture = jest.fn()
    })
  }
})

describe('Player Under Test', () => {
  const setUpTest = (userChoiceEnum, expected) => {
    const handGestureFactory = new HandGestureFactory()
    const sut = new Player('Player', handGestureFactory)

    const spySetHandGuesture = jest.spyOn(sut, 'setHandGuesture')
    const spyHandGestureFactory = jest.spyOn(handGestureFactory, 'createHandGuesture').mockReturnValue(expected)
    const spyGetHandGesture = jest.spyOn(sut, 'getHandGuesture')

    sut.setHandGuesture(userChoiceEnum)
    const actual = sut.getHandGuesture()

    expect(spySetHandGuesture).toHaveBeenCalled()
    expect(spyHandGestureFactory).toHaveBeenCalled()
    expect(spyGetHandGesture).toHaveBeenCalled()

    expect(sut.setHandGuesture).toHaveBeenCalled()
    expect(handGestureFactory.createHandGuesture).toHaveBeenCalled()
    expect(sut.getHandGuesture).toHaveBeenCalled()

    return actual
  }

  test('Set HandGuesture Rock', () => {
    const actual = setUpTest(UserChoice.ROCK, new Rock())
    const expected = new Rock()

    expect(actual).toStrictEqual(expected)
  })

  test('Set HandGuesture Paper', () => {
    const actual = setUpTest(UserChoice.PAPER, new Paper())
    const expected = new Paper()

    expect(actual).toStrictEqual(expected)
  })

  test('Set HandGuesture Scissor', () => {
    const actual = setUpTest(UserChoice.SCISSOR, new Scissor())
    const expected = new Scissor()

    expect(actual).toStrictEqual(expected)
  })

  test('New Player Correct Name', () => {
    const player = new Player ('Player One', new HandGestureFactory())
    const actual = player.getName()
    const expected = 'Player One'

    expect(actual).toBe(expected)
  })

  test('New Player Not A Valid Name. To Throw', () => {
    expect(() => {
      new Player ('Player@1', new HandGestureFactory())
    }).toThrow()
  })

  test('New Player Valid Name. Not To Throw', () => {
    expect(() => {
      new Player ('Player 1', new HandGestureFactory())
    }).not.toThrow()
  })
})