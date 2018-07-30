import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {serviceDirectory} from './serviceDirectory';
import {enquiryTypes} from './enquiryTypes';


export default combineReducers({
    routing: routerReducer,
    serviceDirectory,
    enquiryTypes
});
