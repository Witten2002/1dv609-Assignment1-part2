import { UserChoice } from '../enums/UserChoice.ts'
import { HandGuesture } from '../HandGesture/HandGesture.ts'
import { Rock } from '../HandGesture/Rock.ts'
import { Paper } from '../HandGesture/Paper.ts'
import { Scissor } from '../HandGesture/Scissor.ts'

class HandGestureFactory {
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
