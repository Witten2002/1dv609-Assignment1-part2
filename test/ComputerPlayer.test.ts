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
})