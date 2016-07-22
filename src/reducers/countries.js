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
      return {
        isFetching: false,
        items: action.items
      };
    case REQUEST_COUNTRIES:
      return{
        isFetching: true,
        items: action.items,
      };
    default:
      return state;
  }
}

function userCountries(state={
  visited: []
}, action) {
  switch(action.type){
    case 'ADD_COUNTRY':
      var _add = state.visited || [];
      _add.push(action.name);
      return {
        visited: _add
      };
    case 'REMOVE_COUNTRY':
      var _remove = state.visited || [];
       _remove.splice(_remove.indexOf(action.name, 1));
      return {
        visited: _remove
      };
    default:
      return state;
  }
}

export default function(state = {}, action) {
  switch(action.type){
    case 'ADD_COUNTRY':
    case 'REMOVE_COUNTRY':
      // FIXME
      return Object.assign(
        {},
        state,
        userCountries(state, action)
      );
    case RECEIVE_COUNTRIES:
    case REQUEST_COUNTRIES:
      // FIXME
      return Object.assign(
        {},
        state,
        countries(state, action)
      );
    default:
      return state;
  }
}
