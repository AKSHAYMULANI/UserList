import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../Context/AppContextProvider"
import { getUserRequest } from "../Reducer/ActionCreator"
import { getUsers } from "./api"

const ShowUser = () =>{

    const {state, dispatch} = useContext(AppContext);

    useEffect(()=>{
        dispatch(getUserRequest())
        getUsers().then((res)=>{
            console.log(res.data)
        })
    },[])


    return(
        <Box>
        
        <Link to={'/'}>Go Back</Link>
        </Box>
    )
}

export default ShowUser