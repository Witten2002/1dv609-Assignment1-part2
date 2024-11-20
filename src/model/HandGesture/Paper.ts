import { HandGuesture } from './HandGesture.ts'
import { Rock } from './Rock.ts'

class Paper implements HandGuesture {
  /**
   * Will return true if the HandGuesture Win over another Guesture.
   *
   * @param {HandGuesture} handGesture The Hand Guesture to check against.
   * @returns {boolen} If this HandGuesture can bean the argument Guesture,
   */
  beats(handGesture: HandGuesture) {
    if (handGesture instanceof Rock) {
      return true
    }

    return false
  }
}

export { Paper }