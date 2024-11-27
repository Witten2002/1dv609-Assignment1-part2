import { GameView } from '../../src/view/GameView'
import { ReadLineAdapter } from '../../src/adapters/ReadLineAdapter'

jest.mock('../../src/adapters/ReadLineAdapter', () => {
  return {
    ReadLineAdapter: jest.fn().mockImplementation(function () {
      this.getUserInput = jest.fn()
    })
  }
})

describe('GameView Under Test', () => {
  let sut: GameView
  let spy
  let rl: ReadLineAdapter

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
})