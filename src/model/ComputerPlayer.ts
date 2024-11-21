import { UserChoice } from './enums/UserChoice.ts'
import { Player } from './Player.ts'

class ComputerPlayer extends Player {
  constructor() {
    super('ComputerPlayer')
  }

  generateRandomHandGesture(): void {
    this.setHandGuesture(UserChoice.ROCK)
  }
  
}

export { ComputerPlayer }
