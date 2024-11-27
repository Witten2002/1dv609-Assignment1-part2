import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

class ReadLineAdapter {
  #rl
  
  constructor() {
    this.#rl = readline.createInterface({ input, output})
  }

  async getUserInput() {
    const answer = await this.#rl.question('Enter a value: ')

    this.#rl.close()

    return answer
  }
}

export { ReadLineAdapter }