import { Menu } from '../model/enums/Menu.js'
import { Game } from '../model/Game.js'
import { GameView } from '../view/GameView.js'

/**
 * GameController for the Rock Paper Scissor Game.
 */
class GameController {
  #view
  #game

  constructor( view: GameView, game: Game) {
    this.#view = view
    this.#game = game
  }

  /**
   * Asks the user to choose a hand gesture.
   * Start a new game with the choosen gesture.
   * Write out the winner and the hands.
   * Asks if the user want to play again or quit.
   */
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
  
        if (userWants === Menu.QUIT) {
  
          this.#view.exitGame()
  
          menuLoop = false
        }
      } while (!userWants)
    }
  }
}

export { GameController }