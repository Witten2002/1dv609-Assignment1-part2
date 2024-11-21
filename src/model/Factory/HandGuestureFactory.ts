import { UserChoice } from '../enums/UserChoice.ts'
import { HandGuesture } from '../HandGesture/HandGesture.ts'
import { Rock } from '../HandGesture/Rock.ts'
import { Paper } from '../HandGesture/Paper.ts'

class HandGestureFactory {
  createHandGuesture(userChoice: UserChoice): HandGuesture {
    if (userChoice === UserChoice.ROCK) {
      return new Rock()
    }
    
    return new Paper()
  }
}

export { HandGestureFactory }
