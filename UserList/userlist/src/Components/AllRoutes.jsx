import { Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import HomePage from "./HomePage";
import ShowUser from "./ShowUser";

//TO CREATE PATH FOR APP

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/addusers" element={<AddUser />} />
        <Route path="/userlist" element={<ShowUser />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
