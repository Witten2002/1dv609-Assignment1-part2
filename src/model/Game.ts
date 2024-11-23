import { Player } from './Player.js'
import { ComputerPlayer } from './ComputerPlayer.js'
import { GameResult } from './enums/GameResult.js'

class Game {
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