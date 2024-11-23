import { Player } from './Player.js'
import { ComputerPlayer } from './ComputerPlayer.js'
import { GameResult } from './enums/GameResult.js'
import { HandGuesture } from './HandGesture/HandGesture.js'
import { UserChoice } from './enums/UserChoice.js'
import { Rock } from './HandGesture/Rock.js'
import { Scissor } from './HandGesture/Scissor.js'

class Rules {
  compareGestures(handGesture, other) {
    const rules = {
      [UserChoice.ROCK]: UserChoice.SCISSOR,
      [UserChoice.PAPER]: UserChoice.ROCK,
      [UserChoice.SCISSOR]: UserChoice.PAPER
    }

    return rules[handGesture.type] === other.type
  }
}

export { Rules }
