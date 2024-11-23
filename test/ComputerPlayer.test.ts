import { ComputerPlayer } from '../src/model/ComputerPlayer'
import { Paper } from '../src/model/HandGesture/Paper.js'
import { Rock } from '../src/model/HandGesture/Rock.js'
import { Scissor } from '../src/model/HandGesture/Scissor.js'
import { HandGestureFactory } from '../src/model/Factory/HandGuestureFactory.js'
import { HandGuesture } from '../src/model/HandGesture/HandGesture.js'

jest.mock('../src/model/Factory/HandGuestureFactory', () => {
  return {
    HandGestureFactory: jest.fn().mockImplementation(function () {
      this.createHandGuesture = jest.fn()
    })
  }
})

describe('ComputerPlayer Under Test', () => {
  let sut: ComputerPlayer
  let expected: HandGuesture[]
  let handGestureFactory: HandGestureFactory

  beforeEach(() => {
    handGestureFactory = new HandGestureFactory()
    sut = new ComputerPlayer(handGestureFactory)
    expected = [new Rock(), new Paper(), new Scissor()]
  })

  const setUpTest = (numOfRounds) => {
    const spyGenerateRandomHandGesture = jest.spyOn(sut, 'generateRandomHandGesture')

    const actualValues: HandGuesture[] = []
    const expectedReturnValues = [new Rock(), new Paper(), new Scissor()]

    for (let i = 0; i < numOfRounds; i++) { 
      const randomIndex = Math.floor(Math.random() * 3)
      handGestureFactory.createHandGuesture = jest.fn().mockReturnValue(expectedReturnValues[randomIndex])
      sut.generateRandomHandGesture()
      const actual = sut.getHandGuesture()

      actualValues.push(actual)
    }

    expect(spyGenerateRandomHandGesture).toHaveBeenCalled()

    expect(sut.generateRandomHandGesture).toHaveBeenCalled()
    
    return actualValues
  }
  
  test('ComputerPlayer should generate a valid random UserChoice', () => {
    const actual = setUpTest(1)

    let present = false

    for (const handGesture of expected) {
      if (actual[0] instanceof handGesture.constructor) {
        present = true
      }
    }

    expect(present).toBe(true)
  })

  test('ComputerPlayer should generate valid random UserChoices', () => {
    const actual = setUpTest(100)

    expect([...actual]).toEqual(expect.arrayContaining(expected))
  })
})