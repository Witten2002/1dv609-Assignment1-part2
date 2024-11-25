import { UserChoice } from './enums/UserChoice.js'

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
