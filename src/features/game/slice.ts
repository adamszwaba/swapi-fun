import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../player/player";

export type PieceType = "people" | "starships";

export type PieceIndex = number;
export type GameState = {
  pieces: PieceType;
  chosenPieces: Record<Player, PieceIndex>;
  winner: PieceIndex;
};

const initialState: GameState = {
  pieces: "people",
  chosenPieces: {
    user: 0,
    oponent: 0,
  },
  winner: -1,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeResource: (state, action: PayloadAction<PieceType>) => {
      state.pieces = action.payload;
    },
    toggleResource: (state) => {
      state.pieces = state.pieces === "people" ? "starships" : "people";
    },
    choosePiece: (
      state,
      action: PayloadAction<{ player: Player; pieceIndex: PieceIndex }>
    ) => {
      state.chosenPieces[action.payload.player] = action.payload.pieceIndex;
    },
    resetBoard: (state) => {
      state.winner = -1;
    },
  },
});

export const { changeResource, toggleResource, resetBoard } = gameSlice.actions;

export default gameSlice.reducer;
