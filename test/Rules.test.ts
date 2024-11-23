import { Rules } from '../src/model/Rules.ts'
import { Player } from '../src/model/Player.ts'
import { ComputerPlayer } from '../src/model/ComputerPlayer.ts'
import { GameResult } from '../src/model/enums/GameResult.ts'
import { Rock } from '../src/model/HandGesture/Rock.ts'
import { Scissor } from '../src/model/HandGesture/Scissor.ts'
import { Paper } from '../src/model/HandGesture/Paper.ts'

jest.mock('../src/model/Player.ts', () => {
  return {
    Player: jest.fn().mockImplementation(function (name: string) {
      this.name = name;
      this.getHandGuesture = jest.fn()
      this.setHandGuesture = jest.fn()
      this.beats = jest.fn()
    }),
  }
})

jest.mock('../src/model/ComputerPlayer.ts', () => {
  return {
    ComputerPlayer: jest.fn().mockImplementation(function () {
      Player.call(this, 'ComputerPlayer')
      this.setHandGuesture = jest.fn()
    }),
  }
})

describe('Rules Under Test', () => {
  let sut: Rules
  let player: Player
  let computerPlayer: ComputerPlayer

  beforeEach(() => {
    sut = new Rules()
    player = new Player('Player')
    computerPlayer = new ComputerPlayer()

    jest.clearAllMocks()
  })

  const setUpTest = (playerHandGesture, computeHandGesture) => {
    player.getHandGuesture = jest.fn().mockReturnValue(playerHandGesture)
    computerPlayer.getHandGuesture = jest.fn().mockReturnValue(computeHandGesture)
  
    const spy = jest.spyOn(sut, 'deternimateWinner')
  
    const actual = sut.deternimateWinner(player, computerPlayer)
  
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
})