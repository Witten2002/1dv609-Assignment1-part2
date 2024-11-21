import { HandGuesture } from './HandGesture/HandGesture.ts'
import { Rock } from './HandGesture/Rock.ts'
import { Paper } from './HandGesture/Paper.ts'

class Player {
  #handGuesutre: HandGuesture

  setHandGuesture(handGuesture: HandGuesture) {
    if (handGuesture instanceof Rock) {
      this.#handGuesutre = new Rock()
    } else {
      this.#handGuesutre = new Paper()
    }
  }

  getHandGuesture(): HandGuesture {
    return this.#handGuesutre;
  }
}

export { Player }