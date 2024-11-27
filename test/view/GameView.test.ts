import { Game } from '../../src/model/Game'
import { GameView } from '../../src/view/GameView'
import * as readline from 'readline';

jest.mock('readline', () => {
  return {
    createInterface: jest.fn().mockImplementation(() => {
      return {
        question: jest.fn(),
        close: jest.fn()
      }
    })
  }
})

describe('GameView Under Test', () => {
  let sut: GameView
  let spy
  let rl: readline.Interface

  beforeAll(() => {
    sut = new GameView()
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
    await sut.chooseHand()

    expect(spy).toHaveBeenCalledWith('1. ROCK')
    expect(spy).toHaveBeenCalledWith('2. PAPER')
    expect(spy).toHaveBeenCalledWith('3. SCISSOR')
  })

  test('should promt all different gestures', async() => {
    await sut.chooseHand()

    expect(spy).toHaveBeenCalledWith('1. ROCK')
    expect(spy).toHaveBeenCalledWith('2. PAPER')
    expect(spy).toHaveBeenCalledWith('3. SCISSOR')
  })
})