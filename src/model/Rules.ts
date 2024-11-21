import { Player } from './Player.ts'
import { ComputerPlayer } from './ComputerPlayer.ts'
import { GameResult } from './enums/GameResult.ts'
import { Rock } from './HandGesture/Rock.ts'
import { Paper } from './HandGesture/Paper.ts'
import { Scissor } from './HandGesture/Scissor.ts'

class Rules {
  deternimateWinner(player: Player, computerPlayer: ComputerPlayer) {
    if (player.getHandGuesture() instanceof Rock && computerPlayer.getHandGuesture() instanceof Rock) {
      return GameResult.TIE
    }

    if (player.getHandGuesture() instanceof Rock && computerPlayer.getHandGuesture() instanceof Paper) {
      return GameResult.COMPUTER
    }

    if (player.getHandGuesture() instanceof Scissor && computerPlayer.getHandGuesture() instanceof Scissor) {
      return GameResult.TIE
    }

    if (player.getHandGuesture() instanceof Rock && computerPlayer.getHandGuesture() instanceof Scissor) {
      return GameResult.PLAYER
    }

    if (player.getHandGuesture() instanceof Scissor && computerPlayer.getHandGuesture() instanceof Paper) {
      return GameResult.PLAYER
    }

    if (player.getHandGuesture() instanceof Paper && computerPlayer.getHandGuesture() instanceof Rock) {
      return GameResult.PLAYER
    }

    if (player.getHandGuesture() instanceof Paper && computerPlayer.getHandGuesture() instanceof Scissor) {
      return GameResult.COMPUTER
    }

    if (computerPlayer.getHandGuesture() instanceof Rock) {
      return GameResult.COMPUTER
    }
  }
}

export { Rules }