import { UserChoice } from '../model/enums/UserChoice.js'
import { ReadLineAdapter } from '../adapters/ReadLineAdapter.js'

class GameView {
  #rl

  constructor(readline: ReadLineAdapter) {
    this.#rl = readline
  }

  #clearConsole() {
    console.clear()
  }

  startGameMessage() {
    this.#clearConsole()

    console.log('Welcome To Rock, Paper, Scissor Game')
  }

  async chooseHand() {
    const gestures = Array.from(Object.values(UserChoice))

    for (let i = 0; i < gestures.length; i++) {
      let index = i
      index++

      console.log(`${index}. ${gestures[i]}`)
    }

    const answer = await this.#rl.getUserInput()

    console.log(typeof answer)
    
    if (answer === '1') {
      return UserChoice.ROCK
    } else if (answer === '2') {
      return UserChoice.PAPER
    } else if (answer === '3') {
      return UserChoice.SCISSOR
    }
  }

  showResult() {

  }

  askRestart() {
    
  }
}

export { GameView }