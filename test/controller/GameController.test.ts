import { GameController } from '../../src/controller/GameController'
import { GameView } from '../../src/view/GameView'

jest.mock('../../src/view/GameView')

describe('GameController Under Test', () => {
  let view: GameView
  let sut: GameController

  beforeAll(() => {
    view = new GameView()
    sut = new GameController(view)
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
})
