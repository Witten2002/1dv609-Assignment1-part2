import { HandGuesture } from './HandGesture/HandGesture.ts'
import { Rock } from './HandGesture/Rock.ts'
import { Player } from './Player.ts'

class ComputerPlayer extends Player {
  constructor() {
    super('ComputerPlayer')
  }

  generateRandomHandGesture(): HandGuesture {
    return new Rock()
  }
}

export { ComputerPlayer }
