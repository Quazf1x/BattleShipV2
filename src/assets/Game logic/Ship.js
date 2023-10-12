export default class Ship {
  constructor(length, direction = 'Horizontal') {
    this.length = length;
    this.hits = 0;
    this.direction = direction;
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

  switchDirection() {
    this.direction === 'Horizontal' ?
      this.direction = 'Vertical' :
      this.direction = 'Horizontal';
  }
}