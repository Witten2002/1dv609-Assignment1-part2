import { Menu } from '../model/enums/Menu.js'
import { UserChoice } from '../model/enums/UserChoice.js'
import { Game } from '../model/Game.js'
import { GameView } from '../view/GameView.js'
import { ReadLineAdapter } from '../adapters/ReadLineAdapter.js'

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
    const playerChoice = await this.#view.chooseHand()

    this.#game.startGame(playerChoice)
    const result = this.#game.deternimateWinner()

    const player = this.#game.getPlayer()
    const computer = this.#game.getComputerPlayer()

    this.#view.showResult(result, player, computer)

    userWants = await this.#view.askRestart()

    if (userWants === Menu.RESTART) {
      console.log('RESTART')
      this.start()
    } else if (userWants === Menu.QUIT) {
      this.#view.exitGame()
      return 
    }
  }
}

export { GameController }