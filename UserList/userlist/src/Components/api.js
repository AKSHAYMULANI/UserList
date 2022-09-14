import axios from "axios";

export function getUsers() {
  return axios.get("https://test-users-database.herokuapp.com/users");
}

export function addUser(data = {}) {
  return axios.post("https://test-users-database.herokuapp.com/users", {
    name: data.name,
    address: data.address
  });
}