import { Scissor } from '../../src/model/HandGesture/Scissor.js'
import { Rock } from '../../src/model/HandGesture/Rock.js'
import { Paper } from '../../src/model/HandGesture/Paper.js'
import { UserChoice } from '../../src/model/enums/UserChoice.js'

jest.mock('../../src/model/HandGesture/Rock', () => {
  return {
    Rock: jest.fn().mockImplementation(function () {
      this.type = UserChoice.ROCK
    })
  }
})

jest.mock('../../src/model/HandGesture/Paper', () => {
  return {
    Paper: jest.fn().mockImplementation(function () {
      this.type = UserChoice.PAPER
    })
  }
})

describe('Scissors Under Test', () => {
  let sut: Scissor
  let rock: Rock
  let paper: Paper

  beforeEach(() => {
    sut = new Scissor()
    rock = new Rock()
    paper = new Paper()
  })

  const setUpTest = (handGesture) => {
    const actual = sut.beats(handGesture)

    return actual
  }

  test('Scissor Beat Rock', () => {
    const actual = setUpTest(rock)
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Scissor Beats Paper', () => {
    const actual = setUpTest(paper)
    const expected = true

    expect(actual).toBe(expected)
  })

  test('Scissor Beats Scissor', () => {
    const actual = setUpTest(sut)
    const expected = false

    expect(actual).toBe(expected)
  })
})