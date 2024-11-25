import { Rules } from '../src/model/Rules.js'
import { UserChoice } from '../src/model/enums/UserChoice.js'
import { Scissor } from '../src/model/HandGesture/Scissor.js'
import { Rock } from '../src/model/HandGesture/Rock.js'
import { Paper } from '../src/model/HandGesture/Paper.js'
import { Player } from '../src/model/Player.js'
import { ComputerPlayer } from '../src/model/ComputerPlayer.js'
import { HandGestureFactory } from '../src/model/Factory/HandGuestureFactory.js'

jest.mock('../src/model/HandGesture/Rock', () => {
  return {
    Rock: jest.fn().mockImplementation(function () {
      this.type = UserChoice.ROCK
    })
  }
})

jest.mock('../src/model/HandGesture/Paper', () => {
  return {
    Paper: jest.fn().mockImplementation(function () {
      this.type = UserChoice.PAPER
    })
  }
})

jest.mock('../src/model/HandGesture/Scissor', () => {
  return {
    Scissor: jest.fn().mockImplementation(function () {
      this.type = UserChoice.SCISSOR
    })
  }
})

jest.mock('../src/model/Player.ts', () => {
  return {
    Player: jest.fn().mockImplementation(function (name: string) {
      this.name = name
      this.getHandGuesture = jest.fn()
      this.setHandGuesture = jest.fn()
    }),
  }
})

jest.mock('../src/model/ComputerPlayer.ts', () => {
  return {
    ComputerPlayer: jest.fn().mockImplementation(function () {
      Player.call(this, 'ComputerPlayer')
      this.setHandGuesture = jest.fn()
    }),
  }
})

jest.mock('../src/model/Factory/HandGuestureFactory', () => {
  return {
    HandGestureFactory: jest.fn().mockImplementation(function () {
      this.createHandGuesture = jest.fn()
    })
  }
})

describe('Rules Under Test', () => {
  let sut: Rules
  let rock: Rock
  let scissor: Scissor
  let paper: Paper
  let player: Player
  let computer: ComputerPlayer
  let handGesture: HandGestureFactory

  beforeAll(() => {
    sut = new Rules()
    rock = new Rock()
    scissor = new Scissor()
    paper = new Paper()
    handGesture = new HandGestureFactory()
    player = new Player('Player 1', handGesture)
    computer = new ComputerPlayer(handGesture)
  })

  const setUpTest = (playerHandGesture, computerHandGesture) => {
    const spyPlayerHand = jest.spyOn(player, 'getHandGuesture').mockReturnValue(playerHandGesture)
    const spyComputerHand = jest.spyOn(computer, 'getHandGuesture').mockReturnValue(computerHandGesture)
    const playerHand = player.getHandGuesture()
    const computerHand = computer.getHandGuesture()
    const spy = jest.spyOn(sut, 'compareGestures')

    const actual = sut.compareGestures(playerHand, computerHand)

    expect(spy).toHaveBeenCalled()
    expect(spyPlayerHand).toHaveBeenCalled()
    expect(spyComputerHand).toHaveBeenCalled()
    
    expect(sut.compareGestures).toHaveBeenCalled()
    expect(player.getHandGuesture).toHaveBeenCalled()
    expect(computer.getHandGuesture).toHaveBeenCalled()

    return actual
  }

  test('Player wins Rock Vs Scissor', () => {
    const actual = setUpTest(rock, scissor)

    const expected = true

    expect(actual).toBe(expected)
  })

  test('Player wins Paper Vs Rock', () => {
    const actual = setUpTest(paper, rock)

    const expected = true

    expect(actual).toBe(expected)
  })

  test('Player wins Scissor Vs Paper', () => {
    const actual = setUpTest(scissor, paper)

    const expected = true

    expect(actual).toBe(expected)
  })

  test('Player Loses Scissor Vs Rock', () => {
    const actual = setUpTest(scissor, rock)

    const expected = false

    expect(actual).toBe(expected)
  })

  test('Player Loses Rock Vs Paper', () => {
    const actual = setUpTest(rock, paper)

    const expected = false

    expect(actual).toBe(expected)
  })

  test('Player Loses Paper Vs Scissor', () => {
    const actual = setUpTest(paper, scissor)

    const expected = false

    expect(actual).toBe(expected)
  })
})