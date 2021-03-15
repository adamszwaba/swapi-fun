/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { SWApiShape } from "../../api";
import Resource, { ResourceUrl } from "./resource";

export type Gender = "male" | "female" | "n/a" | "unknown";

export interface Person extends Resource {
  birth_year: string;
  eye_color: string;
  films: ResourceUrl[];
  gender: Gender;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: ResourceUrl[];
  starships: ResourceUrl[];
  vehicles: ResourceUrl[];
}

export const fetchPeople = createAsyncThunk("people/fetchStatus", async () => {
  let result: Array<Person> = [];
  let resourceLink = "https://swapi.dev/api/people/";

  while (resourceLink) {
    try {
      const response = await axios.get<SWApiShape<Person>>(resourceLink);
      resourceLink = response.data.next;
      result = [...result, ...response.data.results];
    } catch (error) {
      console.log(error);
    }
  }
  return result;
});

const peopleAdapter = createEntityAdapter<Person>({
  selectId: (person) => person.name,
  sortComparer: (a, b) => {
    if (a.name[0] > b.name[0]) return 1;
    if (a.name[0] === b.name[0]) return 0;
    return -1;
  },
});

export const peopleSlice = createSlice({
  name: "people",
  initialState: peopleAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.loading = false;
        peopleAdapter.setAll(state, action.payload);
      });
  },
});

export default peopleSlice.reducer;
