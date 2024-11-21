import { HandGuesture } from './HandGesture/HandGesture.ts'
import { HandGestureFactory } from './Factory/HandGuestureFactory.ts'
import { UserChoice } from './enums/UserChoice.ts'

class Player {
  #handGuesutre: HandGuesture
  #factory: HandGestureFactory
  #name: string

  constructor(name: string) {
    this.#setName(name)
    this.#factory = new HandGestureFactory()
  }

  #setName(name: string) {
    if (!this.#isValidName(name)) {
      throw new Error('Invalid name');
    }

    this.#name = name
  }

  #isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    return name.length > 0 && nameRegex.test(name);
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