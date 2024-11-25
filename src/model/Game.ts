import { Player } from './Player.js'
import { ComputerPlayer } from './ComputerPlayer.js'
import { GameResult } from './enums/GameResult.js'
import { HandGestureFactory } from './Factory/HandGuestureFactory.js'
import { UserChoice } from './enums/UserChoice.js'

class Game {
  #player: Player
  #computerPlayer: ComputerPlayer

  constructor() {
    const handGestureFactory = new HandGestureFactory()
    this.#player = new Player('Player 1', handGestureFactory)
    this.#computerPlayer = new ComputerPlayer(handGestureFactory)
  }

  startGame(playerChoice: UserChoice) {
    return playerChoice
  }

  deternimateWinner(player: Player, computerPlayer: ComputerPlayer) {
    const playerHand = player.getHandGuesture()
    const computerHand = computerPlayer.getHandGuesture()

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