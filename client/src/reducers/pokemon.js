import { SHOW_POKEMON } from '../actions/pokemon';

const pokemon = (state = {}, action) => {
  switch (action.type) {
    case SHOW_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemon;
