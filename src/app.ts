import { ReadLineAdapter } from './adapters/ReadLineAdapter.js'
import { GameController } from './controller/GameController.js'
import { Game } from './model/Game.js'
import { GameView } from './view/GameView.js'

const rl = new ReadLineAdapter()
const view = new GameView(rl)
const game = new Game()
const gameController = new GameController(view, game)

gameController.start()