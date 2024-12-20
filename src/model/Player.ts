import { HandGuesture } from './HandGesture/HandGesture.js'
import { HandGestureFactory } from './Factory/HandGuestureFactory.js'
import { UserChoice } from './enums/UserChoice.js'

class Player {
  #handGuesutre: HandGuesture
  #factory: HandGestureFactory
  #name: string

  constructor(name: string, handGestureFactory: HandGestureFactory) {
    this.#setName(name)
    this.#factory = handGestureFactory
  }

  #setName(name: string) {
    if (!this.#isValidName(name)) {
      throw new Error('Invalid name')
    }

    this.#name = name
  }

  #isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z0-9 ]+$/
    return name.length > 0 && nameRegex.test(name)
  }

  getName(): String {
    return this.#name
  }

  /**
   * Will create a correct instace of the hand gesture.
   * 
   * @param userChoice The choosen hand gesture.
   */
  setHandGuesture(userChoice: UserChoice) {
    this.#handGuesutre = this.#factory.createHandGuesture(userChoice)
  }

  getHandGuesture(): HandGuesture {
    return this.#handGuesutre
  }
}

export { Player }