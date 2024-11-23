import { Player } from './Player.ts'
import { ComputerPlayer } from './ComputerPlayer.ts'
import { GameResult } from './enums/GameResult.ts'

class Rules {
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

export { Rules }
