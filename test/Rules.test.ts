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

  test('Test Its a Tie! Computer: Rock. Player: Rock', () => {
    player.setHandGuesture(UserChoice.ROCK)
    computerPlayer.setHandGuesture(UserChoice.ROCK)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Player wins with a Rock. Computer: Scissor', () => {
    player.setHandGuesture(UserChoice.ROCK)
    computerPlayer.setHandGuesture(UserChoice.SCISSOR)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player loses with a Rock. Computer: Paper', () => {
    player.setHandGuesture(UserChoice.ROCK)
    computerPlayer.setHandGuesture(UserChoice.PAPER)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Player loses with a Scissor. Computer: Rock', () => {
    player.setHandGuesture(UserChoice.SCISSOR)
    computerPlayer.setHandGuesture(UserChoice.ROCK)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Computer wins with a Rock. Player: Scissor', () => {
    player.setHandGuesture(UserChoice.SCISSOR)
    computerPlayer.setHandGuesture(UserChoice.ROCK)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Its a Tie! Computer: Scissor. Player: Scissor', () => {
    player.setHandGuesture(UserChoice.SCISSOR)
    computerPlayer.setHandGuesture(UserChoice.SCISSOR)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Player Win with Scissor! Computer: Paper', () => {
    player.setHandGuesture(UserChoice.SCISSOR)
    computerPlayer.setHandGuesture(UserChoice.PAPER)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player Win with Paper! Computer: Rock', () => {
    player.setHandGuesture(UserChoice.PAPER)
    computerPlayer.setHandGuesture(UserChoice.ROCK)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Computer wins with a Paper. Player: Scissor', () => {
    player.setHandGuesture(UserChoice.PAPER)
    computerPlayer.setHandGuesture(UserChoice.SCISSOR)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })
})