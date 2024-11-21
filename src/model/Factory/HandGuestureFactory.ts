import { UserChoice } from '../enums/UserChoice.ts'
import { HandGuesture } from '../HandGesture/HandGesture.ts'
import { Rock } from '../HandGesture/Rock.ts'
import { Paper } from '../HandGesture/Paper.ts'
import { Scissor } from '../HandGesture/Scissor.ts'

/**
 * Factory class for creating instances of HandGesture based on user choice.
 */
class HandGestureFactory {
  /**
   * Creates an instance of a HandGesture based on the user's choice.
   *
   * @param {UserChoice} userChoice - The user's choice of hand gesture.
   * @returns {HandGesture} An instance of the corresponding HandGesture (Rock, Paper, or Scissor).
   */
  createHandGuesture(userChoice: UserChoice): HandGuesture {
    switch (userChoice) {
      case UserChoice.ROCK:
        return new Rock()
      case UserChoice.PAPER: 
        return new Paper()
      case UserChoice.SCISSOR:
        return new Scissor()
    }
  }
}

export { HandGestureFactory }
