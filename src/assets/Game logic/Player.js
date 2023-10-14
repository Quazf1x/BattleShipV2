import Gameboard from "./gameboard";

export default class Player {
  constructor(name) {
    this.board = new Gameboard;
    this.name = name;
  }
}