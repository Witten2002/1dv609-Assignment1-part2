import { UserChoice } from './enums/UserChoice.ts'
import { Player } from './Player.ts'

class ComputerPlayer extends Player {
  constructor() {
    super('ComputerPlayer')
  }

  generateRandomHandGesture(): void {
    const userChoices = Object.values(UserChoice).filter(value => typeof value === 'number') as UserChoice[];
    const random = Math.floor(Math.random() * userChoices.length)

    const computerChoice = userChoices[random]

    console.log(computerChoice, typeof computerChoice)

    this.setHandGuesture(computerChoice)
  }
}

export { ComputerPlayer }
