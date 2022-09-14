const GET_USERS_REQUEST = "GET_USERS_REQUEST";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUserRequest = () =>{
    return {
        type: GET_USERS_REQUEST,
    }
}

export const getUserSuccess = (data) =>{
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
}

export const getUserFailure = () =>{
    return {
        type: GET_USERS_FAILURE
    }
}
