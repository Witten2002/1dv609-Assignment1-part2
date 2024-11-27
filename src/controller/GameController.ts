import { Menu } from '../model/enums/Menu.js'
import { UserChoice } from '../model/enums/UserChoice.js'
import { Game } from '../model/Game.js'
import { GameView } from '../view/GameView.js'

class GameController {
  #view
  #game

  constructor( view: GameView, game: Game) {
    this.#view = view
    this.#game = game
  }

  async start() {
    let userWants = Menu.QUIT

    this.#view.startGameMessage()
    const playerChoice = this.#view.chooseHand()

    this.#game.startGame(playerChoice)
    this.#game.deternimateWinner()

    this.#view.showResult()

    userWants = this.#view.askRestart()

    if (userWants === Menu.RESTART) {
      this.start()
    }
  }
}

export { GameController }