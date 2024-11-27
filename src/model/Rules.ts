import { UserChoice } from './enums/UserChoice.js'

class Rules {

  /**
   * The rules of the game.
   * This will choose who wins over who.
   * 
   * @param handGesture One players hand gesture.
   * @param other  The other player hand gesture.
   * 
   * @returns The boolean value if the handgesture beats the other one or not. 
   */
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
