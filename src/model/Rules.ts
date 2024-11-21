import { Player } from './Player.ts'
import { ComputerPlayer } from './ComputerPlayer.ts'
import { GameResult } from './enums/GameResult.ts'
import { Rock } from './HandGesture/Rock.ts'
import { Paper } from './HandGesture/Paper.ts'

class Rules {
  deternimateWinner(player: Player, computerPlayer: ComputerPlayer) {
    if (player.getHandGuesture() instanceof Rock && computerPlayer.getHandGuesture() instanceof Rock) {
      return GameResult.TIE
    }

    if (player.getHandGuesture() instanceof Rock && computerPlayer.getHandGuesture() instanceof Paper) {
      return GameResult.COMPUTER
    }

    if (player.getHandGuesture() instanceof Rock || player.getHandGuesture() instanceof Paper) {
      return GameResult.PLAYER
    }

    if (computerPlayer.getHandGuesture() instanceof Rock) {
      return GameResult.COMPUTER
    }
  }
}

export { Rules }