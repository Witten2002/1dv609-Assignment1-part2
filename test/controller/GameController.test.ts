import { GameController } from '../../src/controller/GameController'
import { GameView } from '../../src/view/GameView'

describe('GameController Under Test', () => {
  let sut: GameController

  beforeAll(() => {
    const view = new GameView()
    sut = new GameController(view)
  })

  test('Should start a game', () => {
    expect(() => {
      sut.start()
    }).not.toThrow()
  })
})