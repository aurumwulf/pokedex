import axios from 'axios';

export const LIST_POKEMON = 'LIST_POKEMON';

export const listPokemon = (url, page) => {
  return (dispatch) => {
    axios
      .get(`/api/pokedex`, { params: { url, page } })
      .then((res) =>
        dispatch({
          type: LIST_POKEMON,
          list: res.data,
          headers: res.headers,
        }),
      );
  };
};
