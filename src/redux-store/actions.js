import {
    FETCH_SERVICES_START,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE,
    FETCH_ENQUIRY_TYPES_START,
    FETCH_ENQUIRY_TYPES_SUCCESS } from './actionTypes';

import {fetchServices, fetchEnquiryTypes} from 'API';

export const getServices = () => (dispatch) => {
    dispatch({type : FETCH_SERVICES_START});

    fetchServices().
        then((resp) => {
            dispatch({
                type : FETCH_SERVICES_SUCCESS,
                payload : resp.data.data
            })
        }).
        catch((error) =>{
            if ( error.response.status >= 400){
                dispatch({
                    type : FETCH_SERVICES_FAILURE,
                    errorObject : error.response.data.error,
                    error : true
                })
            }
        }); 
} 

export const getEnquiryTypes = () => (dispatch) => {
    dispatch({type : FETCH_ENQUIRY_TYPES_START})

    fetchEnquiryTypes().
        then((resp) => {
            dispatch({
                type : FETCH_ENQUIRY_TYPES_SUCCESS,
                payload : resp.data.data
            })
        }).
        catch((error) =>{
            console.log(error.response.data.error.description);
          });
}