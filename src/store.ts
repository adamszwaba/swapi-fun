import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game/slice";
import peopleReducer from "./features/game/people";
import starshipsReducer from "./features/game/starships";

const store = configureStore({
  reducer: {
    game: gameReducer,
    people: peopleReducer,
    starships: starshipsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
