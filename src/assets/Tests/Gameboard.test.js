import { describe, it, expect, expectTypeOf } from "vitest";
import Gameboard from "../Game logic/Gameboard.js";
import Ship from '../Game logic/Ship.js';

let gameboard = new Gameboard();
let ship = new Ship(4);

it('Gameboard is correctly created and sized', () => {
  expectTypeOf(gameboard.boardArr).toBeArray();
  expect(gameboard.boardArr[0][0]).toBeNull();
  expect(gameboard.boardArr[0][9]).toBeNull();
  expect(gameboard.boardArr[9][0]).toBeNull();
  expect(gameboard.boardArr[9][9]).toBeNull();
});

describe('Ships placement on a gameboard', () => {
  it('4 sized ship is placed correctly in board array', () => {
    gameboard.placeShip(ship, 1, 1);
    expect(gameboard.boardArr[1][1]).not.toBeNull();
    expect(gameboard.boardArr[2][1]).not.toBeNull();
    expect(gameboard.boardArr[3][1]).not.toBeNull();
    expect(gameboard.boardArr[4][1]).not.toBeNull();
  });

  it('ship placement didnt go over its size', () => {
    expect(gameboard.boardArr[0][1]).toBeNull();
    expect(gameboard.boardArr[5][1]).toBeNull();
  });

  it('doesnt place a ship that goes over gameboard horizontally', () => {
    gameboard.placeShip(ship, 8, 1);
    expect(gameboard.boardArr[8][1]).toBeNull();
    expect(gameboard.boardArr[9][1]).toBeNull();
  });

  it('doesnt place a ship that goes over gameboard Vertically', () => {
    ship.switchDirection();
    gameboard.placeShip(ship, 1, 8);
    expect(gameboard.boardArr[1][8]).toBeNull();
    expect(gameboard.boardArr[1][9]).toBeNull();
  });

  it('only one ship was able to be placed', () => {
    expect(gameboard.ships.length).toBe(1);
  });

});