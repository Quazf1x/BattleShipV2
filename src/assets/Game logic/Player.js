import Gameboard from "./Gameboard.js";

export default class Player {
  constructor(name) {
    this.board = new Gameboard();
    this.name = name;
  }
}
