import {combineReducers} from 'redux';
import courses from './courseReducer';
import PropTypes from 'prop-types';
const rootReducer = combineReducers({
  courses
});

//console.log(PropTypes);

export default rootReducer;
