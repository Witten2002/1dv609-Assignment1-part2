import { HandGuesture } from './HandGesture/HandGesture.ts'
import { Rock } from './HandGesture/Rock.ts'

class Player {
  #handGuesutre

  setHandGuesture(handGuesture: HandGuesture) {
    this.#handGuesutre
  }

  getHandGuesture(): HandGuesture {
    return this.#handGuesutre;
  }
}

export { Player }