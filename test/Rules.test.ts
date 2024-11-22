import { Rules } from '../src/model/Rules.ts'
import { Player } from '../src/model/Player.ts'
import { ComputerPlayer } from '../src/model/ComputerPlayer.ts'
import { UserChoice } from '../src/model/enums/UserChoice.ts'
import { GameResult } from '../src/model/enums/GameResult.ts'
import { Rock } from '../src/model/HandGesture/Rock.ts'
import { Scissor } from '../src/model/HandGesture/Scissor.ts'

jest.mock('../src/model/Player.ts', () => {
  return {
    Player: jest.fn().mockImplementation(function (name: string) {
      this.name = name;
      this.getHandGuesture = jest.fn();
      this.setHandGuesture = jest.fn();
      this.beats = jest.fn(); // Add beats as a method
    }),
  };
});


jest.mock('../src/model/ComputerPlayer.ts', () => {
  return {
    ComputerPlayer: jest.fn().mockImplementation(function () {
      Player.call(this, 'ComputerPlayer'); // Call the mocked Player constructor
      this.setHandGuesture = jest.fn();
    }),
  };
});


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

  test('Test Its a Tie! Computer: Rock. Player: Rock', () => {
    player.getHandGuesture = jest.fn().mockReturnValue(new Rock())
    computerPlayer.getHandGuesture = jest.fn().mockReturnValue(new Rock())

    const spy = jest.spyOn(sut, 'deternimateWinner')

    const actual = sut.deternimateWinner(player, computerPlayer)
    const expected = GameResult.TIE

    expect(spy).toHaveBeenCalled()
    expect(player.getHandGuesture).toHaveBeenCalled()
    expect(computerPlayer.getHandGuesture).toHaveBeenCalled()
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

  test('Test Computer wins with a Scissor. Player: Paper', () => {
    player.setHandGuesture(UserChoice.PAPER)
    computerPlayer.setHandGuesture(UserChoice.SCISSOR)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.COMPUTER

    expect(actual).toBe(expected)
  })

  test('Test Its a Tie! Computer: Paper. Player: Paper', () => {
    player.setHandGuesture(UserChoice.PAPER)
    computerPlayer.setHandGuesture(UserChoice.PAPER)

    const actual = sut.deternimateWinner(player, computerPlayer)

    const expected = GameResult.TIE

    expect(actual).toBe(expected)
  })

  // // Tydligen är det såhär jag ska göra när jag arbetar med mockade saker just nu.
  // test('Player hand beats Computer hand (Rock vs Scissor)', () => {
  //   // Mocking `getHandGuesture` to return Rock for Player and Scissor for Computer
  //   player.getHandGuesture = jest.fn().mockReturnValue(new Rock())
  //   computerPlayer.getHandGuesture = jest.fn().mockReturnValue(new Scissor())

  //   const result = sut.deternimateWinner(player, computerPlayer)

  //   expect(result).toBe(GameResult.PLAYER) // Rock beats Scissor
  //   expect(player.getHandGuesture).toHaveBeenCalled()
  //   expect(computerPlayer.getHandGuesture).toHaveBeenCalled()
  // })
})