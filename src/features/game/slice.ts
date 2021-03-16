import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../player/player";
import { Person } from "../people/people";
import { Comparable } from "./resource";
import { Starship } from "../starships/starships";

export type PieceType = "people" | "starships";

export type PersonOrStarship = Person | Starship;

export type PieceIndex = number;
export type GameState = {
  pieces: PieceType;
  chosenPieces: Record<Player, Comparable<PersonOrStarship> | null>;
  winner: Player | "tie" | null;
  score: Record<Player, number>;
};

const initialState: GameState = {
  pieces: "people",
  chosenPieces: {
    user: null,
    oponent: null,
  },
  winner: null,
  score: { user: 0, oponent: 0 },
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
      action: PayloadAction<{
        player: Player;
        piece: Comparable<PersonOrStarship>;
      }>
    ) => {
      state.chosenPieces[action.payload.player] = action.payload.piece;
      state.winner = null;
    },
    resetBoard: (state) => {
      state.winner = null;
    },
    setWinner: (state, action: PayloadAction<Player>) => {
      state.winner = action.payload;
      state.score[action.payload] += 1;
    },
    tie: (state) => {
      state.winner = "tie";
      state.score.user += 0.5;
      state.score.oponent += 0.5;
    },
  },
});

export const {
  choosePiece,
  changeResource,
  toggleResource,
  resetBoard,
  setWinner,
  tie,
} = gameSlice.actions;

export default gameSlice.reducer;
