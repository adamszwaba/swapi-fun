/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import sanitizeNumericString from "../../utils/sanitize-numerics";
import Resource, { ResourceUrl } from "./resource";

export interface Starship extends Resource {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: ResourceUrl[];
  films: ResourceUrl[];
}
export const fetchStarships = createAsyncThunk(
  "starships/fetchStatus",
  async () => {
    let result: Array<Starship> = [];
    let resourceLink = "https://swapi.dev/api/starships/";

    while (resourceLink) {
      try {
        const response = await axios.get(resourceLink);
        resourceLink = response.data.next;
        result = [...result, ...response.data.results];
      } catch (error) {
        console.log(error);
      }
    }

    return result;
  }
);

const starshipsAdapter = createEntityAdapter<Starship>({
  selectId: (starship) => starship.name,
  sortComparer: (a, b) => {
    if (a.name[0] === b.name[0]) return 0;
    if (a.name[0] > b.name) return 1;
    return -1;
  },
});

export const starshipsSlice = createSlice({
  name: "starships",
  initialState: starshipsAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStarships.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStarships.fulfilled, (state, action) => {
        state.loading = false;
        starshipsAdapter.setAll(state, action.payload);
      });
  },
});

export default starshipsSlice.reducer;
