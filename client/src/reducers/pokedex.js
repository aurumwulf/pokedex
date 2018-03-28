import { LIST_POKEMON } from '../actions/pokedex';

const pokedex = (state = {}, action) => {
  switch (action.type) {
    case LIST_POKEMON:
      return action.list;
    default:
      return state;
  }
};

export default pokedex;
