/* eslint-disable import/prefer-default-export */

import { GameState, PieceType } from "./features/game/slice";
import { RootState } from "./store";

export const selectPieceType = (state: RootState): PieceType =>
  state.game.pieces;

export const getGameState = (state: RootState): GameState => state.game;
