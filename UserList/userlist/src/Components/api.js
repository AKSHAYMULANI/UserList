import axios from "axios";

//GET DATA FROM API
export function getUsers() {
  return axios.get("https://test-users-database.herokuapp.com/users");
}

//ADD USER TO API
export function addUser(data = {}) {
  return axios.post("https://test-users-database.herokuapp.com/users", {
    name: data.name,
    address: data.address,
  });
}

//DELETE USER FROM API
export function deleteUser(id) {
  return axios({
    url: `https://test-users-database.herokuapp.com/users/${id}`,
    method: "DELETE",
  });
}
