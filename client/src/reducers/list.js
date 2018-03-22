import { LIST_POKEMON } from '../actions/list';

const list = (state = {}, action) => {
  switch (action.type) {
    case LIST_POKEMON:
      return action.list;
    default:
      return state;
  }
};

export default list;
