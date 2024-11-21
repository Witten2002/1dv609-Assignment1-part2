import { ComputerPlayer } from '../src/model/ComputerPlayer'
import { Paper } from '../src/model/HandGesture/Paper'
import { Rock } from '../src/model/HandGesture/Rock'

describe('ComputerPlayer Under Test', () => {
  test('GenerateRandomHandGesture', () => {
    const sut = new ComputerPlayer()

    // Mock Math.random to return a fixed value
    jest.spyOn(Math, 'random').mockReturnValue(0)

    const actual = sut.generateRandomHandGesture()

    const expected = new Rock()

    expect(actual).toStrictEqual(expected)

    // Reset the mocked Math.random
    jest.spyOn(Math, 'random').mockRestore()
  })
})