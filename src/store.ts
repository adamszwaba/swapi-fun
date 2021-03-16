import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import gameReducer from "./features/game/slice";
import peopleReducer from "./features/people/people";
import starshipsReducer from "./features/starships/starships";

const store = configureStore({
  reducer: {
    game: gameReducer,
    people: peopleReducer,
    starships: starshipsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["game/choosePiece"],
      ignoredPaths: ["game.chosenPieces.user", "game.chosenPieces.oponent"],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
