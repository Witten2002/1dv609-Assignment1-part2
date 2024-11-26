import { Game } from '../../src/model/Game'
import { GameView } from '../../src/view/GameView'

describe('GameView Under Test', () => {
  let sut: GameView
  let spy

  beforeAll(() => {
    sut = new GameView()
    spy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should send a welcome Message', () => {
    sut.startGameMessage()

    expect(spy).toHaveBeenCalledWith('Welcome To Rock, Paper, Scissor Game. Choose what gesture you want to use')
  })
})