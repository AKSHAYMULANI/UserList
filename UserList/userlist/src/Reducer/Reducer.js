export const reducer = ( state , action ) =>{
    switch(action.type){
        case "GET_USERS_REQUEST"    : 
            return {...state , isDataLoading : true }
        case "GET_USERS_SUCCESS":
            return {...state , isDataLoading: false , data: action.payload }
        case "GET_USERS_FAILURE": 
            return {...state , isError: true , isLoading: false }
        default: return {state}    
    }
}