export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.direction = 'Horizontal'
    this.isSunk = false
  }

  isShipSunk() {
    if(this.hits >= this.length)
      this.isSunk = true;
  }

  hit() {
    this.hits++;
    this.isShipSunk();
  }
}