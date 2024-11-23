import { UserChoice } from '../enums/UserChoice.js'
import { Rules } from '../Rules.js'
import { HandGuesture } from './HandGesture.js'
import { Paper } from './Paper.js'

class Scissor implements HandGuesture {
  type: UserChoice

  constructor() {
    this.type = UserChoice.SCISSOR
  }

  /**
   * Will return true if the HandGuesture Win over another Guesture.
   *
   * @param {HandGuesture} other The Hand Guesture to check against.
   * @returns {boolen} If this HandGuesture can bean the argument Guesture,
   */
  beats(other: HandGuesture) {
    return new Rules().compareGestures(this, other)
  }
}

export { Scissor }