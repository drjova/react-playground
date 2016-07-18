import {
  ADD_COUNTRY,
  RECEIVE_COUNTRIES,
  REMOVE_COUNTRY,
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

function userCountries(state={
  visited: []
}, action) {
  switch(action.type){
    case 'ADD_COUNTRY':
      return Object.assign({}, state, {
        visited: state.visited.push(state.name) || [state.name]
      });
    case 'REMOVE_COUNTRY':
      return Object.assign({}, state, {
        visited: state.visited.splice(state.visited.indexOf(state.name, 1))
      });
    default:
      return state;
  }
}

export default function(state = {}, action) {
  switch(action.type){
    case 'ADD_COUNTRY':
    case 'REMOVE_COUNTRY':
      return Object.assign(
        {},
        state,
        userCountries(state, action)
      );
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
