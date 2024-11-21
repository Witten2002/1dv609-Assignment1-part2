import { Player } from './Player.ts'
import { ComputerPlayer } from './ComputerPlayer.ts'
import { GameResult } from './enums/GameResult.ts'

class Rules {
  deternimateWinner(player: Player, computerPlayer: ComputerPlayer) {
    return GameResult.PLAYER
  }
}

export { Rules }