import { UserChoice } from '../enums/UserChoice.ts'
import { HandGuesture } from '../HandGesture/HandGesture.ts'
import { Rock } from '../HandGesture/Rock.ts'

class HandGestureFactory {
  createHandGuesture(userChoice: UserChoice): HandGuesture {
    return new Rock()
  }
}

export { HandGestureFactory }