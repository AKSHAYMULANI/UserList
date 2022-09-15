import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import {
  addUserFailure,
  addUserRequest,
  addUserSuccess,
} from "../Reducer/ActionCreator";
import { addUser } from "./api";

const AddUser = () => {
  const { state, dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  var data;

  //EVERY TIME UPDATE THE DATA OBJECT

  useEffect(() => {
    data = {
      name: name,
      address: address,
    };
  }, [name, address]);

  //FOR ADD USER IN USERLIST
  function HandleAdd(data) {
    if (data.name === "" || data.address === "") {
      alert("Enter Complete Details");
      return;
    }
    dispatch(addUserRequest());
    addUser(data)
      .then(() => {
        dispatch(addUserSuccess());
        setName("");
        setAddress("");
      })
      .catch((err) => {
        dispatch(addUserFailure());
      });
  }

  return (
    <Box w={"80%"} m={"auto"}>
      <Text fontSize={"25px"}>Add Users</Text>
      {state.isDataLoading && <h1>...Loading</h1>}
      {state.dataAdded && <h1>User is Listed</h1>}
      <FormControl>
        <FormLabel>User Name</FormLabel>
        <Input
          type={"text"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={"Enter Full Name"}
          name={"UserName"}
        />
        <FormLabel>Address</FormLabel>
        <Textarea
          type={"address"}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder={"Enter Address"}
          name={"address"}
        />
      </FormControl>
      <Box m={"10px"}>
        <Button
          onClick={() => {
            HandleAdd(data);
          }}
        >
          Add User
        </Button>
      </Box>
      <Link to={"/"}>Go Back</Link>
    </Box>
  );
};

export default AddUser;
