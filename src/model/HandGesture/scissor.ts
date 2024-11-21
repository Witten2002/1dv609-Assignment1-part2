import { HandGuesture } from './HandGesture.js'
import { Paper } from './Paper.ts'

class Scissor implements HandGuesture {
  /**
   * Will return true if the HandGuesture Win over another Guesture.
   *
   * @param {HandGuesture} handGesture The Hand Guesture to check against.
   * @returns {boolen} If this HandGuesture can bean the argument Guesture,
   */
  beats(handGesture: HandGuesture) {
    if (handGesture instanceof Paper) {
      return true
    }

    return false
  }
}

export { Scissor }