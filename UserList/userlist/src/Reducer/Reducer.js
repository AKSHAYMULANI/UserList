//CREATE FOR DISPATCHER FUNCTION

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return { ...state, isDataLoading: true, dataAdded: false };
    case "GET_USERS_SUCCESS":
      return { ...state, isDataLoading: false, data: action.payload };
    case "GET_USERS_FAILURE":
      return { ...state, isError: true, isDataLoading: false };
    case "DELETE_USERS_REQUEST":
      return { ...state, isDataLoading: true };
    case "DELETE_USERS_SUCCESS":
      return { ...state, isDataLoading: false };
    case "DELETE_USERS_FAILURE":
      return { ...state, isError: true, isDataLoading: false };
    case "ADD_USERS_REQUEST":
      return { ...state, isDataLoading: true, dataAdded: false };
    case "ADD_USERS_SUCCESS":
      return { ...state, isDataLoading: false, dataAdded: true };
    case "ADD_USERS_FAILURE":
      return { ...state, isError: true, isDataLoading: false };
    default:
      return { state };
  }
};
