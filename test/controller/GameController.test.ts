import { GameController } from '../../src/controller/GameController'
import { GameView } from '../../src/view/GameView'
import { Game } from '../../src/model/Game'
import { UserChoice } from '../../src/model/enums/UserChoice'

jest.mock('../../src/view/GameView')

describe('GameController Under Test', () => {
  let sut: GameController

  beforeAll(() => {
    const view = new GameView()
    sut = new GameController(view)
  })

  test('Should initzalize a view', () => {
    expect(sut).toBeDefined()
  })
})
