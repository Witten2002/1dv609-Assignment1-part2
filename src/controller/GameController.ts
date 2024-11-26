import { UserChoice } from '../model/enums/UserChoice.js'
import { Game } from '../model/Game.js'
import { GameView } from '../view/GameView.js'

class GameController {
  #view

  constructor( view: GameView) {
    this.#view = view
  }

  start() {

  }
}

export { GameController }