import R from 'ramda';

import {
    FETCH_SERVICES_START,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE
    } from './../actionTypes';

const initialState = {
    services : [],
    loading : false
}

export const serviceDirectory = (state = initialState, {type, payload, errorObject, error}) =>{
    switch (type){
        case FETCH_SERVICES_START : {
            return R.merge(state, {
                loading : true
            })
        }

        case FETCH_SERVICES_SUCCESS : {
            return R.merge( state, {
                services : payload,
                loading : false
            })
        }

        case FETCH_SERVICES_FAILURE : {
            return R.merge( state, {
                errorObj : errorObject,
                error : true,
                loading : false
            })
        }

        default : 
            return state
    }
}