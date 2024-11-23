import { UserChoice } from './enums/UserChoice.ts'
import { Player } from './Player.ts'
import { HandGestureFactory } from './Factory/HandGuestureFactory.ts'

class ComputerPlayer extends Player {
  constructor(handgestureFactory: HandGestureFactory) {
    super('ComputerPlayer', handgestureFactory)
  }

  generateRandomHandGesture(): void {
    const userChoices = Object.values(UserChoice).filter(value => typeof value === 'number') as UserChoice[];
    const random = Math.floor(Math.random() * userChoices.length)

    const computerChoice = userChoices[random]

    this.setHandGuesture(computerChoice)
  }
}

export { ComputerPlayer }
