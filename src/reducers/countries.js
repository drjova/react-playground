import {
  RECEIVE_COUNTRIES,
  REQUEST_COUNTRIES
} from '../constants';


function countries(state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type){
    case RECEIVE_COUNTRIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });

    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        isFetching: true,
        items: action.items,
      });
    default:
      return state;
  }
}

export default function(state = {}, action) {
  switch(action.type){
    case RECEIVE_COUNTRIES:
    case REQUEST_COUNTRIES:
      return Object.assign(
        {},
        state,
        countries(state, action)
      );
    default:
      return state;
  }
}
