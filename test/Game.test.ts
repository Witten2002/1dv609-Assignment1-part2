import { Game } from '../src/model/Game.js'
import { Player } from '../src/model/Player.js'
import { ComputerPlayer } from '../src/model/ComputerPlayer.js'
import { GameResult } from '../src/model/enums/GameResult.js'
import { Rock } from '../src/model/HandGesture/Rock.js'
import { Scissor } from '../src/model/HandGesture/Scissor.js'
import { Paper } from '../src/model/HandGesture/Paper.js'
import { HandGestureFactory } from '../src/model/Factory/HandGuestureFactory.js'
import { UserChoice } from '../src/model/enums/UserChoice.js'

jest.mock('../src/model/Factory/HandGuestureFactory', () => {
  return {
    HandGestureFactory: jest.fn().mockImplementation(function () {
      this.createHandGuesture = jest.fn()
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

describe('Rules Under Test', () => {
  let sut: Game
  let player: Player
  let computerPlayer: ComputerPlayer

  beforeEach(() => {
    sut = new Game()
    const handGestureFactory = new HandGestureFactory()
    player = new Player('Player', handGestureFactory)
    computerPlayer = new ComputerPlayer(handGestureFactory)

    jest.clearAllMocks()
  })

  const setUpTest = (playerHandGesture, computeHandGesture) => {
    player.getHandGuesture = jest.fn().mockReturnValue(playerHandGesture)
    computerPlayer.getHandGuesture = jest.fn().mockReturnValue(computeHandGesture)
  
    const spy = jest.spyOn(sut, 'deternimateWinner')
  
    const actual = sut.deternimateWinner(player, computerPlayer)
  
    expect(spy).toHaveBeenCalled()
    expect(player.getHandGuesture).toHaveBeenCalled()
    expect(computerPlayer.getHandGuesture).toHaveBeenCalled()
    

    return actual
  }

  test('Test Its a Tie! Computer: Rock. Player: Rock', () => {
    const actual = setUpTest(new Rock(), new Rock())

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Its a Tie! Computer: Paper. Player: Paper', () => {
    const actual = setUpTest(new Paper(), new Paper())

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Its a Tie! Computer: Scissor. Player: Scissor', () => {  
    const actual = setUpTest(new Scissor(), new Scissor())

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Player wins with a Rock. Computer: Scissor', () => {
    const actual = setUpTest(new Rock(), new Scissor())

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player Win with Scissor! Computer: Paper', () => {
    const actual = setUpTest(new Scissor(), new Paper())

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player Win with Paper! Computer: Rock', () => {
    const actual = setUpTest(new Paper(), new Rock())

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player loses with a Rock. Computer: Paper', () => {
    const actual = setUpTest(new Rock(), new Paper())

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Player loses with a Scissor. Computer: Rock', () => {
    const actual = setUpTest(new Scissor(), new Rock())

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Computer wins with a Scissor. Player: Paper', () => {
    const actual = setUpTest(new Paper(), new Scissor())

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test To Start A Game', () => {
    const spyPlayerSet = jest.spyOn(player, 'setHandGuesture')
    const spyPlayerGet = jest.spyOn(player, 'getHandGuesture')
    
    const spyComputerSet = jest.spyOn(computerPlayer, 'setHandGuesture')
    const spyComputerGet = jest.spyOn(computerPlayer, 'getHandGuesture')
    const spyComputerRandom = jest.spyOn(computerPlayer, 'getHandGuesture')

    sut.startGame(UserChoice.ROCK)

    expect(spyPlayerSet).toHaveBeenCalled()
    expect(spyPlayerGet).toHaveBeenCalled()
    expect(spyComputerSet).toHaveBeenCalled()
    expect(spyComputerGet).toHaveBeenCalled()
    expect(spyComputerRandom).toHaveBeenCalled()

    expect(player.setHandGuesture).toHaveBeenCalled()
    expect(player.getHandGuesture).toHaveBeenCalled()
    expect(computerPlayer.setHandGuesture).toHaveBeenCalled()
    expect(computerPlayer.getHandGuesture).toHaveBeenCalled()
    expect(computerPlayer.generateRandomHandGesture).toHaveBeenCalled()
  })
})