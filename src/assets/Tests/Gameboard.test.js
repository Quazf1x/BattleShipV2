import { describe, it, expect, expectTypeOf } from "vitest";
import Gameboard from "../Game logic/Gameboard.js";

let gameboard = new Gameboard();

it('Gameboard is correctly created and sized', () => {
  expectTypeOf(gameboard.boardArr).toBeArray();
  expect(gameboard.boardArr[0][0]).toBeNull();
  expect(gameboard.boardArr[0][9]).toBeNull();
  expect(gameboard.boardArr[9][0]).toBeNull();
  expect(gameboard.boardArr[9][9]).toBeNull();
});