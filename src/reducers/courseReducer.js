import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
    // state.push(action.course);
    // return state;
    
    //Now using es6 spread operator below

    return [...state,
    Object.assign({}, action.course)
  ];

    default: 
      return state;
  }
}
