import { Rules } from '../src/model/Rules.ts'
import { Player } from '../src/model/Player.ts'
import { ComputerPlayer } from '../src/model/ComputerPlayer.ts'
import { UserChoice } from '../src/model/enums/UserChoice.ts'
import { GameResult } from '../src/model/enums/GameResult.ts'

describe('Rules Under Test', () => {
  let sut: Rules
  let player: Player
  let computerPlayer: ComputerPlayer

  beforeEach(() => {
    sut = new Rules()
    player = new Player('Player')
    computerPlayer = new ComputerPlayer()
  })

  test('Test Player wins with a Rock. Computer: Scissor', () => {
    player.setHandGuesture(UserChoice.ROCK)
    computerPlayer.setHandGuesture(UserChoice.SCISSOR)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })
})