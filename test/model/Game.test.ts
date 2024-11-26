import { Game } from '../../src/model/Game.js'
import { Player } from '../../src/model/Player.js'
import { ComputerPlayer } from '../../src/model/ComputerPlayer.js'
import { GameResult } from '../../src/model/enums/GameResult.js'
import { Rock } from '../../src/model/HandGesture/Rock.js'
import { Scissor } from '../../src/model/HandGesture/Scissor.js'
import { Paper } from '../../src/model/HandGesture/Paper.js'
import { UserChoice } from '../../src/model/enums/UserChoice.js'

describe('Rules Under Test', () => {
  let sut: Game
  let player: Player
  let computerPlayer: ComputerPlayer

  beforeEach(() => {
    sut = new Game()
    player = sut.getPlayer()
    computerPlayer = sut.getComputerPlayer()
  })

  const setUpTest = (playerHandGesture, computeHandGesture) => {
    player.getHandGuesture = jest.fn().mockReturnValue(playerHandGesture)
    computerPlayer.getHandGuesture = jest.fn().mockReturnValue(computeHandGesture)
  
    const spy = jest.spyOn(sut, 'deternimateWinner')
  
    const actual = sut.deternimateWinner()
  
    expect(spy).toHaveBeenCalled()
    expect(player.getHandGuesture).toHaveBeenCalled()
    expect(computerPlayer.getHandGuesture).toHaveBeenCalled()
    

    return actual
  }

  test('Test Its a Tie! Computer: Rock. Player: Rock', () => {
    const actual = setUpTest(new Rock(), new Rock())

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Its a Tie! Computer: Paper. Player: Paper', () => {
    const actual = setUpTest(new Paper(), new Paper())

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Its a Tie! Computer: Scissor. Player: Scissor', () => {  
    const actual = setUpTest(new Scissor(), new Scissor())

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  test('Test Player wins with a Rock. Computer: Scissor', () => {
    const actual = setUpTest(new Rock(), new Scissor())

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player Win with Scissor! Computer: Paper', () => {
    const actual = setUpTest(new Scissor(), new Paper())

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player Win with Paper! Computer: Rock', () => {
    const actual = setUpTest(new Paper(), new Rock())

    const expected = GameResult.PLAYER

    expect(actual).toBe(expected)
  })

  test('Test Player loses with a Rock. Computer: Paper', () => {
    const actual = setUpTest(new Rock(), new Paper())

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Player loses with a Scissor. Computer: Rock', () => {
    const actual = setUpTest(new Scissor(), new Rock())

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Computer wins with a Scissor. Player: Paper', () => {
    const actual = setUpTest(new Paper(), new Scissor())

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Should return the correct player Hand Rock. Also Test StartGame Method', () => {
    sut.startGame(UserChoice.ROCK)

    const playerInstace = sut.getPlayer()

    const actual = playerInstace.getHandGuesture()

    const expected = new Rock()

    expect(actual).toStrictEqual(expected)
  })

  
  test('Should return the correct ComputerPlayer Hand Scissor.', () => {
    sut.startGame(UserChoice.ROCK)

    const actual = sut.deternimateWinner()

    const expected = [GameResult.COMPUTER, GameResult.PLAYER, GameResult.TIE]

    let exist = false

    for (const result of expected) {
      if (result === actual) {
        exist = true
      }
    }

    expect(exist).toBe(true)
  })

  test('Should return the correct ComputerPlayer Hand Scissor.', () => {
    sut.startGame(UserChoice.SCISSOR)

    const computerInstace = sut.getComputerPlayer()

    const actual = computerInstace.getHandGuesture()

    const expected = [new Scissor(), new Rock(), new Paper()]

    let exist = false
    
    for (const result of expected) {
      if (result.type === actual.type) {
        exist = true
      }
    }

    expect(exist).toBe(true)
  })
})