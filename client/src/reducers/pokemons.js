import {
  POKEMONS,
  ADD_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from '../actions/pokemons';

const pokemons = (state = [], action) => {
  switch (action.type) {
    case POKEMONS:
      return action.pokemons;
    case ADD_POKEMON:
      return [action.pokemon, ...state];
    case UPDATE_POKEMON:
      return state.map(p => {
        if (p.id === action.pokemon.id) {
          return action.pokemon;
        }
        return p;
      });
    case DELETE_POKEMON:
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
};

export default pokemons;
