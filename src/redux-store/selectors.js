//serviceDirectory reducer 

export const getServicesData = (state) => state.serviceDirectory.services;

export const getServicesLoading = (state) => state.serviceDirectory.loading;

export const getServicesError = (state) => state.serviceDirectory.error;

export const getServicesErrorObject = (state) => state.serviceDirectory.errorObj;

//enquiryTypes reducer

export const getListOfEnquiryTypes = (state) => state.enquiryTypes.listOfTypes;
