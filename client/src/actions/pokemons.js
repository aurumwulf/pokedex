import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const ADD_POKEMON = 'ADD_POKEMON';
export const UPDATE_POKEMON = 'UPDATE_POKEMON';
export const DELETE_POKEMON = 'DELETE_POKEMON';

export const getPokemon = (callback) => {
  return (dispatch) => {
    axios
      .get('/api/pokemons/')
      .then((res) =>
        dispatch({
          type: GET_POKEMON,
          pokemon: res.data,
        }),
      )
      .then(callback);
  };
};

export const addPokemon = (pokemon) => {
  return (dispatch) => {
    axios
      .post('/api/pokemons/', { pokemon })
      .then((res) =>
        dispatch({
          type: ADD_POKEMON,
          pokemon: res.data,
        }),
      );
  };
};

export const updatePokemon = (pokemon) => {
  return (dispatch) => {
    axios
      .put(`/api/pokemons/${pokemon.id}`, { pokemon })
      .then((res) =>
        dispatch({
          type: UPDATE_POKEMON,
          pokemon: res.data,
        }),
      );
  };
};

export const deletePokemon = (pokemon_id) => {
  return (dispatch) => {
    axios
      .delete(`/api/pokemons/${pokemon_id}`)
      .then((res) =>
        dispatch({
          type: DELETE_POKEMON,
          pokemon_id,
        }),
      );
  };
};
