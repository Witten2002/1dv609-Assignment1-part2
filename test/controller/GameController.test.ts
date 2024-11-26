import { GameController } from '../../src/controller/GameController'
import { UserChoice } from '../../src/model/enums/UserChoice'
import { GameView } from '../../src/view/GameView'
import { Game } from '../../src/model/Game'
import { Menu } from '../../src/model/enums/Menu'


jest.mock('../../src/view/GameView', () => {
  return {
    GameView: jest.fn().mockImplementation(function () {
      this.startGameMessage = jest.fn()
      this.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
      this.showResult = jest.fn()
      this.askRestart = jest.fn()
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

  test('Should call the method showResult on view', () => {
    const spy = jest.spyOn(view, 'showResult')

    sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.showResult).toHaveBeenCalled()
  })

  
  test('Should call the method askRestart on view', () => {
    const spy = jest.spyOn(view, 'askRestart')

    sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.askRestart).toHaveBeenCalled()
  })

  test('Should call the method start on gameController when user want to restart', () => {
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.RESTART)
    const spy = jest.spyOn(sut, 'start')

    sut.start()

    expect(spy).toHaveBeenCalledTimes(2)

    expect(view.askRestart).toHaveBeenCalled()
  })
})
