import { HandGuesture } from './HandGesture/HandGesture.ts'
import { HandGestureFactory } from './Factory/HandGuestureFactory.ts'
import { UserChoice } from './enums/UserChoice.ts'

class Player {
  #handGuesutre: HandGuesture
  #factory: HandGestureFactory

  constructor() {
    this.#factory = new HandGestureFactory()
  }

  setHandGuesture(userChoice: UserChoice) {
    this.#handGuesutre = this.#factory.createHandGuesture(userChoice)
  }

  getHandGuesture(): HandGuesture {
    return this.#handGuesutre;
  }
}

export { Player }