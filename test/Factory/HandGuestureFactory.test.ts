import { HandGestureFactory } from '../../src/model/Factory/HandGuestureFactory'
import { UserChoice } from '../../src/model/enums/UserChoice'
import { Rock } from '../../src/model/HandGesture/Rock'
import { Paper } from '../../src/model/HandGesture/Paper'
import { Scissor } from '../../src/model/HandGesture/Scissor'

describe('HandGestureFactory Under Test', () => {
  test('HandGestureFactory With Rock', () => {
    const sut = new HandGestureFactory()
    const actual = sut.createHandGuesture(UserChoice.ROCK)

    const expected = new Rock()

    expect(actual).toStrictEqual(expected)
  })

  test('HandGestureFactory With Paper', () => {
    const sut = new HandGestureFactory()
    const actual = sut.createHandGuesture(UserChoice.PAPER)

    const expected = new Paper()

    expect(actual).toStrictEqual(expected)
  })

  test('HandGestureFactory With Scissor', () => {
    const sut = new HandGestureFactory()
    const actual = sut.createHandGuesture(UserChoice.SCISSOR)

    const expected = new Scissor()

    expect(actual).toStrictEqual(expected)
  })
})