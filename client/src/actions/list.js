import axios from 'axios';

export const LIST_POKEMON = 'LIST_POKEMON';

export const listPokemon = () => {
  return (dispatch) => {
    axios.get('/api/pokedex').then((res) =>
      dispatch({
        type: LIST_POKEMON,
        list: res.data,
      }),
    );
  };
};
