import { UserChoice } from "../enums/UserChoice.js"

interface HandGuesture {
  type: UserChoice
  beats(handGuesture: HandGuesture): Boolean
}

export { HandGuesture }