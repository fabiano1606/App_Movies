import axios from "axios";
import {
  SET_ORDEM,
  SET_FILTERS,
  GET_GENRES,
  RESET_FILTERS,
} from "../constants/filters";

import { RESET_MOVIES } from "../constants/movie";

// Set Ordem
export const setOrdem = (ordem) => async (dispatch) => {
  dispatch({ type: RESET_MOVIES });
  dispatch({ type: RESET_FILTERS });
  dispatch({
    type: SET_ORDEM,
    payload: { ordem: ordem },
  });
};

// Set Sort
export const setFilters = (filters) => async (dispatch) => {
  dispatch({ type: RESET_MOVIES });
  dispatch({
    type: SET_FILTERS,
    payload: { filters: filters },
  });
};

// get Genres
export const getGenre = () => async (dispatch) => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=e033694029aca8ecc22a82a3b615a643&language=en-US"
  );
  if (res.data.genres) {
    const genres = res.data.genres.map((item, index) => ({
      label: item.name,
      value: item.id,
    }));

    dispatch({
      type: GET_GENRES,
      payload: { genres: genres },
    });
  }
};