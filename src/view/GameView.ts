import { UserChoice } from "../model/enums/UserChoice.js"

class GameView {
  #clearConsole() {

  }

  startGameMessage() {
    this.#clearConsole()

    console.log('Welcome To Rock, Paper, Scissor Game. Choose what gesture you want to use')
  }

  chooseHand() {
    const gestures = Array.from(Object.values(UserChoice))

    for (let i = 0; i < gestures.length; i++) {
      let index = i
      index++

      console.log(`${index}. ${gestures[i]}`)
    }
  }

  showResult() {

  }

  askRestart() {
    
  }
}

export { GameView }