import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  jokeArray: [],
  flags: [],
  categories: [],
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    addJokes: (state, { payload: jokesArray }) => {
      state.jokeArray = jokesArray;
    },
    toggleFavorite: (state, { payload: id }) => {
      state.jokeArray = state.jokeArray.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          isFav: !item.isFav,
        };
      });
    },
    getMoreJokes: (state, { payload: jokesArray }) => {
      state.jokeArray = jokesArray;
    },
    getMetaData: (state, { payload }) => {
      state.categories = payload.categories;
      state.flags = payload.flags;
    },
    toggleCheckbox: (state, { payload: value }) => {
      if (state.categories.find((item) => item.value === value)) {
        state.categories = state.categories.map((item) => {
          if (item.value !== value) return item;
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        });
      } else {
        state.flags = state.flags.map((item) => {
          if (item.value !== value) return item;
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        });
      }
    },
  },
});

export const {
  addJokes,
  toggleFavorite,
  getMoreJokes,
  getMetaData,
  toggleCheckbox,
  clearMetaData,
} = jokesSlice.actions;

export const jokeSelector = (state) => state.jokes.jokeArray;

export const metaDataSelector = (state) => ({
  flags: state.jokes.flags,
  categories: state.jokes.categories,
});

export default jokesSlice.reducer;

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?type=single&amount=10"
      );
      const jokes = response.data.jokes.map((item) => ({
        id: item.id,
        category: item.category,
        joke: item.joke,
        isFav: false,
      }));

      dispatch(addJokes(jokes));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMoreJokesHandler = (categories, flags) => {
  return async (dispatch) => {
    try {
      let response;
      if (categories && !flags) {
        response = await axios.get(
          "https://v2.jokeapi.dev/joke/" + categories + "?type=single&amount=10"
        );
      } else if (categories && flags) {
        response = await axios.get(
          "https://v2.jokeapi.dev/joke/" +
            categories +
            "?blacklistFlags=" +
            flags +
            "&type=single&amount=10"
        );
      }
      const jokes = response.data.jokes.map((item) => ({
        id: item.id,
        category: item.category,
        joke: item.joke,
        isFav: false,
      }));
      dispatch(getMoreJokes(jokes));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMetaData = () => {
  return async (dispatch) => {
    try {
      let categories = await axios.get(
        "https://sv443.net/jokeapi/v2/categories"
      );
      let flags = await axios.get("https://sv443.net/jokeapi/v2/flags");

      categories = categories.data.categories.reduce((acc, curr) => {
        if (curr !== "Any") {
          acc.push({
            value: curr,
            isSelected: true,
          });
        }
        return acc;
      }, []);

      flags = flags.data.flags.map((item) => ({
        value: item,
        isSelected: false,
      }));
      dispatch(getMetaData({ categories, flags }));
    } catch (error) {
      console.log(error);
    }
  };
};
