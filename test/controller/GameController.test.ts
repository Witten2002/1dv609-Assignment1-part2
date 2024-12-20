import { GameController } from '../../src/controller/GameController'
import { UserChoice } from '../../src/model/enums/UserChoice'
import { GameView } from '../../src/view/GameView'
import { Game } from '../../src/model/Game'
import { Menu } from '../../src/model/enums/Menu'
import { ReadLineAdapter } from '../../src/adapters/ReadLineAdapter'


jest.mock('../../src/view/GameView', () => {
  return {
    GameView: jest.fn().mockImplementation(function () {
      this.startGameMessage = jest.fn()
      this.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
      this.showResult = jest.fn()
      this.askRestart = jest.fn()
      this.exitGame = jest.fn()
    })
  }
})

jest.mock('../../src/model/Game', () => {
  return {
    Game: jest.fn().mockImplementation(() => {
      return {
        startGame: jest.fn(),
        getPlayer: jest.fn(),
        getComputerPlayer: jest.fn(),
        deternimateWinner: jest.fn()
      }
    })
  }
})

jest.mock('../../src/adapters/ReadLineAdapter', () => {
  return {
    ReadLineAdapter: jest.fn().mockImplementation(function () {
      this.getUserInput = jest.fn()
    })
  }
})

describe('GameController Under Test', () => {
  let view: GameView
  let sut: GameController
  let game: Game
  let rl: ReadLineAdapter

  beforeEach(() => {
    rl = new ReadLineAdapter()
    view = new GameView(rl)
    game = new Game()
    sut = new GameController(view, game)
    rl.getUserInput = jest.fn().mockResolvedValue('Rock')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should initzalize a view', () => {
    expect(sut).toBeDefined()
  })

  test('Should call startGameMessage on view when initzialized', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    
    const spy = jest.spyOn(view, 'startGameMessage')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.startGameMessage).toHaveBeenCalled()
  })

  test('Should call the method chooseHand on view when initzialized', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    
    const spy = jest.spyOn(view, 'chooseHand')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.chooseHand).toHaveBeenCalled()
  })

  
  test('Should call the method startGame on Game with correct arguments', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    
    const spy = jest.spyOn(game, 'startGame')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(game.startGame).toHaveBeenCalledWith(UserChoice.ROCK)
  })

  test('Should call the method getPlayer on Game ', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    
    const spy = jest.spyOn(game, 'getPlayer')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(game.getPlayer).toHaveBeenCalled()
  })

  test('Should call the method getComputerPlayer on Game ', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    
    const spy = jest.spyOn(game, 'getComputerPlayer')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(game.getComputerPlayer).toHaveBeenCalled()
  })  

  test('Should call the method determinateWinner on Game', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    
    const spy = jest.spyOn(game, 'deternimateWinner')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(game.deternimateWinner).toHaveBeenCalled()
  })

  test('Should call the method showResult on view', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    
    const spy = jest.spyOn(view, 'showResult')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.showResult).toHaveBeenCalled()
  })

  
  test('Should call the method askRestart on view', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)

    const spy = jest.spyOn(view, 'askRestart')

    await sut.start()

    expect(spy).toHaveBeenCalled()

    expect(view.askRestart).toHaveBeenCalled()
  })

  test('Should call the method start on gameController when user want to restart', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.RESTART).mockReturnValueOnce(Menu.QUIT)
    const spy = jest.spyOn(sut, 'start')

    await sut.start()

    expect(spy).toHaveBeenCalledTimes(1)

    expect(view.askRestart).toHaveBeenCalled()
  })

  test('Should not call the method start on gameController when user want to quit', async () => {
    view.chooseHand = jest.fn().mockReturnValue(UserChoice.ROCK)
    view.askRestart = jest.fn().mockReturnValueOnce(Menu.QUIT)
    const spy = jest.spyOn(sut, 'start')

    await sut.start()

    expect(spy).toHaveBeenCalledTimes(1)

    expect(view.askRestart).toHaveBeenCalled()
  })
})
