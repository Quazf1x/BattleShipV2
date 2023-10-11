import { describe, it, expect } from "vitest";
import Ship from "../Game logic/Ship.js";

let ship = new Ship(3);

describe('ship is being hit', () => {
  it('ship registers one hit', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  it('ship is being hit doesng mean it\'s not sunk', () => {
    ship.hit();
    expect(ship.isSunk).toBeFalsy();
  });

  it('3 sized ship is sunk after 3 hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.isSunk).toBeTruthy();
  });

  it('3 sized ship stays sunk after 4 hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBeTruthy();
  });
});