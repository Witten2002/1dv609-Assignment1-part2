import { ComputerPlayer } from "./model/ComputerPlayer.js";
import { UserChoice } from "./model/enums/UserChoice.js";
import { HandGestureFactory } from "./model/Factory/HandGuestureFactory.js";
import { Game } from "./model/Game.js";
import { Paper } from "./model/HandGesture/Paper.js";
import { Rock } from "./model/HandGesture/Rock.js";
import { Scissor } from "./model/HandGesture/Scissor.js";
import { Player } from "./model/Player.js";
import { Rules } from './model/Rules.js'


const paper = new Paper()
const rock = new Rock()
const scissor = new Scissor()

const rules = new Rules () 

// const result = rock.beats(scissor)

const game = new Game()
const player = new Player('player 1', new HandGestureFactory())
const computer = new ComputerPlayer(new HandGestureFactory())

player.setHandGuesture(UserChoice.ROCK)
computer.generateRandomHandGesture()

const result = game.deternimateWinner(player, computer)
