import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//HOME PAGE FOR NAVIGATION
const HomePage = () => {
  return (
    <>
      <Stack>
        <Link to={"/addusers"}>Add User</Link>
        <Link to={"/userlist"}>Show User</Link>
      </Stack>
    </>
  );
};

export default HomePage;
