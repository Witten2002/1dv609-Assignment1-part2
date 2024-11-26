import { Player } from './Player.js'
import { ComputerPlayer } from './ComputerPlayer.js'
import { GameResult } from './enums/GameResult.js'
import { UserChoice } from './enums/UserChoice.js'
import { HandGestureFactory } from './Factory/HandGuestureFactory.js'

class Game {
  #player: Player
  #computerPlayer: ComputerPlayer

  constructor() {
    const handGestureFactory = new HandGestureFactory()
    this.#player = new Player('Player 1', handGestureFactory)
    this.#computerPlayer = new ComputerPlayer(handGestureFactory)
  }

  startGame(playerChoice: UserChoice) {
    this.#player.setHandGuesture(playerChoice)
    this.#computerPlayer.generateRandomHandGesture()
  }

  getPlayer() {
    return this.#player
  }

  getComputerPlayer() {
    return this.#computerPlayer
  }

  deternimateWinner() {
    const playerHand = this.#player.getHandGuesture()
    const computerHand = this.#computerPlayer.getHandGuesture()
    
    if (playerHand.beats(computerHand)) {
      return GameResult.PLAYER
    } else if (computerHand.beats(playerHand)) {
      return GameResult.COMPUTER
    } else {
      return GameResult.TIE
    }
  }
}

export { Game }