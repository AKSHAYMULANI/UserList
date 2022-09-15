import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import {
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  getUserFailure,
  getUserRequest,
  getUserSuccess,
} from "../Reducer/ActionCreator";
import { deleteUser, getUsers } from "./api";
import UserCard from "./UserCard";

const ShowUser = () => {
  const { state, dispatch } = useContext(AppContext);

  //TO GET USERLIST
  function GetUserData() {
    dispatch(getUserRequest());
    getUsers()
      .then((res) => {
        console.log(res.data);
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserFailure());
      });
  }

  //TO DELETE USERS
  function HandleDelete(id) {
    dispatch(deleteUserRequest());
    deleteUser(id)
      .then(() => {
        GetUserData();
        dispatch(deleteUserSuccess());
      })
      .catch((err) => {
        dispatch(deleteUserFailure());
      });
  }

  //TO EVERYTIME UPDATED USERLIST
  useEffect(() => {
    GetUserData();
  }, []);

  return (
    <Box w={"80%"} m={"15px auto"}>
      <Text fontSize={"25PX"}>USER LIST</Text>
      {state.isDataLoading && <h1>...Loading</h1>}
      {state.isError && <h1>...ERROR</h1>}
      <UserCard data={state.data} HandleDelete={HandleDelete} />
      <Link to={"/"}>Go Back</Link>
    </Box>
  );
};

export default ShowUser;
