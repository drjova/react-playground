import { INCREASE, DECREASE } from '../constants';

const initialState = {
  number: 1,
};

export default function(state = initialState, action) {
  if (action.type === INCREASE) {
    return Object.assign({}, state, {
      number: state.number + action.amount
    });
  } else if (action.type === DECREASE) {
    return Object.assign({}, state, {
      number: state.number - action.amount
    });
  }
  return state;
}
