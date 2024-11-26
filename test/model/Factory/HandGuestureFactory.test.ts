import { HandGestureFactory } from '../../../src/model/Factory/HandGuestureFactory.js'
import { UserChoice } from '../../../src/model/enums/UserChoice.js'
import { Rock } from '../../../src/model/HandGesture/Rock.js'
import { Paper } from '../../../src/model/HandGesture/Paper.js'
import { Scissor } from '../../../src/model/HandGesture/Scissor.js'

describe('HandGestureFactory Under Test', () => {
  const setUpTest = (param) => {
    const sut = new HandGestureFactory()

    const spy = jest.spyOn(sut, 'createHandGuesture')

    const actual = sut.createHandGuesture(param)

    expect(spy).toHaveBeenCalled()
    expect(sut.createHandGuesture).toHaveBeenCalled()

    return actual
  }
  test('HandGestureFactory With Rock', () => {
    const actual = setUpTest(UserChoice.ROCK)

    const expected = new Rock()

    expect(actual).toStrictEqual(expected)
  })

  test('HandGestureFactory With Paper', () => {
    const actual = setUpTest(UserChoice.PAPER)

    const expected = new Paper()

    expect(actual).toStrictEqual(expected)
  })

  test('HandGestureFactory With Scissor', () => {
    const actual = setUpTest(UserChoice.SCISSOR)

    const expected = new Scissor()

    expect(actual).toStrictEqual(expected)
  })
})