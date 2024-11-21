import { HandGestureFactory } from '../../src/model/Factory/HandGuestureFactory'
import { UserChoice } from '../../src/model/enums/UserChoice'
import { Rock } from '../../src/model/HandGesture/Rock'

describe('HandGestureFactory Under Test', () => {
  test('HandGestureFactory With Rock', () => {
    const sut = new HandGestureFactory()
    const actual = sut.createHandGuesture(UserChoice.ROCK)

    const expected = new Rock()

    expect(actual).toStrictEqual(expected)
  })
})