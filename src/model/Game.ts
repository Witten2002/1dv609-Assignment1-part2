import { Player } from './Player.js'
import { ComputerPlayer } from './ComputerPlayer.js'
import { GameResult } from './enums/GameResult.js'
import { HandGestureFactory } from './Factory/HandGuestureFactory.js'
import { UserChoice } from './enums/UserChoice.js'

class Game {
  #player: Player
  #computerPlayer: ComputerPlayer

  constructor(player: Player, computerPlayer: ComputerPlayer) {
    this.#player = player
    this.#computerPlayer = computerPlayer
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