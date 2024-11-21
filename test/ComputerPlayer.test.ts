import { ComputerPlayer } from '../src/model/ComputerPlayer'
import { Paper } from '../src/model/HandGesture/Paper'
import { Rock } from '../src/model/HandGesture/Rock'
import { Scissor } from '../src/model/HandGesture/Scissor'

describe('ComputerPlayer Under Test', () => {
  let sut: ComputerPlayer
  let expected

  beforeEach(() => {
    sut = new ComputerPlayer()
    expected = [new Rock(), new Paper(), new Scissor()]
  })
  
  test('ComputerPlayer should generate a valid random UserChoice', () => {
    sut.generateRandomHandGesture()
    const actual = sut.getHandGuesture()

    expect(expected).toContainEqual(actual)
  })

  test('ComputerPlayer should generate valid random UserChoices', () => {
    const actualValues = new Set()

    for (let i = 0; i < 100; i++) { 
      sut.generateRandomHandGesture()
      const actual = sut.getHandGuesture()

      actualValues.add(actual)
    }

    expect(expected).toContainEqual(new Set([...actualValues]))
  })
})