import { Paper } from '../../src/model/HandGesture/Paper'
import { Scissor } from '../../src/model/HandGesture/Scissor'
import { Rock } from '../../src/model/HandGesture/Rock'
import { UserChoice } from '../../src/model/enums/UserChoice.js'

jest.mock('../../src/model/HandGesture/Rock', () => {
  return {
    Rock: jest.fn().mockImplementation(function () {
      this.type = UserChoice.ROCK
    })
  }
})

jest.mock('../../src/model/HandGesture/Scissor', () => {
  return {
    Scissor: jest.fn().mockImplementation(function () {
      this.type = UserChoice.SCISSOR
    })
  }
})

describe('Paper class under test', () => {
  let sut: Paper
  let rock: Rock
  let scissor: Scissor

  beforeEach(() => {
    sut = new Paper()
    rock = new Rock()
    scissor = new Scissor()
  })

  const setUpTest = (param) => {
    const sut = new Paper()
    const actual = sut.beats(param)

    return actual
  }

  test('Paper Beats Scissors', () => {
    const expected = false
    const actual = setUpTest(new Scissor())

    expect(actual).toBe(expected)
  })

  test('Paper Beats Rock', () => {
    const expected = true
    const actual = setUpTest(new Rock())

    expect(actual).toBe(expected)
  })

  test('Paper Beats Paper', () => {
    const expected = false
    const actual = setUpTest(new Paper())

    expect(actual).toBe(expected)
  })
})