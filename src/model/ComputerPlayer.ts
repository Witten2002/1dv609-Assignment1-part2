import { UserChoice } from './enums/UserChoice.js'
import { Player } from './Player.js'
import { HandGestureFactory } from './Factory/HandGuestureFactory.js'

/**
 * Creates a computer player so the player can play against.
 */
class ComputerPlayer extends Player {
  constructor(handgestureFactory: HandGestureFactory) {
    super('ComputerPlayer', handgestureFactory)
  }

  /**
   * Will create a random handgesture.
   */
  generateRandomHandGesture(): void {
    const userChoices = Object.values(UserChoice) as UserChoice[]
    const random = Math.floor(Math.random() * userChoices.length)

    const computerChoice = userChoices[random]

    this.setHandGuesture(computerChoice)
  }
}

export { ComputerPlayer }
