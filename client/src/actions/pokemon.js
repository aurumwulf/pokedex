import axios from 'axios';

export const SHOW_POKEMON = 'SHOW_POKEMON';

export const showPokemon = (url) => {
  return (dispatch) => {
    axios
      .get('/api/pokedex_search', { url })
      .then((res) => {
        dispatch({
          type: SHOW_POKEMON,
          pokemon: res.data,
          headers: res.headers,
        });
      });
  };
};
