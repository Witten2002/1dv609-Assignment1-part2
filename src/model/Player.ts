import { HandGuesture } from './HandGesture/HandGesture.ts'
import { Rock } from './HandGesture/Rock.ts'
import { Paper } from './HandGesture/Paper.ts'
import { Scissor } from './HandGesture/Scissor.ts'

class Player {
  #handGuesutre: HandGuesture

  setHandGuesture(handGuesture: HandGuesture) {
    if (handGuesture instanceof Rock) {
      this.#handGuesutre = new Rock()
    } else if (handGuesture instanceof Paper) {
      this.#handGuesutre = new Paper()
    } else {
      this.#handGuesutre = new Scissor()
    }
  }

  getHandGuesture(): HandGuesture {
    return this.#handGuesutre;
  }
}

export { Player }