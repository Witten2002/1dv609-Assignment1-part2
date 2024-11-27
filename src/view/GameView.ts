import { UserChoice } from '../model/enums/UserChoice.js'
import { ReadLineAdapter } from '../adapters/ReadLineAdapter.js'
import { GameResult } from '../model/enums/GameResult.js'
import { ComputerPlayer } from '../model/ComputerPlayer.js'
import { Player } from '../model/Player.js'
import { Menu } from '../model/enums/Menu.js'

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
    
    if (answer === '1') {
      return UserChoice.ROCK
    } else if (answer === '2') {
      return UserChoice.PAPER
    } else if (answer === '3') {
      return UserChoice.SCISSOR
    }
  }

  showResult(gameResult: GameResult, player: Player, computer: ComputerPlayer) {
    this.#clearConsole()

    const playerHand = player.getHandGuesture()
    const computerHand = computer.getHandGuesture()
    
    if (gameResult === GameResult.PLAYER) {
      console.log('Player Wins!')
    } else if (gameResult === GameResult.COMPUTER) {
      console.log('Computer Wins!')
    } else {
      console.log('Its a TIE!')
    }

    console.log(`Player: ${playerHand}`)
    console.log(`Computer: ${computerHand}`)
  }

  async askRestart() {
    console.log('Do you want to player again or quit?')
    console.log('1. Play again!')
    console.log('0. Exit')

    const answer = await this.#rl.getUserInput()

    if (answer === '1') {
      return Menu.RESTART
    } else if (answer === '0') {
      return Menu.QUIT
    }
  }

  exitGame() {
    console.log('Good Bye!')

    this.#rl.exitGame()
  }
}

export { GameView }