import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

class ReadLineAdapter {
  #rl
  
  constructor() {
    this.#createInterface()
  }

  #createInterface() {
    this.#rl = readline.createInterface({ input, output})
  }

  async getUserInput() {
    if (!this.#rl) {
      this.#createInterface()
    }

    const answer = await this.#rl.question('Enter a value: ')

    return answer
  }

  exitGame() {
    this.#rl.close()
  }
}

export { ReadLineAdapter }