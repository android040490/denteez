import R from 'ramda';

import {
    FETCH_ENQUIRY_TYPES_SUCCESS} from './../actionTypes';

const initialState = {
    listOfTypes : []
}

export const enquiryTypes = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_ENQUIRY_TYPES_SUCCESS : {
            return R.merge( state, {
                listOfTypes : payload
            })
        }

        default :
            return state
    }
}