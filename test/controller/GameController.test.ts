import { GameController } from '../../src/controller/GameController'
import { UserChoice } from '../../src/model/enums/UserChoice'
import { GameView } from '../../src/view/GameView'
import { Game } from '../../src/model/Game'


jest.mock('../../src/view/GameView', () => {
  return {
    GameView: jest.fn().mockImplementation(function () {
      this.startGameMessage = jest.fn()
      this.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    })
  }
})

jest.mock('../../src/model/Game', () => {
  return {
    Game: jest.fn().mockImplementation(() => {
      return {
        startGame: jest.fn(),
        getPlayerHand: jest.fn(),
        deternimateWinner: jest.fn()
      }
    })
  }
})

describe('GameController Under Test', () => {
  let view: GameView
  let sut: GameController
  let game: Game

  beforeAll(() => {
    view = new GameView()
    game = new Game()
    sut = new GameController(view, game)
  })

  test('Should initzalize a view', () => {
    expect(sut).toBeDefined()
  })

  test('Should call startGameMessage on view when initzialized', () => {
    const spy = jest.spyOn(view, 'startGameMessage')

    sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.startGameMessage).toHaveBeenCalled()
  })

  test('Should call the method chooseHand on view when initzialized', () => {
    const spy = jest.spyOn(view, 'chooseHand')

    sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.chooseHand).toHaveBeenCalled()
  })

  
  test('Should call the method startGame on Game with correct arguments', () => {
    const spy = jest.spyOn(game, 'startGame')

    sut.start()

    expect(spy).toHaveBeenCalled()

    expect(game.startGame).toHaveBeenCalledWith(UserChoice.ROCK)
  })

  test('Should call the method determinateWinner on Game', () => {
    const spy = jest.spyOn(game, 'deternimateWinner')

    sut.start()

    expect(spy).toHaveBeenCalled()

    expect(game.deternimateWinner).toHaveBeenCalled()
  })
})
