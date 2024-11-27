import { ReadLine } from 'readline'
import { UserChoice } from '../model/enums/UserChoice.js'

class GameView {
  constructor(readline: ReadLine) {
    // skapa en adapter för readLine
    // I testerna ska jag sedan mocka den för att kunna fippla med den.
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

    // standard value if user dont enter a value
    const [,, answer = 'Rock' ] = process.argv
    
    if (answer === 'Rock') {
      return UserChoice.ROCK
    } else if (answer === 'Paper') {
      return UserChoice.PAPER
    } else if (answer === 'Scissor') {
      return UserChoice.SCISSOR
    }
  }

  showResult() {

  }

  askRestart() {
    
  }
}

export { GameView }