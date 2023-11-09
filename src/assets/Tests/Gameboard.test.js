import { describe, it, expect, expectTypeOf } from "vitest";
import Gameboard from "../Game logic/Gameboard.js";

let gameboard = new Gameboard();

it("Gameboard is correctly created and sized", () => {
  expectTypeOf(gameboard.boardArr).toBeArray();
  expect(gameboard.boardArr[0][0]).toBeNull();
  expect(gameboard.boardArr[0][9]).toBeNull();
  expect(gameboard.boardArr[9][0]).toBeNull();
  expect(gameboard.boardArr[9][9]).toBeNull();
});

describe("Ships placement on a gameboard", () => {
  it("4 sized ship is placed correctly in board array", () => {
    gameboard.placeShip(1, 1, 4);
    expect(gameboard.boardArr[1][1]).not.toBeNull();
    expect(gameboard.boardArr[2][1]).not.toBeNull();
    expect(gameboard.boardArr[3][1]).not.toBeNull();
    expect(gameboard.boardArr[4][1]).not.toBeNull();
  });

  it("ship placement didnt go over its size", () => {
    expect(gameboard.boardArr[0][1]).toBeNull();
    expect(gameboard.boardArr[5][1]).toBeNull();
  });

  it("doesnt place a ship that goes over gameboard horizontally", () => {
    gameboard.placeShip(8, 1, 4);
    expect(gameboard.boardArr[8][1]).toBeNull();
    expect(gameboard.boardArr[9][1]).toBeNull();
  });

  it("doesnt place a ship that goes over gameboard Vertically", () => {
    gameboard.placeShip(1, 8, 4, "Vertical");
    expect(gameboard.boardArr[1][8]).toBeNull();
    expect(gameboard.boardArr[1][9]).toBeNull();
  });

  it("only one ship was able to be placed", () => {
    expect(gameboard.ships.length).toBe(1);
  });
});

describe("Gameboard recieves hits correctly", () => {
  it("ship gets shot once", () => {
    gameboard.placeShip(1, 4, 1, "Vertical");
    gameboard.receiveAttack(2, 1);
    expect(gameboard.boardArr[2][1].ship.hits).toBe(1);
  });

  it("ship cant be hit in one spot 2 or more times", () => {
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(2, 1);
    expect(gameboard.ships[0].hits).toBe(1);
  });

  it("ship cant be hit in one spot 2 or more times", () => {
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(2, 1);
    expect(gameboard.ships[0].hits).toBe(1);
  });

  it("missed attack cell is marked as a miss", () => {
    gameboard.receiveAttack(5, 5);
    expect(gameboard.boardArr[5][5]).toEqual("miss");
  });

  it("none of the shots hit the second ship", () => {
    expect(gameboard.ships[1].hits).toBe(0);
  });
});

describe("Gameboard recieves hits correctly", () => {
  it("ships are not sunk yet before shots", () => {
    expect(gameboard.areAllShipsSunk()).toBeFalsy();
  });

  it("after all ships are sunk. reports it as true", () => {
    gameboard.receiveAttack(1, 4);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(3, 1);
    gameboard.receiveAttack(4, 1);

    expect(gameboard.areAllShipsSunk()).toBeTruthy();
  });
});

// describe('Gameboard recieves hits correctly', () => {
//   it('random hits are correct', () => {
//     const [x, y] = gameboard.recieveRandomAttack();
//     expect(gameboard.boardArr[x][y]).toBe('miss');
//   });
// });
