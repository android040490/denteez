import axios from 'axios';

const autorizationToken = '94cad1a2866d745aee18d03b936c5daf18a19e79';

export const fetchServices = () => {
    return axios.get('http://504080.com/api/v1/services/categories', {
        headers: { 'Authorization' : autorizationToken }
      })
};

export const fetchEnquiryTypes = () => {
    return axios.get('http://504080.com/api/v1/directories/enquiry-types', {
        headers: { 'Authorization' : autorizationToken }
      })
};

export const submitContactUsForm = (request) => {
    return axios.post('http://504080.com/api/v1/support', request)
};