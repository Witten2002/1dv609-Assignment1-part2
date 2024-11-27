import { GameView } from '../../src/view/GameView'
import { ReadLineAdapter } from '../../src/adapters/ReadLineAdapter'
import { UserChoice } from '../../src/model/enums/UserChoice'
import { HandGestureFactory } from '../../src/model/Factory/HandGuestureFactory'
import { Player } from '../../src/model/Player'
import { ComputerPlayer } from '../../src/model/ComputerPlayer'
import { GameResult } from '../../src/model/enums/GameResult'

jest.mock('../../src/adapters/ReadLineAdapter', () => {
  return {
    ReadLineAdapter: jest.fn().mockImplementation(function () {
      this.getUserInput = jest.fn()
    })
  }
})

jest.mock('../../src/model/Player', () => {
  return {
    Player: jest.fn().mockImplementation(function () {
      this.setHandGuesture = jest.fn(),
      this.getHandGuesture = jest.fn()
    })
  }
})

jest.mock('../../src/model/ComputerPlayer', () => {
  return {
    ComputerPlayer: jest.fn().mockImplementation(function () {
      this.setHandGuesture = jest.fn(),
      this.getHandGuesture = jest.fn()
    })
  }
})

describe('GameView Under Test', () => {
  let sut: GameView
  let spy
  let rl: ReadLineAdapter
  let player: Player
  let computer: ComputerPlayer

  beforeAll(() => {
    rl = new ReadLineAdapter()
    sut = new GameView(rl)
    spy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should send a welcome Message', () => {
    sut.startGameMessage()

    expect(spy).toHaveBeenCalledWith('Welcome To Rock, Paper, Scissor Game')
  })

  test('should promt all different gestures', async() => {
    rl.getUserInput = jest.fn().mockResolvedValue('Rock')

    await sut.chooseHand()

    expect(spy).toHaveBeenCalledWith('1. ROCK')
    expect(spy).toHaveBeenCalledWith('2. PAPER')
    expect(spy).toHaveBeenCalledWith('3. SCISSOR')
  })

  test('should return the correct UserChoice Rock', async() => {
    rl.getUserInput = jest.fn().mockResolvedValue('1')

    const actual = await sut.chooseHand()

    expect(spy).toHaveBeenCalledWith('1. ROCK')
    expect(spy).toHaveBeenCalledWith('2. PAPER')
    expect(spy).toHaveBeenCalledWith('3. SCISSOR')

    expect(actual).toBe(UserChoice.ROCK)
  })

  test('should return the correct UserChoice Paper', async() => {
    rl.getUserInput = jest.fn().mockResolvedValue('2')

    const actual = await sut.chooseHand()

    expect(spy).toHaveBeenCalledWith('1. ROCK')
    expect(spy).toHaveBeenCalledWith('2. PAPER')
    expect(spy).toHaveBeenCalledWith('3. SCISSOR')

    expect(actual).toBe(UserChoice.PAPER)
  })

  test('should return the correct UserChoice Scissor', async() => {
    rl.getUserInput = jest.fn().mockResolvedValue('3')

    const actual = await sut.chooseHand()

    expect(spy).toHaveBeenCalledWith('1. ROCK')
    expect(spy).toHaveBeenCalledWith('2. PAPER')
    expect(spy).toHaveBeenCalledWith('3. SCISSOR')

    expect(actual).toBe(UserChoice.SCISSOR)
  })

  const setUpResultTest = () => {
    const handGestureFactory = new HandGestureFactory()
    player = new Player('Player', handGestureFactory)
    computer = new ComputerPlayer(handGestureFactory)
  }

  test('Should print out the winner Player', () => {
    setUpResultTest()
    player.setHandGuesture(UserChoice.ROCK)
    computer.setHandGuesture(UserChoice.SCISSOR)

    const gameResult = GameResult.PLAYER

    sut.showResult(gameResult, player, computer)

    expect(spy).toHaveBeenCalled()

    expect(spy).toHaveBeenCalledWith('Player Wins!')
  })

  test('Should print out the winner Computer', () => {
    setUpResultTest()
    player.setHandGuesture(UserChoice.SCISSOR)
    computer.setHandGuesture(UserChoice.ROCK)

    const gameResult = GameResult.COMPUTER

    sut.showResult(gameResult, player, computer)
    
    expect(spy).toHaveBeenCalled()

    expect(spy).toHaveBeenCalledWith('Computer Wins!')
  })

  test('Should print out the Tie', () => {
    setUpResultTest()
    player.setHandGuesture(UserChoice.SCISSOR)
    computer.setHandGuesture(UserChoice.SCISSOR)

    const gameResult = GameResult.TIE

    sut.showResult(gameResult, player, computer)
    
    expect(spy).toHaveBeenCalled()

    expect(spy).toHaveBeenCalledWith('Its a TIE!')
  })

  test('Should print out Player hand', () => {
    setUpResultTest()
    player.setHandGuesture(UserChoice.ROCK)
    computer.setHandGuesture(UserChoice.SCISSOR)

    player.getHandGuesture = jest.fn().mockReturnValue(UserChoice.ROCK)

    const gameResult = GameResult.PLAYER

    sut.showResult(gameResult, player, computer)
    
    expect(spy).toHaveBeenCalled()

    expect(spy).toHaveBeenCalledWith('Player: ROCK')
  })

  test('Should print out Computer hand', () => {
    setUpResultTest()
    player.setHandGuesture(UserChoice.ROCK)
    computer.setHandGuesture(UserChoice.SCISSOR)

    player.getHandGuesture = jest.fn().mockReturnValue(UserChoice.ROCK)

    const gameResult = GameResult.PLAYER

    sut.showResult(gameResult, player, computer)
    
    expect(spy).toHaveBeenCalled()

    expect(spy).toHaveBeenCalledWith('Computer: Scissor')
  })
})