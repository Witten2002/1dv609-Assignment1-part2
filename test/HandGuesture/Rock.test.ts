import { Rock } from '../../src/model/HandGesture/Rock.js'
import { Paper } from '../../src/model/HandGesture/Paper.js'
import { Scissor } from '../../src/model/HandGesture/Scissor.js'
import { UserChoice } from '../../src/model/enums/UserChoice.js'

jest.mock('../../src/model/HandGesture/Scissor', () => {
  return {
    Scissor: jest.fn().mockImplementation(function () {
      this.type = UserChoice.SCISSOR
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

describe('Rock Class Under Test', () => {
  let sut: Rock
  let scissor: Scissor
  let paper: Paper

  
  beforeEach(() => {
    sut = new Rock()
    scissor = new Scissor()
    paper = new Paper()
  })

  const setUpTest = (param) => {
    const sut = new Rock()
    const actual = sut.beats(param)

    return actual
  }

  test('Rock Beats Paper', () => {
    const actual = setUpTest(new Paper())
    const expected = false

    expect(actual).toBe(expected)
  })

  test('Rock Beats Scissor', () => {
    const expected = true
    const actual = setUpTest(new Scissor())

    expect(actual).toBe(expected)
  })

  test('Rock Beats Rock', () => {
    const expected = false
    const actual = setUpTest(new Rock())

    expect(actual).toBe(expected)
  })
})
