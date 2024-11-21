import { HandGuesture } from './HandGesture/HandGesture.ts'
import { HandGestureFactory } from './Factory/HandGuestureFactory.ts'
import { UserChoice } from './enums/UserChoice.ts'

class Player {
  #handGuesutre: HandGuesture
  #factory: HandGestureFactory
  #name: String

  constructor(name: String) {
    this.#setName(name)
    this.#factory = new HandGestureFactory()
  }

  #setName(name: String) {
    this.#name = name
  }

  getName(): String {
    return this.#name
  }
  setHandGuesture(userChoice: UserChoice) {
    this.#handGuesutre = this.#factory.createHandGuesture(userChoice)
  }

  getHandGuesture(): HandGuesture {
    return this.#handGuesutre;
  }
}

export { Player }