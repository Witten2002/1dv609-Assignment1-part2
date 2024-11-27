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
    let menuLoop = true
    let playerChoice
    let userWants

    while (menuLoop) {
      do {
        this.#view.startGameMessage()
        playerChoice = await this.#view.chooseHand()
      } while (!playerChoice)
  
      this.#game.startGame(playerChoice)
      const result = this.#game.deternimateWinner()
  
      const player = this.#game.getPlayer()
      const computer = this.#game.getComputerPlayer()
  
      this.#view.showResult(result, player, computer)
  
      
      do {
        userWants = await this.#view.askRestart()

        console.log(userWants)
  
        if (userWants === Menu.QUIT) {
  
          this.#view.exitGame()
  
          menuLoop = false
        }
      } while (!userWants)
    }
  }
}

export { GameController }